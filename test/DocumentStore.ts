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
    describe('Test findById document', () => {
      it('should find store document by id', async () => {
        const _id = 'id__id'
        const store = storeConnection.getStore(storeName)
        const doc = await store.findById(_id)
        expect(doc).to.be.eql({
          _id,
          testField: 'testValue',
        })
      })
    })
    describe('Test find document', () => {
      it('should find store documents', (done) => {
        const query: any = {}
        query.$select = ['_id', 'testField']
        query.$where = {
          $eq: { testField: 'testValue' },
        }
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
    describe('Test update document', () => {
      it('should update store document', async () => {
        const store = storeConnection.getStore(storeName)
        const _id = 'id__id'
        const mutation = {
          $set: { testField: 'updatedTestValue' },
        }
        const result = await store.update(_id, mutation)
        expect(result).to.be.true
        const doc = await store.findById(_id)
        expect(doc).to.be.eql({_id: 'id__id', testField: 'updatedTestValue'})
      })
    })
    describe('Test checkAndMutate document', () => {
      it('should update with condition store document', async () => {
        const store = storeConnection.getStore(storeName)
        const _id = 'id__id'
        const mutation = {
          $set: { testField: 'mutatedValue' },
        }
        const condition = {
          $where: {
            $eq: { testField: 'updatedTestValue' },
          },
        }
        const result = await store.checkAndMutate(_id, mutation, condition)
        expect(result).to.be.true
        const doc = await store.findById(_id)
        expect(doc).to.be.eql({_id: 'id__id', testField: 'mutatedValue'})
      })
    })
    describe('Test delete document', () => {
      it('should delete store document', async () => {
        const store = storeConnection.getStore(storeName)
        const _id = 'id__id'
        const result = await store.delete(_id)
        expect(result).to.be.true
      })
    })
    describe('Test checkAndDelete document', () => {
      it('should delete with condition store document', async () => {
        const store = storeConnection.getStore(storeName)
        const _id = 'id__id'
        const doc: any = {}
        doc._id = _id
        doc.testField = 'testValue'
        const resp = await store.insertOrReplace(doc)
        expect(resp).to.be.true
        const condition = {
          $where: {
            $eq: { testField: 'testValue' },
          },
        }
        const result = await store.checkAndDelete(_id, condition)
        expect(result).to.be.true
      })
    })
  })
})
