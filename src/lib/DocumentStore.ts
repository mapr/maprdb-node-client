import {Document} from '../ojai/Document';
import {DocumentMutation} from '../ojai/DocumentMutation';
import {DocumentStream} from '../ojai/DocumentStream';
import {FieldPath} from '../ojai/FieldPath';
import {Callback} from '../types';
import {InsertOrReplaceResponse, InsertOrReplaceRequest} from '../types/grpc';
import {Query} from '../ojai/store/Query';
import {QueryCondition} from '../ojai/store/QueryCondition';
import {QueryResult} from '../ojai/store/QueryResult';
import {createConnection, grpcRequestBuilder, decode} from './connection';

export class DocumentStore {

  _connection
  tableName: string;
  constructor(url: string, tableName: string) {
      this._connection = createConnection(url)
      this.tableName = tableName;
  }

  isReadOnly(cb: Callback<boolean>): void {
      console.log({cb})
  };

  flush(cb: Callback): void {
    console.log({cb})
  };

  beginTrackingWrites(...conditions: (string | Callback)[]): void {
    console.log({conditions})
  };

  endTrackingWrites(cb: Callback<string>): void {
    console.log({cb})
  };

  clearTrackedWrites(cb: Callback): void {
    console.log({cb})
  };

  findById(...conditions: (string | Query | QueryCondition | FieldPath | Callback<Document>)[]): void {
    console.log({conditions})

  };

  find(...conditions: (string | Query | FieldPath | QueryCondition | Callback<DocumentStream | QueryResult>)[]): void {
    console.log({conditions})

  };

  findQuery(...conditions: (string | Query | Callback<DocumentStream>)[]): void {
    console.log({conditions})

  };

  insertOrReplace(...conditions: (string | Document | FieldPath | DocumentStream | Callback | any)[]): void {
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

  update(id: string, mutation: DocumentMutation, cb: Callback): void {
    console.log({cb, id, mutation})

  };

  remove(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  };

  insert(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  };

  replace(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void {
    console.log({conditions})

  };

  increment(id: string, field: string, inc: number, cb: Callback): void {
    console.log({cb, id, field, inc})

  };

  checkAndMutate(id: string, condition: QueryCondition, mutation: DocumentMutation, cb: Callback<boolean>): void {
    console.log({cb, id, condition, mutation})
  };

  checkAndDelete(id: string, condition: QueryCondition, cb: Callback<boolean>): void {
    console.log({cb, id, condition})

  };

  checkAndReplace(id: string, condition: QueryCondition, doc: Document, cb: Callback<boolean>): void {
    console.log({cb, id, condition, doc})

  };

}
