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
import {URL} from 'url'
import {Metadata} from 'grpc'
import {ConnectionInfo} from './ConnectionInfo'

/*
 * Class that responsible for calls to grpc service
 */
export class Connection {
  private _connection: any
  private connectionInfo: ConnectionInfo

  constructor(url: string) {
    this.connectionInfo = this.constructConnectionInfo(url)
    this._connection = Promise.promisifyAll(createConnection(this.connectionInfo))
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

  private constructConnectionInfo(url: string): ConnectionInfo {
    const urlParts = url.split('?')
    const urlToExtractArgs = (urlParts.length > 1) ?
      `https://dummyhost:0000?${urlParts[1].replace(/\;/g, '\&')}` :
      'https://dummyhost:0000'
    const argsURL = new URL(urlToExtractArgs)
    const params = argsURL.searchParams
    const authType = params.get('auth') || 'basic'
    const username = params.get('username') || ''
    const passwd = params.get('password') || ''
    const ssl = params.get('ssl') === 'true'
    const sslCa = params.get('sslCA') || ''
    const sslTargetNameOverride = params.get('sslTargetNameOverride') || ''

    if (ssl && sslTargetNameOverride === '') {
      throw Error('\'sslTargetNameOverride\' must be specified when ssl enabled.')
    }
    if (ssl && sslCa === '') {
      throw Error('sslCa must be specified when ssl enabled.')
    }
    if (authType !== 'basic') {
      throw Error('Only \'basic\' authentication is currently supported.')
    }
    if (authType === 'basic' &&
      (username === '' ||
      passwd === '')) {
      throw Error('user and password must be specified when auth is basic.')
    }

    const meta = new Metadata()
    meta.add('auth', authType)
    meta.add('username', username)
    meta.add('password', passwd)

    return new ConnectionInfo(
      urlParts[0],
      ssl,
      sslCa,
      meta,
      sslTargetNameOverride)
  }
}
