import {Document} from '../ojai/Document'
import {DocumentMutation} from '../ojai/DocumentMutation'
import {DocumentStream} from '../ojai/DocumentStream'
import {FieldPath} from '../ojai/FieldPath'
import {IDocumentStore} from '../ojai/store/IDocumentStore'
import {Query} from '../ojai/store/Query'
import {QueryCondition} from '../ojai/store/QueryCondition'
import {QueryResult} from '../ojai/store/QueryResult'
import {Callback} from '../types'
import {ErrorCode, InsertOrReplaceRequest, InsertOrReplaceResponse} from '../types/grpc'
import {createConnection, decode, grpcRequestBuilder} from './connection'

export class DocumentStore implements IDocumentStore {

  public _url: string
  public _connection: any
  public tableName: string

  constructor(url: string, connection: any, tableName?: string) {
    this._url = url
    this._connection = connection || createConnection(url)
    this.tableName = tableName
  }

  public insertOrReplace(storePath: string, payload: (string | Document | FieldPath | DocumentStream | any)): Promise<any> {
    const request: InsertOrReplaceRequest = grpcRequestBuilder(payload, storePath || this.tableName)

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this._connection.insertOrReplace(request, (err: Error, response: InsertOrReplaceResponse) => {
        if (err) {
          reject(err)
        } else if (!response) {
          reject(new Error())
        } else {
          switch (response.error.err) {
            case ErrorCode[0]:
              resolve(decode(response.json_payload, response.payload_encoding))
              break
            default:
              reject(new Error(response.error.error_description))
          }
        }
      })
    })
  }

  public isReadOnly(): boolean {
    console.log('isReadOnly')

    return true
  }

  public flush(cb: Callback): void {
    console.log({cb})
  }

  public beginTrackingWrites(...conditions: (string | Callback)[]): void {
    console.log({conditions})
  }

  public endTrackingWrites(cb: Callback<string>): void {
    console.log({cb})
  }

  public clearTrackedWrites(cb: Callback): void {
    console.log({cb})
  }

  public findById(...conditions: (string | Query | QueryCondition | FieldPath | Callback<Document>)[]): void {
    console.log({conditions})

  }

  public find(...conditions: (string | Query | FieldPath | QueryCondition | Callback<DocumentStream | QueryResult>)[]): void {
    console.log({conditions})

  }

  public findQuery(...conditions: (string | Query | Callback<DocumentStream>)[]): void {
    console.log({conditions})

  }

  public update(id: string, mutation: DocumentMutation, cb: Callback): void {
    console.log({cb, id, mutation})

  }

  public remove(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  }

  public insert(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  }

  public replace(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  }

  public increment(id: string, field: string, inc: number, cb: Callback): void {
    console.log({cb, id, field, inc})

  }

  public checkAndMutate(id: string, condition: QueryCondition, mutation: DocumentMutation, cb: Callback<boolean>): void {
    console.log({cb, id, condition, mutation})
  }

  public checkAndDelete(id: string, condition: QueryCondition, cb: Callback<boolean>): void {
    console.log({cb, id, condition})

  }

  public checkAndReplace(id: string, condition: QueryCondition, doc: Document, cb: Callback<boolean>): void {
    console.log({cb, id, condition, doc})

  }
}
