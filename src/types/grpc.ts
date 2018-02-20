export enum PayloadEncoding {
    JSON_ENCODING = 0,
}

export enum ErrorCode {
    NO_ERROR,
    UNKNOWN_PAYLOAD_ENCODING,
    CLUSTER_NOT_FOUND,
    PATH_NOT_FOUND,
    TABLE_NOT_FOUND,
    ENCODING_ERROR,
    DECODING_ERROR,
}

export type RpcError = {
    err: ErrorCode;
    error_description: string;
  }

export type InsertOrReplaceRequest = {
    table_path: string;
    payload_encoding: PayloadEncoding;
    json_payload: string;
}

export type InsertOrReplaceResponse = {
    error: RpcError;
    payload_encoding: PayloadEncoding;
    json_payload: string;
}
