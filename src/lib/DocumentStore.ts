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

import {decode, encode, InsertOrReplaceRequestBuilder, withOptionalCallback} from './utils'
import {Callback} from '../types'
import {QueryResult} from '../ojai/QueryResult'

import {com} from '../proto'
import IInsertOrReplaceResponse = com.mapr.data.db.IInsertOrReplaceResponse
import IFindByIdResponse = com.mapr.data.db.IFindByIdResponse
import IFindRequest = com.mapr.data.db.IFindRequest
import IUpdateRequest = com.mapr.data.db.IUpdateRequest
import IDeleteRequest = com.mapr.data.db.IDeleteRequest
import IUpdateResponse = com.mapr.data.db.IUpdateResponse
import IDeleteResponse = com.mapr.data.db.IDeleteResponse
import InsertMode = com.mapr.data.db.InsertMode
import IFindByIdRequest = com.mapr.data.db.IFindByIdRequest
import PayloadEncoding = com.mapr.data.db.PayloadEncoding
import ErrorCode = com.mapr.data.db.ErrorCode
import {ConnectionInfo} from './ConnectionInfo'
import * as Log from './logging'
import {ConnectionOptions} from '..'

const logger = Log.getLogger(__filename)

export interface FindOptions {
  'ojai.mapr.query.include-query-plan': boolean
  'ojai.mapr.query.timeout-milliseconds'?: number
}

const TIMEOUT_MAX = 2147483647

/*
 * Class that responsible for operation with documents
 */
export class DocumentStore {
  private readonly storePath: string
  private connection: any
  private connectionInfo: ConnectionInfo
  private readonly retryDecorator: any
  private readonly connectionOptions: ConnectionOptions

  /**
   * @hidden
   */
  constructor(storePath: string,
              connection: any,
              connectionInfo: ConnectionInfo,
              retryDecorator: any,
              connectionOptions: ConnectionOptions) {
    this.storePath = storePath
    this.connection = connection
    this.connectionInfo = connectionInfo
    this.retryDecorator = retryDecorator
    this.connectionOptions = connectionOptions
  }
  public insertOrReplace(document: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.INSERT_OR_REPLACE, callback)
  }
  public insert(document: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.INSERT, callback)
  }
  public replace(document: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.REPLACE, callback)
  }
  public checkAndReplace(document: any, condition: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.REPLACE, condition, callback)
  }
  public findById(id: string|Buffer, condition?: any, projections?: string[], callback?: Callback): void|Promise<any> {
    const reqPayload = {_id: id}
    const request: IFindByIdRequest = {
      tablePath: this.storePath,
      projections,
      jsonCondition: encode(condition),
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      jsonDocument: encode(reqPayload),
    }

    return withOptionalCallback(
      this.retryDecorator(() => {
        logger.debug('Sending FIND BY ID request to the server. Request body: %j', request)

        return this.connection.findByIdAsync(request, this.connectionInfo.validationMetadata)
          .then((resp: IFindByIdResponse) => {
            logger.debug('Receiving FIND BY ID response to the server. Response body: %j', resp)

            return resp
          })
      }),
      (response: IFindByIdResponse) => {
        if (response.error.errCode === ErrorCode.NO_ERROR) {
          return decode(response.jsonDocument, response.payloadEncoding)
        }
        if (response.error.errCode === ErrorCode.DOCUMENT_NOT_FOUND) {
          return null
        }
        throw response.error
      },
      callback,
    )
  }
  public find(query: any, findOptions: FindOptions = {
    'ojai.mapr.query.include-query-plan': false,
  }): QueryResult<any> {
    const includeQueryPlanParam = findOptions['ojai.mapr.query.include-query-plan']
    const timeoutParam = findOptions['ojai.mapr.query.timeout-milliseconds']
    if (timeoutParam > TIMEOUT_MAX) {
      throw new Error('Timeout is bigger than maximum')
    }
    const request: IFindRequest = {
      tablePath: this.storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      includeQueryPlan: includeQueryPlanParam,
      jsonQuery: encode(query),
    }
    logger.debug('Sending FIND request to the server. Request body: %j', request)

    return new QueryResult(() => this.connection.find(
      request, this.connectionInfo.validationMetadata,
      timeoutParam ? { deadline: Date.now() + timeoutParam } : undefined,
    ),                     this.connectionOptions)
  }
  public delete(_id: string, callback?: Callback): void|Promise<any> {
    return this.grpcDelete(_id, callback)
  }
  public checkAndDelete(_id: string, condition: any, callback?: Callback): void|Promise<any> {
    return this.grpcDelete(_id, condition, callback)
  }
  public update(_id: string, mutation: any, callback?: Callback): void|Promise<any> {
    return this.grpcUpdate(_id, mutation, callback)
  }
  public checkAndUpdate(_id: string, mutation: any, condition: any, callback?: Callback): void|Promise<any> {
    return this.grpcUpdate(_id, mutation, condition, callback)
  }
  private grpcInsertOrReplace(
    document: any,
    mode: InsertMode,
    conditionOrCallback?: any,
    optionalCallback?: Callback,
  ): void|Promise<any> {
    const { condition, callback } = this.handleOptionalParams(conditionOrCallback, optionalCallback)

    const request = InsertOrReplaceRequestBuilder(document, this.storePath, mode, condition)

    return withOptionalCallback(
      this.retryDecorator(() => {
        logger.debug('Sending INSERT OR REPLACE request to the server. Request body: %j', request)

        return this.connection.insertOrReplaceAsync(request, this.connectionInfo.validationMetadata)
          .then((resp: IInsertOrReplaceResponse) => {
            logger.debug('Receiving INSERT OR REPLACE response to the server. Response body: %j', resp)

            return resp
          })
      }),
      (response: IInsertOrReplaceResponse) => {
        if (response.error.errCode === ErrorCode.NO_ERROR) {
          return true
        } else if (response.error.errCode == ErrorCode.DOCUMENT_NOT_FOUND) {
          return false
        }
        throw response.error
      },
      callback,
    )
  }
  private grpcUpdate(_id: string, mutation: any, conditionOrCallback?: any, optionalCallback?: Callback): void|Promise<any> {
    const { condition, callback } = this.handleOptionalParams(conditionOrCallback, optionalCallback)

    const request: IUpdateRequest = {
      tablePath: this.storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      jsonDocument: encode({ _id }),
      jsonCondition: encode(condition),
      jsonMutation: encode(mutation),
    }

    return withOptionalCallback(
      this.retryDecorator(() => {
        logger.debug('Sending UPDATE request to the server. Request body: %j', request)

        return this.connection.updateAsync(request, this.connectionInfo.validationMetadata)
          .then((resp: IUpdateResponse) => {
            logger.debug('Receiving UPDATE response to the server. Response body: %j', resp)

            return resp
          })
      }),
      (response: IUpdateResponse) => {
        if (response.error.errCode === ErrorCode.NO_ERROR) {
          return true
        }
        if (response.error.errCode === ErrorCode.DOCUMENT_NOT_FOUND) {
          return false
        }
        throw response.error
      },
      callback,
    )
  }
  private grpcDelete(_id: string, conditionOrCallback?: any, optionalCallback?: Callback): void|Promise<any> {
    const { callback, condition } = this.handleOptionalParams(conditionOrCallback, optionalCallback)

    const request: IDeleteRequest = {
      tablePath: this.storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      jsonDocument: encode({ _id }),
      jsonCondition: encode(condition),
    }

    return withOptionalCallback(
      this.retryDecorator(() => {
        logger.debug('Sending DELETE request to the server. Request body: %j', request)

        return this.connection.deleteAsync(request, this.connectionInfo.validationMetadata)
          .then((resp: IDeleteResponse) => {
            logger.debug('Receiving DELETE response to the server. Response body: %j', resp)

            return resp
          })
      }),
      (response: IDeleteResponse) => {
        if (response.error.errCode === ErrorCode.NO_ERROR) {
          return true
        }
        throw response.error
      },
      callback,
    )
  }
  private handleOptionalParams(conditionOrCallback?: any, optionalCallback?: Callback) {
    let condition
    let callback
    if (optionalCallback !== undefined) {
      condition = conditionOrCallback
    } else if (conditionOrCallback !== undefined) {
      if (typeof conditionOrCallback === 'function') {
        callback = conditionOrCallback
      } else {
        condition = conditionOrCallback
      }
    }

    return {condition, callback}
  }
}
