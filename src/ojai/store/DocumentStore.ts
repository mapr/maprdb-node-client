import {Document} from '../Document';
import {DocumentMutation} from '../DocumentMutation';
import {DocumentStream} from '../DocumentStream';
import {FieldPath} from '../FieldPath';
import {Callback} from '../generic';
import {Query} from './Query';
import {QueryCondition} from './QueryCondition';
import {QueryResult} from './QueryResult';

export interface DocumentStore {

  isReadOnly(): boolean;

  flush(cb: Callback): void;

  beginTrackingWrites(cb: Callback);

  beginTrackingWrites(previousWritesContext: string, cb: Callback): void;

  endTrackingWrites(cb: Callback<string>): void;

  clearTrackedWrites(cb: Callback): void;

  findById(...conditions: (string | Query | QueryCondition | FieldPath | Callback<Document>)[]): void;

  find(...conditions: (string | Query | FieldPath | QueryCondition | Callback<DocumentStream | QueryResult>)[]): void;

  findQuery(...conditions: (string | Query | Callback<DocumentStream>)[]): void;

  insertOrReplace(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void;

  update(id: string, mutation: DocumentMutation, cb: Callback): void;

  remove(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void;

  insert(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void;

  replace(...conditions: (string | Document | FieldPath | DocumentStream | Callback)[]): void;

  increment(id: string, field: string, inc: number, cb: Callback): void;

  checkAndMutate(id: string, condition: QueryCondition, mutation: DocumentMutation, cb: Callback<boolean>): void;

  checkAndDelete(id: string, condition: QueryCondition, cb: Callback<boolean>): void;

  checkAndReplace(id: string, condition: QueryCondition, doc: Document, cb: Callback<boolean>): void;

}
