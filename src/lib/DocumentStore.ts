import {Document} from '../ojai/Document';
import {DocumentMutation} from '../ojai/DocumentMutation';
import {DocumentStream} from '../ojai/DocumentStream';
import {FieldPath} from '../ojai/FieldPath';
import {Query} from '../ojai/store/Query';
import {QueryCondition} from '../ojai/store/QueryCondition';
import {QueryResult} from '../ojai/store/QueryResult';
import {Callback} from '../types';
import {InsertOrReplaceRequest, InsertOrReplaceResponse} from '../types/grpc';
import {createConnection, decode, grpcRequestBuilder} from './connection';

export class DocumentStore {

  public _connection: createConnection
  public tableName: string;
  constructor(url: string, tableName: string) {
      this._connection = createConnection(url)
      this.tableName = tableName;
  }

  public isReadOnly(cb: Callback<boolean>): void {
      console.log({cb})
  };

  public flush(cb: Callback): void {
    console.log({cb})
  };

  public beginTrackingWrites(...conditions: (string | Callback)[]): void {
    console.log({conditions})
  };

  public endTrackingWrites(cb: Callback<string>): void {
    console.log({cb})
  };

  public clearTrackedWrites(cb: Callback): void {
    console.log({cb})
  };

  public findById(...conditions: (string | Query | QueryCondition | FieldPath | Callback<Document>)[]): void {
    console.log({conditions})

  };

  public find(...conditions: (string | Query | FieldPath | QueryCondition | Callback<DocumentStream | QueryResult>)[]): void {
    console.log({conditions})

  };

  public findQuery(...conditions: (string | Query | Callback<DocumentStream>)[]): void {
    console.log({conditions})

  };

  public insertOrReplace(...conditions: (string | Document | FieldPath | DocumentStream | Callback | any)[]): void {
      const cb: Callback = conditions.pop() // last argument should be callback
      if (typeof cb !== 'function') {
        // @TODO - do something
        console.warn('Calling insertOrReplace() method without callback')
      }
      const [payload] = conditions
      const request: InsertOrReplaceRequest = grpcRequestBuilder(payload, this.tableName)
      this._connection.insertOrReplace(request, (err: Error, response: InsertOrReplaceResponse) => {
        if (err || response.error) {
          cb(err || new Error(response.error.error_description))

          return
        }
        cb(null, decode(response.json_payload, response.payload_encoding))
      })
  };

  public update(id: string, mutation: DocumentMutation, cb: Callback): void {
    console.log({cb, id, mutation})

  };

  public remove(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  };

  public insert(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  };

  public replace(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  };

  public increment(id: string, field: string, inc: number, cb: Callback): void {
    console.log({cb, id, field, inc})

  };

  public checkAndMutate(id: string, condition: QueryCondition, mutation: DocumentMutation, cb: Callback<boolean>): void {
    console.log({cb, id, condition, mutation})
  };

  public checkAndDelete(id: string, condition: QueryCondition, cb: Callback<boolean>): void {
    console.log({cb, id, condition})

  };

  public checkAndReplace(id: string, condition: QueryCondition, doc: Document, cb: Callback<boolean>): void {
    console.log({cb, id, condition, doc})

  };

}
