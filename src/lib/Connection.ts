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
import * as grpc from 'grpc'
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
import {ConnectionInfo} from './ConnectionInfo'

/*
 * Class that responsible for calls to grpc service
 */
export class Connection {
  private readonly _connection: any
  private readonly connectionInfo: ConnectionInfo

  constructor(connectionString: string) {
    const metadataInterceptor = (options: any, nextCall: any) => {
      return new grpc.InterceptingCall(nextCall(options), {
        start: (metadata: any, listener: any, next: any) => {
          next(metadata, {
            onReceiveMetadata: (metadata1: any, next1: any) => {
              const token = metadata1.get('bearer-token')
              if (token.length > 0) {
                this.connectionInfo.setBearerAuth(token)
              }
              next1(metadata1)
            },
            onReceiveStatus: (status: any, next1: any) => {
              if (status.code === grpc.status.UNAUTHENTICATED) {
                if (status.details === 'STATUS_TOKEN_EXPIRED') {
                  // reset to basic auth
                  this.connectionInfo.setBasicAuth()
                }
                throw Error('Authentication failed. Invalid authentication credentials: user, password')
              }
              next1(status)
            },
          })
        },
      })
    }
    this.connectionInfo = this.constructConnectionInfo(connectionString)
    this._connection = Promise.promisifyAll(createConnection(this.connectionInfo, metadataInterceptor))
  }

  public createStore(storePath: string, callback?: Callback): void|Promise<any> {
    const request: ICreateTableRequest = {tablePath: storePath}

    return withOptionalCallback(
      retryDecorator(() => this._connection.createTableAsync(request, this.connectionInfo.validationMetadata)),
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
      retryDecorator(() => this._connection.tableExistsAsync(request, this.connectionInfo.validationMetadata)),
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
      retryDecorator(() => this._connection.deleteTableAsync(request, this.connectionInfo.validationMetadata)),
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

    return new DocumentStore(storePath, this._connection, this.connectionInfo)
  }
  public close() {
    this._connection.close()
  }

  private constructConnectionInfo(connectionString: string): ConnectionInfo {
    const connectionStringParts = connectionString.split('?')
    const dummyUrlToExtractArgs = (connectionStringParts.length > 1) ?
      `https://dummyhost:0000?${connectionStringParts[1].replace(/\;/g, '\&')}` :
      'https://dummyhost:0000'
    const params = new URL(dummyUrlToExtractArgs).searchParams
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

    const meta = new grpc.Metadata()
    const encodedUserMetadata = Buffer.from(`${username}:${passwd}`).toString('base64')
    const connectionInfo = new ConnectionInfo(
      connectionStringParts[0],
      ssl,
      sslCa,
      meta,
      sslTargetNameOverride,
      encodedUserMetadata,
    )
    connectionInfo.setBasicAuth()

    return connectionInfo
  }
}
