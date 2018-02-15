import createConnection from '../../' // The same as importing ready module
import {InsertOrReplaceRequest, PayloadEncoding} from './types';
const {GRPC_PORT} = require('../constants.json')

const con = createConnection(`localhost:${GRPC_PORT}`)
const request: InsertOrReplaceRequest = {
    table_path: 'test',
    payload_encoding: PayloadEncoding.JSON_ENCODING,
    json_payload: JSON.stringify({hello: 'world'}),
};

console.log('InsertOrReplace request', request)
con.InsertOrReplace(request, (err, response) => {
    if (err) {
        console.error(err)
    }
    console.log('InsertOrReplace response', response)
})