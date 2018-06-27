/*
 * Copyright (c) 2018 MapR, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ClientReadableStream, status, StatusObject} from 'grpc'
import retry from 'retry'
import {Transform} from 'stream'
import {decode} from '../lib/utils'
import {com} from '../../dist/proto'
import IFindResponse = com.mapr.data.db.IFindResponse
import FindResponseType = com.mapr.data.db.FindResponseType
import * as Log from '../lib/logging'
import {ConnectionOptions} from '..'

const logger = Log.getLogger(__filename)

export class QueryResult<T> extends Transform {
  public queryPlan: any

  private readonly runStream: () => ClientReadableStream<T>
  private stream: ClientReadableStream<T>
  private hasData: boolean
  constructor(runStream: () => ClientReadableStream<T>, connectionOptions: ConnectionOptions) {
    super({ writableObjectMode: true, readableObjectMode: true })
    this.runStream = runStream
    this.hasData = false
    const retryStream = () => {
      const operation = retry.operation(connectionOptions.toWrapOptions())
      operation.attempt(() => {
        this.stream = this.runStream()
        this.stream.on('error', (err: StatusObject) => {
          if (!this.hasData && (err.code === status.UNAVAILABLE || err.code === status.RESOURCE_EXHAUSTED)) {
            this.stream.unpipe(this)
            this.stream.destroy()
            if (operation.retry(<any>err)) {
              return
            }
          }
          this.emit('error', err)
        })
        this.stream.pipe(this)
      })
    }
    retryStream()
  }
  public _transform(chunk: IFindResponse, encoding: any, callback: any) {
    this.hasData = true

    logger.debug('Receiving chunk from the server. Response body: %j', chunk)

    const decodedChunk = decode(chunk.jsonResponse, chunk.payloadEncoding)
    if (chunk.type === FindResponseType.QUERY_PLAN) {
      this.queryPlan = decodedChunk
    } else if (chunk.type === FindResponseType.RESULT_DOCUMENT) {
      this.push(decodedChunk)
    } else {
      throw new Error('Unknown response type')
    }
    callback()
  }
  public toPromise() {
    return new Promise((resolve, reject) => {
      const results: any = []
      this.on('data', (chunk) => {
        results.push(chunk)
      })
      this.on('error', (err) => {
        reject(err)
      })
      this.on('end', () => {
        resolve(results)
      })
    })
  }
}
