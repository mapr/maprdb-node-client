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

import {ClientReadableStream} from 'grpc'
import {Transform} from 'stream'

export class DocumentStream extends Transform {
  private stream: ClientReadableStream
  constructor(stream: ClientReadableStream) {
    super({ writableObjectMode: true, readableObjectMode: true })
    this.stream = stream
    this.stream.pipe(this)
  }
  public _transform(chunk: any, encoding: any, callback: any) {
    this.push(JSON.parse(chunk.jsonResponse))
    callback()
  }
  public toPromise() {
    return new Promise((resolve, reject) => {
      const results = [];
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
