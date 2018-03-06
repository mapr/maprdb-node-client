import {IDocumentStore} from '../ojai/store/IDocumentStore'
import {
CreateTableRequest, DeleteTableRequest, ErrorCode, TableExistsRequest, TableResponse,
} from '../types/grpc'
import {createConnection} from './connection'
import {DocumentStore} from './DocumentStore'

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

  public getStore(storePath: string): IDocumentStore {
    return new DocumentStore(this._url, this._connection, storePath)
  }
}
