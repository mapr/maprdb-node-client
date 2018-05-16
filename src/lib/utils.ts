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

import {credentials, loadObject, status, StatusObject} from 'grpc'
import {com} from '../proto'
import {loadSync} from 'protobufjs'
import {join} from 'path'

import InsertMode = com.mapr.data.db.InsertMode
import PayloadEncoding = com.mapr.data.db.PayloadEncoding
import IInsertOrReplaceRequest = com.mapr.data.db.IInsertOrReplaceRequest
import {parseOJAIDocument, stringifyOJAIDocument} from '../ojai/OJAIUtils'
import {Callback} from '../types'
import promiseRetry from 'promise-retry'
import {WrapOptions} from 'retry'

const PROTO_PATH = join(__dirname, '../../proto/maprdb-server.proto')
const protoPackage = loadSync(PROTO_PATH)
const grpcObject: any = loadObject(protoPackage, { enumsAsStrings: false })
const MapRDbServer = grpcObject.com.mapr.data.db.MapRDbServer

export const createConnection = (url: string) => {
  return new MapRDbServer(url, credentials.createInsecure())
}

export const encode = (payload: Object, encoding: PayloadEncoding = PayloadEncoding.JSON_ENCODING): string => {
  switch (encoding) {
    case PayloadEncoding.JSON_ENCODING:
      return stringifyOJAIDocument(payload)

    default:
      console.warn('Unknown encoding:', encoding)

      return String(payload)
  }
}

export const decode = (raw: any, encoding: PayloadEncoding): Object => {
  switch (encoding) {
    case PayloadEncoding.JSON_ENCODING:
      return parseOJAIDocument(raw)

    default:
      console.warn('Unknown encoding:', encoding)

      return raw
  }
}

export const InsertOrReplaceRequestBuilder =
  (document: Object, tablePath: string, insertMode: InsertMode, condition?: any): IInsertOrReplaceRequest => {
  const encoding = PayloadEncoding.JSON_ENCODING

  return {
    insertMode: insertMode,
    tablePath: tablePath,
    payloadEncoding: encoding,
    jsonCondition: encode(condition, encoding),
    jsonDocument: encode(document, encoding),
  }
}

export const withOptionalCallback = (method: any, mapper: any, callback?: Callback) => {
  const promise = method().then(mapper)
  if (!callback) {
    return promise
  }
  promise.then((response: any) => {
    callback(null, response)
  }).catch((err: Error) => {
    callback(err)
    throw err
  })
}

export const retryDecorator = (decoratedMethod: any, options: WrapOptions = { retries: 7, maxTimeout: 18000 }) => {
  return () => promiseRetry((retry) => {
    return decoratedMethod()
      .catch((err: StatusObject)  => {
        if (err.code === status.UNAVAILABLE || err.code === status.RESOURCE_EXHAUSTED) {
          retry(err)
        }

        throw err
      })
  },                        options)
}
