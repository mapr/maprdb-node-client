import {credentials, GrpcObject, load} from 'grpc';
import {join} from 'path';
import {InsertOrReplaceRequest, PayloadEncoding} from '../types/grpc'
/*
interface MaprProto extends GrpcObject {
  com: {
    mapr: {
      maprdb: {
        grpc: {
          MapRDbServer: typeof Client;
        };
      };
    };
  };
}
*/

const PROTO_PATH = join(__dirname, '../../protos/maprdb-server.proto');
const protoPackage: GrpcObject = load(PROTO_PATH);
const MapRDbServer = protoPackage.com.mapr.maprdb.grpc.MapRDbServer;

export const createConnection = (url: string) => {
  return new MapRDbServer(url, credentials.createInsecure());
};

export const encode = (payload: Object, encoding: PayloadEncoding): any => {
  switch (encoding) {
    case PayloadEncoding.JSON_ENCODING:
      return JSON.stringify(payload)

    default:
      console.warn('Unknown encoding:', encoding)

      return payload
  }
}

export const decode = (raw: any, rawEncoding: any): Object => {
  const encoding: any = PayloadEncoding[rawEncoding];
  switch (encoding) {
    case PayloadEncoding.JSON_ENCODING:
      return JSON.parse(raw)

    default:
      console.warn('Unknown encoding:', encoding)

      return raw
  }
}

export const grpcRequestBuilder = (payload: Object, tablePath: string): InsertOrReplaceRequest => {
  const encoding = PayloadEncoding.JSON_ENCODING;

  return {
    table_path: tablePath,
    payload_encoding: encoding,
    json_payload: encode(payload, encoding),
  }
}
