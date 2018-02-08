import {Document} from '../Document';
import {DocumentMutation} from '../DocumentMutation';
import {DocumentStream} from '../DocumentStream';
import {FieldPath} from '../FieldPath';
import {callback} from '../generic';
import {Query} from './Query';
import {QueryCondition} from './QueryCondition';
import {QueryResult} from './QueryResult';

export interface DocumentStore {

  isReadOnly(): boolean;

  flush(cb: callback): void;

  beginTrackingWrites(cb: callback);

  beginTrackingWrites(previousWritesContext: string, cb: callback): void;

  endTrackingWrites(cb: callback<string>): void;

  clearTrackedWrites(cb: callback): void;

  findById(...conditions: (string | Query | QueryCondition | FieldPath | callback<Document>)[]): void;

  find(...conditions: (string | Query | FieldPath | QueryCondition | callback<DocumentStream | QueryResult>)[]): void;

  findQuery(...conditions: (string | Query | callback<DocumentStream>)[]): void;

  insertOrReplace(...conditions: (string | Document | FieldPath | DocumentStream | callback)[]): void;

  update(id: string, mutation: DocumentMutation, cb: callback): void;

  remove(...conditions: (string | Document | FieldPath | DocumentStream | callback)[]): void;

  insert(...conditions: (string | Document | FieldPath | DocumentStream | callback)[]): void;

  replace(...conditions: (string | Document | FieldPath | DocumentStream | callback)[]): void;

  increment(id: string, field: string, inc: number, cb: callback): void;

  checkAndMutate(id: string, condition: QueryCondition, mutation: DocumentMutation, cb: callback<boolean>): void;

  checkAndDelete(id: string, condition: QueryCondition, cb: callback<boolean>): void;

  checkAndReplace(id: string, condition: QueryCondition, doc: Document, cb: callback<boolean>): void;

}
