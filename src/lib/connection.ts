import {credentials, GrpcObject, load} from 'grpc';
import {join} from 'path';

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
