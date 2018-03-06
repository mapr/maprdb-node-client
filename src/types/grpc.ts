export enum PayloadEncoding {
    JSON_ENCODING = 0,
}

export enum ErrorCode {
  NO_ERROR,                   // no error, operation was successful

  UNKNOWN_EXCEPTION = 10,          // catch all for all undefined errors on server
  UNKNOWN_PAYLOAD_ENCODING = 20,   // specified payload encoding is not supported
  CLUSTER_NOT_FOUND = 30,          // specified cluster does not exist
  PATH_NOT_FOUND = 40,             // parent path of the specified table does not exist
  TABLE_NOT_FOUND = 50,            // specified table does not exist
  TABLE_ALREADY_EXISTS = 51,       // specified table already exist
  DOCUMENT_ALREADY_EXISTS = 52,    // a document with the specified _id already exist in the store
  DOCUMENT_NOT_FOUND = 53,         // a document with the specified _id wasn't found in the store
  ENCODING_ERROR = 60,             // an error occurred while encoding an OJAI object.
  DECODING_ERROR = 61,             // the supplied OJAI object could not be decoded
  UNRECOGNIZED_INSERT_MODE = 62,   // the specified insert mode was not recognized by this server
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
