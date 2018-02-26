import {load, Server, ServerCredentials} from 'grpc';
import {join} from 'path';
import {InsertOrReplaceRequest, InsertOrReplaceResponse, PayloadEncoding} from '../../dist/types/grpc';
const {GRPC_PORT, PROTO_PATH} = require('../constants.json')
const SERVER_HOST = `0.0.0.0:${GRPC_PORT}`;
const PROTO_FILE = join(__dirname, '../', PROTO_PATH);
const protoPackage: any = load(PROTO_FILE);
const MapRDbServer = protoPackage.com.mapr.maprdb.grpc.MapRDbServer;

const DocumentResponse = {
  map: {
    null: null,
    boolean: true,
    string: 'eureka',
    byte: {$numberLong: 127},
    short: {$numberLong: 32767},
    int: {$numberLong: 2147483647},
    long: {$numberLong: 9223372036854775807},
    float: 3.4028235,
    double: 1.7976931348623157e308,
    decimal: {$decimal: '123456789012345678901234567890123456789012345678901.23456789'},
    date: {$dateDay: '2012-10-20'},
    time: {$time: '07:42:46.123'},
    timestamp: {$date: '2012-10-20T07:42:46.123-07:00'},
    interval: {$interval: 172800000},
    binary: {$binary: 'YWJjZA=='},
    array: [42, 'open sesame', 3.14, {$dateDay: '2015-01-21'}],
  },
}

const InsertOrReplace = (call: {request: InsertOrReplaceRequest}, callback: (err: Error, data: InsertOrReplaceResponse) => void) => {
  const request: InsertOrReplaceRequest = call.request;
  console.log('InsertOrReplace receive:', request)
  const response: InsertOrReplaceResponse = {
    error: null,
    payload_encoding: PayloadEncoding.JSON_ENCODING,
    json_payload: JSON.stringify(DocumentResponse),
  }

  console.log('InsertOrReplace sending:', response)
  callback(null, response);
}

const CreateTable = (call: any, callback: any) => {
  console.log('CreateTable', call.request)
  callback(null, {message: `Hello ${call.request.name}`});
}

const DeleteTable = (call: any, callback: any) => {
  console.log('DeleteTable', call.request)
  callback(null, {message: `Hello ${call.request.name}`});
}

const TableExists = (call: any, callback: any) => {
  console.log('TableExists', call.request)
  callback(null, {message: `Hello ${call.request.name}`});
}

function main() {
  const server = new Server();
  server.addService(MapRDbServer.service, {
    InsertOrReplace,
    CreateTable,
    DeleteTable,
    TableExists,
  });
  server.bind(SERVER_HOST, ServerCredentials.createInsecure());
  server.start();
}

main();
console.log(`GRPC server is running on ${SERVER_HOST}`)
