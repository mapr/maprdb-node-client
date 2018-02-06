import {expect} from 'chai'
import {config} from './config'

const {StoreConnection} = require('../src/lib/StoreConnection')
const {Document} = require('../src/lib/Document')

const { HOST, PORT } = config;
const store = new StoreConnection(`${HOST}:${PORT}`)

describe('Test create/delete table', () => {
  it('should check if table does not exist', async () => {
    const resp = await store.tableExists('/test-store-test')
    expect(resp).to.be.false
  })

  it('should create table', async () => {
    const resp = await store.createTable('/test-store-test')
    expect(resp).to.be.true
  })

  it('should check if table exists', async () => {
    const resp = await store.tableExists('/test-store-test')
    expect(resp).to.be.true
  })

  it('should remove table', async () => {
    const resp = await store.deleteTable('/test-store-test')
    expect(resp).to.be.true
  })

  it('should check if table does not exist', async () => {
    const resp = await store.tableExists('/test-store-test')
    expect(resp).to.be.false
  })
})

describe('Test insert or replace document', () => {
  it('should create table', async () => {
    const resp = await store.createTable('/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert into table', async () => {
    const doc = new Document('id_id')
    doc.setField('testField', 'testValue')
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should delete table', async () => {
    const resp = await store.deleteTable('/test-store-test-insert')
    expect(resp).to.be.true
  })
})
