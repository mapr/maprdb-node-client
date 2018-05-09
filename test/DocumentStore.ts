/*
 * Copyright (c) 2018 MapR, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {expect} from 'chai'
import {config} from './config'
import {ODate} from '../src'

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
      it('should insert into store with binary ID', async () => {
        const doc: any = {}
        doc._id = Buffer.from('1234')
        doc.testField = new ODate ('2012-10-20')
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
      it('Should return null', async () => {
        const id = 'no_such_id'

        const store = await storeConnection.getStore(storeName)
        const result = await store.findById(id)

        expect(result).to.be.null
      })
    })
    describe('Test findById document with condition', () => {
      it('should find store document by binary id that satisfies the condition', async () => {
        const _id = Buffer.from([0x31, 0x32, 0x33, 0x34])
        const condition: any = {}
        condition.$where = {
          $eq: { testField: new ODate ('2012-10-20') },
        }
        const store = storeConnection.getStore(storeName)
        const doc = await store.findById(_id, condition)
        expect(doc).to.be.eql({
          _id,
          testField: new ODate ('2012-10-20'),
        })
      })
    })
    describe('Test findById document with projection', () => {
      it('should find store document by binary id with field projection', async () => {
        const _id = Buffer.from([0x31, 0x32, 0x33, 0x34])
        const projections: any = ['testField']
        const store = storeConnection.getStore(storeName)
        const doc = await store.findById(_id, {}, projections)
        expect(doc).to.be.eql({
          testField: new ODate ('2012-10-20'),
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
    describe('Test checkAndUpdate document', () => {
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
        const result = await store.checkAndUpdate(_id, mutation, condition)
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
