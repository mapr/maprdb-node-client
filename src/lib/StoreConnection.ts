/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

import {com} from '../proto'
import {Callback} from '../types'
import {ConnectionWrapper} from './ConnectionWrapper'
import {InsertOrReplaceRequestBuilder} from './Connection'

import InsertMode = com.mapr.data.db.InsertMode
import ICreateTableRequest = com.mapr.data.db.ICreateTableRequest
import ErrorCode = com.mapr.data.db.ErrorCode
import IDeleteTableRequest = com.mapr.data.db.IDeleteTableRequest
import PayloadEncoding = com.mapr.data.db.PayloadEncoding
import IDeleteTableResponse = com.mapr.data.db.IDeleteTableResponse
import IFindByIdRequest = com.mapr.data.db.IFindByIdRequest
import ITableExistsRequest = com.mapr.data.db.ITableExistsRequest
import ITableExistsResponse = com.mapr.data.db.ITableExistsResponse
import IInsertOrReplaceResponse = com.mapr.data.db.IInsertOrReplaceResponse
import IFindByIdResponse = com.mapr.data.db.IFindByIdResponse

export class StoreConnection {
  public _url: string
  public _connection: any
  public _tableName: string

  constructor(url: string, tableName?: string) {
    this._url = url
    this._tableName = tableName
    this._connection = new ConnectionWrapper({url})
  }

  public createTable(storePath: string, callback: Callback): void|Promise<any> {
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

  public tableExists(storePath: string, callback: Callback): void|Promise<any> {
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

  public deleteTable(storePath: string, callback: Callback): void|Promise<any> {
    const request: IDeleteTableRequest = {tablePath: storePath}

    if (callback) {
      this._connection.deleteTable(request, (err, response) => {
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
  // TODO Refactor
  public insertOrReplace(payload: any, callback: Callback): void|Promise<any> {
    const request = InsertOrReplaceRequestBuilder(payload, this._tableName, InsertMode.INSERT_OR_REPLACE)

    if (callback) {
      this._connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
        }
        reject(err || response.error)
      })
    })
  }
  public insert(payload: any, callback: Callback): void|Promise<any> {
    const request = InsertOrReplaceRequestBuilder(payload, this._tableName, InsertMode.INSERT)

    if (callback) {
      this._connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
        }
        reject(err || response.error)
      })
    })
  }
  public replace(payload: any, callback: Callback): void|Promise<any> {
    const request = InsertOrReplaceRequestBuilder(payload, this._tableName, InsertMode.REPLACE)

    if (callback) {
      this._connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
        }
        reject(err || response.error)
      })
    })
  }

  public getStore(storePath: string): StoreConnection {
    if (typeof storePath === 'string') {
      this._tableName = storePath
    } else {
      console.warn('Table name should be string')
    }

    return this
  }

  public findById(storePath: string, id: string, callback: Callback): void|Promise<any> {
    const request: IFindByIdRequest = {
      tablePath: storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      jsonDocument: JSON.stringify({_id: id}),
    }

    if (callback) {
      this._connection.findById(request, (err, response: IFindByIdResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, response.jsonDocument)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.findById(request, (err, response: IFindByIdResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(response.jsonDocument)
          }
        }
        reject(err || response.error)
      })
    })
  }
  public close() {
    this._connection.close()
  }

  private handleDefaultCallback(err: Error, response: any, callback: Callback): void {
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
