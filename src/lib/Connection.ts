import {credentials, load} from 'grpc'
import {join} from 'path'
import {com} from '../proto'
import {PayloadEncoding} from '../types/grpc'
import InsertMode = com.mapr.data.db.InsertMode

const PROTO_PATH = join(__dirname, '../../proto/maprdb-server.proto')
const protoPackage: any = load(PROTO_PATH)
const MapRDbServer = protoPackage.com.mapr.data.db.MapRDbServer

export const createConnection = (url: string) => {
  return new MapRDbServer(url, credentials.createInsecure())
}

export const encode = (payload: Object, encoding: PayloadEncoding): string => {
  switch (encoding) {
    case PayloadEncoding.JSON_ENCODING:
      return JSON.stringify(payload)

    default:
      console.warn('Unknown encoding:', encoding)

      return String(payload)
  }
}

export const decode = (raw: any, rawEncoding: any): Object => {
  const encoding: any = PayloadEncoding[rawEncoding]
  switch (encoding) {
    case PayloadEncoding.JSON_ENCODING:
      return JSON.parse(raw)

    default:
      console.warn('Unknown encoding:', encoding)

      return raw
  }
}

export const InsertOrReplaceRequestBuilder = (payload: Object, tablePath: string, insertMode?: InsertMode) => {
  const encoding = PayloadEncoding.JSON_ENCODING

  return {
    insert_mode: insertMode,
    table_path: tablePath,
    payload_encoding: encoding,
    json_document: encode(payload, encoding),
  }
}
