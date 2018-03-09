export enum PayloadEncoding {
    JSON_ENCODING = 0,
}

export enum ErrorCode {
  NO_ERROR = 'NO_ERROR',                   // no error, operation was successful

  UNKNOWN_EXCEPTION = 'UNKNOWN_EXCEPTION', // catch all for all undefined errors on server
  UNKNOWN_PAYLOAD_ENCODING = 'UNKNOWN_PAYLOAD_ENCODING',   // specified payload encoding is not supported
  CLUSTER_NOT_FOUND = 'CLUSTER_NOT_FOUND',          // specified cluster does not exist
  PATH_NOT_FOUND = 'PATH_NOT_FOUND',             // parent path of the specified table does not exist
  TABLE_NOT_FOUND = 'TABLE_NOT_FOUND',            // specified table does not exist
  TABLE_ALREADY_EXISTS = 'TABLE_ALREADY_EXISTS',       // specified table already exist
  DOCUMENT_ALREADY_EXISTS = 'DOCUMENT_ALREADY_EXISTS',    // a document with the specified _id already exist in the store
  DOCUMENT_NOT_FOUND = 'DOCUMENT_NOT_FOUND',         // a document with the specified _id wasn't found in the store
  ENCODING_ERROR = 'ENCODING_ERROR',             // an error occurred while encoding an OJAI object.
  DECODING_ERROR = 'DECODING_ERROR',             // the supplied OJAI object could not be decoded
  UNRECOGNIZED_INSERT_MODE = 'UNRECOGNIZED_INSERT_MODE',   // the specified insert mode was not recognized by this server
}

export enum InsertMode {
  INSERT_OR_REPLACE = 0,
  INSERT = 1,
  REPLACE = 2,
}

export interface TableRequest {
  table_path: string
}
export type RpcError = {
  err_code: ErrorCode|string;
  error_message: string;
}

export interface TableResponse {
  error: RpcError
  payload_encoding: PayloadEncoding
  json_payload: string
}

export type InsertOrReplaceRequest = {
    table_path: string;
    payload_encoding: PayloadEncoding;
    insert_mode: InsertMode;
    json_document: string;
}

export type InsertOrReplaceResponse = {
    error: RpcError;
    payload_encoding: PayloadEncoding;
    json_payload: string;
}

export type CreateTableRequest = {
  table_path: string;
}

export type DeleteTableRequest = {
  table_path: string;
}

export type TableExistsRequest = {
  table_path: string;
}

export type FindByIdRequest = {
  table_path?: string;
  payload_encoding: PayloadEncoding;
  json_document?: string;
}
