import {com} from '../../proto'
import {
  CreateTableRequest, DeleteTableRequest, TableExistsRequest, TableResponse,
} from '../types/grpc'
import {createConnection} from './Connection'
import {DocumentStore} from './DocumentStore'
import MapRDbServer = com.mapr.maprdb.grpc.MapRDbServer
import ErrorCode = com.mapr.maprdb.grpc.ErrorCode

export class StoreConnection {
  public _url: string
  public _connection: any

  constructor(url: string) {
    this._url = url
    this._connection = createConnection(url)
  }

  public createStore(storePath: string): Promise<any> {
    const request: CreateTableRequest = {table_path: storePath}

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.createTable(request, (err: Error, response: TableResponse) => {
        if (err) {
          reject(err)
        } else if (!response) {
          reject(new Error('NO RESPONSE'))
        } else {
          switch (response.error.err_code) {
            case ErrorCode[0]:
              resolve(this.getStore(storePath))
              break
            default:
              reject(new Error(response.error.error_message))
          }
        }
      })
    })
  }

  public isStoreExists(storePath: string): Promise<any> {
    const request: TableExistsRequest = {table_path: storePath}

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.tableExists(request, (err: Error, response: TableResponse) => {
        if (err) {
          reject(err)
        } else if (!response) {
          reject(new Error('NO RESPONSE'))
        } else {
          switch (response.error.err_code) {
            case ErrorCode[0]:
              resolve(true)
              break
            case ErrorCode[50]:
              resolve(false)
              break
            default:
              reject(new Error(response.error.error_message))
          }
        }
      })
    })
  }

  public deleteStore(storePath: string): Promise<any> {
    const request: DeleteTableRequest = {table_path: storePath}

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.deleteTable(request, (err: Error, response: TableResponse) => {
        if (err) {
          reject(err)
        } else if (!response) {
          reject(new Error('NO RESPONSE'))
        } else {
          switch (response.error.err_code) {
            case ErrorCode[0]:
              resolve(true)
              break
            default:
              reject(new Error(response.error.error_message))
          }
        }
      })
    })
  }

  public getStore(storePath: string): MapRDbServer {
    return new DocumentStore({url: this._url, connection: this._connection, storePath})
  }
}
