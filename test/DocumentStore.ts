import {expect} from 'chai'
import {config} from './config'

const {StoreConnection} = require('../src/lib/StoreConnection')

const { HOST, PORT } = config
const storeConnection = new StoreConnection(`${HOST}:${PORT}`)

describe('Test create/delete store', () => {
  it('should check if store does not exist', async () => {
    const resp = await storeConnection.storeExists('/test-store-test')
    expect(resp).to.be.false
  })

  it('should create store', async () => {
    const resp = await storeConnection.createStore('/test-store-test')
    expect(resp).to.be.true
  })

  it('should check if store exists', async () => {
    const resp = await storeConnection.storeExists('/test-store-test')
    expect(resp).to.be.true
  })

  it('should remove store', async () => {
    const resp = await storeConnection.deleteStore('/test-store-test')
    expect(resp).to.be.true
  })

  it('should check if store does not exist', async () => {
    const resp = await storeConnection.storeExists('/test-store-test')
    expect(resp).to.be.false
  })
})

describe('Test insert or replace document', () => {
  it('should create table', async () => {
    const resp = await storeConnection.createStore('/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert into store', async () => {
    const doc: any = {}
    doc._id = 'id__id'
    doc.testField = 'testValue'
    const store = storeConnection.getStore('/test-store-test-insert')
    const resp = await store.insertOrReplace(doc)
    expect(resp).to.be.true
  })

  it('should delete table', async () => {
    const resp = await storeConnection.deleteStore('/test-store-test-insert')
    expect(resp).to.be.true
  })
})
