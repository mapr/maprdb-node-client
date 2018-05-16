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

import {com} from '../proto'
import {Callback} from '../types'
import {createConnection, withOptionalCallback, retryDecorator} from './utils'
import Promise from 'bluebird'
import ICreateTableRequest = com.mapr.data.db.ICreateTableRequest
import ErrorCode = com.mapr.data.db.ErrorCode
import IDeleteTableRequest = com.mapr.data.db.IDeleteTableRequest
import IDeleteTableResponse = com.mapr.data.db.IDeleteTableResponse
import ITableExistsRequest = com.mapr.data.db.ITableExistsRequest
import ITableExistsResponse = com.mapr.data.db.ITableExistsResponse
import ICreateTableResponse = com.mapr.data.db.ICreateTableResponse

import {DocumentStore} from './DocumentStore'

/*
 * Class that responsible for calls to grpc service
 */
export class Connection {
  private _url: string
  private _connection: any

  constructor(url: string) {
    this._url = url
    this._connection = Promise.promisifyAll(createConnection(this._url))
  }

  public createStore(storePath: string, callback?: Callback): void|Promise<any> {
    const request: ICreateTableRequest = {tablePath: storePath}

    return withOptionalCallback(
      retryDecorator(() => this._connection.createTableAsync(request)),
      (response: ICreateTableResponse) => {
        if (response.error.errCode === ErrorCode.NO_ERROR) {
          return true
        }
        throw response.error
      },
      callback,
    )
  }

  public storeExists(storePath: string, callback?: Callback): void|Promise<any> {
    const request: ITableExistsRequest = {tablePath: storePath}

    return withOptionalCallback(
      retryDecorator(() => this._connection.tableExistsAsync(request)),
      (response: ITableExistsResponse) => {
        if (response.error.errCode === ErrorCode.NO_ERROR) {
          return true
        }
        if (response.error.errCode === ErrorCode.TABLE_NOT_FOUND) {
          return false
        }
        throw response.error
      },
      callback,
    )
  }

  public deleteStore(storePath: string, callback?: Callback): void|Promise<any> {
    const request: IDeleteTableRequest = {tablePath: storePath}

    return withOptionalCallback(
      retryDecorator(() => this._connection.deleteTableAsync(request)),
      (response: IDeleteTableResponse) => {
        if (response.error.errCode === ErrorCode.NO_ERROR) {
          return true
        }
        throw response.error
      },
      callback,
    )
  }

  public getStore(storePath: string) {
    if (typeof storePath !== 'string') {
      throw Error('Table name should be string')
    }

    return new DocumentStore(storePath, this._connection)
  }
  public close() {
    this._connection.close()
  }
}
