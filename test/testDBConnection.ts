import {expect} from 'chai'
import * as grpc from 'grpc'
import {join} from 'path'

const PROTO_PATH = join(__dirname, '../protos/maprdb-server.proto')
const com: any = grpc.load(PROTO_PATH).com

const client = new com.mapr.maprdb.grpc.MapRDbServer('localhost:5678', grpc.credentials.createInsecure())

const nodeClient = require('../dist')

const store = new nodeClient.StoreConnection('localhost:5678', '/test-store1')

describe('Test connection to DB', () => {
  let response
  let err

  beforeEach((done: () => void) => {
    client.insertOrReplace('test', (resErr: Error, res: {}) => {
      response = res
      err = resErr

      done()
    })
  })

  it('DB should return response', () => {
    expect(response).to.exist
  })

  it('DB should return null err', () => {
    expect(err).to.be.null
  })
})

describe('Test create/delete table', () => {
  it('should check if table does not exist', async () => {
    const resp = await store.isStoreExists('/test-store-test')
    expect(resp).to.be.false
  })

  it('should create table', async () => {
    const resp = await store.createStore('/test-store-test')
    expect(resp).not.to.be.false
  })

  it('should check if table exists', async () => {
    const resp = await store.isStoreExists('/test-store-test')
    expect(resp).to.be.true
  })

  it('should remote table', async () => {
    const resp = await store.deleteStore('/test-store-test')
    expect(resp).to.be.true
  })

  it('should check if table does not exist', async () => {
    const resp = await store.isStoreExists('/test-store-test')
    expect(resp).to.be.false
  })
})
