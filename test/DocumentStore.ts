import {expect} from 'chai'
import {config} from './config'

const {StoreConnection} = require('../src/lib/StoreConnection')

const { HOST, PORT } = config
const storeConnection = new StoreConnection(`${HOST}:${PORT}`)

describe('Test create/delete table', () => {
  it('should check if table does not exist', async () => {
    const resp = await storeConnection.tableExists('/test-store-test')
    expect(resp).to.be.false
  })

  it('should create table', async () => {
    const resp = await storeConnection.createTable('/test-store-test')
    expect(resp).to.be.true
  })

  it('should check if table exists', async () => {
    const resp = await storeConnection.tableExists('/test-store-test')
    expect(resp).to.be.true
  })

  it('should remove table', async () => {
    const resp = await storeConnection.deleteTable('/test-store-test')
    expect(resp).to.be.true
  })

  it('should check if table does not exist', async () => {
    const resp = await storeConnection.tableExists('/test-store-test')
    expect(resp).to.be.false
  })
})

describe('Test insert or replace document', () => {
  it('should create table', async () => {
    const resp = await storeConnection.createTable('/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert into table', async () => {
    const doc: any = {}
    doc._id = 'id__id'
    doc.testField = 'testValue'
    const store = storeConnection.getStore('/test-store-test-insert')
    const resp = await store.insertOrReplace(doc)
    expect(resp).to.be.true
  })

  it('should delete table', async () => {
    const resp = await storeConnection.deleteTable('/test-store-test-insert')
    expect(resp).to.be.true
  })
})
