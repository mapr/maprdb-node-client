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
import {createConnection} from './Connection'

import ICreateTableRequest = com.mapr.data.db.ICreateTableRequest
import ErrorCode = com.mapr.data.db.ErrorCode
import IDeleteTableRequest = com.mapr.data.db.IDeleteTableRequest
import IDeleteTableResponse = com.mapr.data.db.IDeleteTableResponse
import ITableExistsRequest = com.mapr.data.db.ITableExistsRequest
import ITableExistsResponse = com.mapr.data.db.ITableExistsResponse
import {DocumentStore} from './DocumentStore'

/*
 * Class that responsible for calls to grpc service
 */
export class StoreConnection {
  private _url: string
  private _connection: any

  constructor(url: string) {
    this._url = url
    this._connection = createConnection(this._url)
  }

  public createStore(storePath: string, callback?: Callback): void|Promise<any> {
    const request: ICreateTableRequest = {tablePath: storePath}

    if (callback) {
      this._connection.createTable(request, (err, response) => {
        this.handleDefaultCallback(err, response, callback)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.createTable(request, (err, response) => {
        this.handleDefaultPromise(err, response, resolve, reject)
      })
    })
  }

  public storeExists(storePath: string, callback?: Callback): void|Promise<any> {
    const request: ITableExistsRequest = {tablePath: storePath}

    if (callback) {
      this._connection.tableExists(request, (err, response: ITableExistsResponse) => {
        if (err) {
          return callback(err)
        }

        if (response.error) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
          if (response.error.errCode === ErrorCode.TABLE_NOT_FOUND) {
            return callback(null, false)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.tableExists(request, (err, response: ITableExistsResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
          if (response.error.errCode === ErrorCode.TABLE_NOT_FOUND) {
            return resolve(false)
          }
        }
        reject(err || response.error)
      })
    })
  }

  public deleteStore(storePath: string, callback?: Callback): void|Promise<any> {
    const request: IDeleteTableRequest = {tablePath: storePath}

    if (callback) {
      this._connection.deleteTable(request, (err, response: IDeleteTableResponse) => {
        this.handleDefaultCallback(err, response, callback)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.deleteTable(request, (err: Error, response: IDeleteTableResponse) => {
        this.handleDefaultPromise(err, response, resolve, reject)
      })
    })
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
  private handleDefaultCallback(err: Error, response: any, callback?: Callback): void {
    if (!err && (response.error.errCode === ErrorCode.NO_ERROR)) {
      return callback(null, true)
    }
    callback(err || response.error)
  }

  private handleDefaultPromise(err: Error, response: any, resolve: any, reject: any): void {
    if (!err && (response.error.errCode === ErrorCode.NO_ERROR)) {
      return resolve(true)
    }
    reject(err || response.error)
  }
}
