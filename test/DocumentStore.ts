import {expect} from 'chai'
import {config} from './config'

const {StoreConnection} = require('../src/lib/StoreConnection')

const { HOST, PORT } = config
const storeConnection = new StoreConnection(`${HOST}:${PORT}`)

describe('DocumentStore', () => {
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
  describe('Document manipulation', () => {
    let storeName;
    before(async () => {
      storeName = '/test-store-test-document'
      await storeConnection.createStore(storeName)
    })
    after(async () => {
      await storeConnection.deleteStore(storeName)
    })
    describe('Test insert or replace document', () => {
      it('should insert into store', async () => {
        const doc: any = {}
        doc._id = 'id__id'
        doc.testField = 'testValue'
        const store = storeConnection.getStore(storeName)
        const resp = await store.insertOrReplace(doc)
        expect(resp).to.be.true
      })
    })
    describe('Test find document', () => {
      it('should find store documents', (done) => {
        const query: any = {}
        query.$select = ['_id', 'testField']
        query.$where = {
          $eq: { testField: 'testValue' },
        };
        const store = storeConnection.getStore(storeName)
        const docStream = store.find(query)
        const resp = []
        docStream.on('data', (chunk => {
          resp.push(chunk)
        }))
        docStream.on('end', () => {
          expect(resp).to.be.eql([{_id: 'id__id', testField: 'testValue'}])
          done()
        })
      })
    })
  })
})
