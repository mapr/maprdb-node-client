import {Callback} from '../types'
import {
  CreateTableRequest, DeleteTableRequest, ErrorCode, TableExistsRequest, TableResponse,
} from '../types/grpc'
import {ConnectionWrapper} from './ConnectionWrapper'

import {InsertOrReplaceRequestBuilder} from './Connection'

export class StoreConnection {
  public _url: string
  public _connection: any
  public _tableName: string

  constructor(url: string, tableName: string) {
    this._url = url
    this._tableName = tableName
    this._connection = new ConnectionWrapper({url})
  }

  public createTable(storePath: string, callback: Callback): void|Promise<any> {
    const request: CreateTableRequest = {table_path: storePath}

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
    const request: TableExistsRequest = {table_path: storePath}

    if (callback) {
      this._connection.tableExists(request, (err, response) => {
        if (err) {
          return callback(err)
        }

        if (response.error) {
          if (response.error.err_code === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
          if (response.error.err_code === ErrorCode.TABLE_NOT_FOUND) {
            return callback(null, false)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.tableExists(request, (err, response) => {
        if (!err) {
          if (response.error.err_code === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
          if (response.error.err_code === ErrorCode.TABLE_NOT_FOUND) {
            return resolve(false)
          }
        }
        reject(err || response.error)
      })
    })
  }

  public deleteTable(storePath: string, callback: Callback): void|Promise<any> {
    const request: DeleteTableRequest = {table_path: storePath}

    if (callback) {
      this._connection.deleteTable(request, (err, response) => {
        this.handleDefaultCallback(err, response, callback)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.deleteTable(request, (err: Error, response: TableResponse) => {
        this.handleDefaultPromise(err, response, resolve, reject)
      })
    })
  }

  public insertOrReplace(payload: any, store: string, callback: Callback): void|Promise<any> {
    const request = InsertOrReplaceRequestBuilder(payload, store || this._tableName)

    if (callback) {
      this._connection.insertOrReplace(request, (err, response) => {
        if (!err) {
          if (response.error.err_code === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.insertOrReplace(request, (err, response) => {
        if (!err) {
          if (response.error.err_code === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
        }
        reject(err || response.error)
      })
    })
  }

  public getStore(storePath: string): StoreConnection {
    this._tableName = storePath

    return this
  }

  private handleDefaultCallback(err: Error, response: any, callback: Callback): void {
    if (!err && (response.error.err_code === ErrorCode.NO_ERROR)) {
      return callback(null, true)
    }
    callback(err || response.error)
  }

  private handleDefaultPromise(err: Error, response: any, resolve: any, reject: any): void {
    if (!err && (response.error.err_code === ErrorCode.NO_ERROR)) {
      return resolve(true)
    }
    reject(err || response.error)
  }
}
