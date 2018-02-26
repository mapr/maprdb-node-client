import * as dotenv from 'dotenv'
import {DocumentStore} from '../../'
import { com } from '../../dist/protos' // The same as importing ready module
const {GRPC_PORT, GRPC_HOST} = require('../constants.json')
dotenv.config()
const grpcHost = process.env.GRPC_HOST || GRPC_HOST
const grpcPort = process.env.GRPC_PORT || GRPC_PORT
const url = `${grpcHost}:${grpcPort}`
console.log(`Connectiong to GRPC service: ${url}`)

const store = new DocumentStore(url, 'test_table')
const doc = {hello: 'world'}

console.log('InsertOrReplace request', doc)
store.insertOrReplace(doc, (err: Error, response: com.mapr.maprdb.grpc.InsertOrReplaceResponse) => {
    if (err) {
        console.error(err)
    }
    console.log('InsertOrReplace response', response)
})
