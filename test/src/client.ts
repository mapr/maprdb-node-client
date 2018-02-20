import {DocumentStore} from '../../'
import {InsertOrReplaceResponse} from '../../src/types/grpc' // The same as importing ready module
const {GRPC_PORT} = require('../constants.json')

const store = new DocumentStore(`localhost:${GRPC_PORT}`, 'test_table')
const doc = {hello: 'world'}

console.log('InsertOrReplace request', doc)
store.insertOrReplace(doc, (err: Error, response: InsertOrReplaceResponse) => {
    if (err) {
        console.error(err)
    }
    console.log('InsertOrReplace response', response)
})
