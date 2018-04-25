/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
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
