import {expect} from 'chai'

const DocumentStore = require('../src/lib/DocumentStore')

const store = new DocumentStore('localhost:5678')

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
