import {expect} from 'chai'

const {StoreConnection} = require('../src/lib/StoreConnection')
const {Document} = require('../src/lib/Document')
const {ODate} = require('../src/types/ODate')
const {OInterval} = require('../src/types/OInterval')
const {OTime} = require('../src/types/OTime')
const {OTimestamp} = require('../src/types/OTimestamp')

const store = new StoreConnection('localhost:5678')

describe('Document tests', () => {
  it('should create table', async () => {
    const resp = await store.createTable('/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert doc into table', async () => {
    const doc = new Document('id_id')
    doc.setField('testField', 'testValue')
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert date field into table', async () => {
    const doc = new Document('id_id')
      .setField('test_date', (new ODate(1518689532)).toString())
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  xit('should insert interval field into table', async () => {
    const doc = new Document('id_id')
      .setField('test_interval', (new OInterval(172800000)).toString())
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert time field into table', async () => {
    const doc = new Document('id_id')
      .setField('test_time', (new OTime(172800000)).toString())
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert date string field into table', async () => {
    const doc = new Document('id_id')
      .setField('test_time', (new ODate('1993-01-01')).toString())
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert timestamp field into table', async () => {
    const doc = new Document('id_id')
      .setField('test_timestamp', (new OTimestamp(172800000)).toString())
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should insert bool fields into table', async () => {
    const doc = new Document('id_id')
      .setField('test_bool', true)
      .setField('test_bool_false', false)
    const resp = await store.insertOrReplace(doc.toJSON(), '/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('should delete table', async () => {
    const resp = await store.deleteTable('/test-store-test-insert')
    expect(resp).to.be.true
  })

  it('test setField/getField', async () => {
    const doc = (new Document())
      .setId(123)
      .setField('test_int', 123)
      .setField('test_date', new ODate(1518689532))
      .setField('test_interval', new OInterval(172800000))
      .setField('test_time', new OTime(3456))
      .setField('test_timestamp', new OTimestamp(29877132000))
      .setField('test_bool', true)
      .setField('test_bool_false', false)
      .setField('test_str', 'strstr')
      .setField('test_object', {a: 1, b: 2})
      .setField('test_empty_object', {})

    expect(doc.getId()).equal(123)
    expect(doc.getField('test_int')).equal(123)
    expect(doc.getField('test_date')).eql(new Date(1518689532))
    expect(doc.getField('test_interval')).eql(new Date(172800000))
    expect(doc.getField('test_time')).eql(new Date(3456))
    expect(doc.getField('test_timestamp')).eql(new Date(29877132000))
    expect(doc.getField('test_bool')).to.be.true
    expect(doc.getField('test_bool_false')).to.be.false
    expect(doc.getField('test_str')).equal('strstr')
    expect(doc.getField('test_object')).eql({a: 1, b: 2})
    expect(doc.getField('test_empty_object')).eql({})
  })

  it('test doc nested setField/getField', async () => {
    const doc = (new Document())
      .setId(123)
      .setField('first.test_int', 123)
      .setField('first.test_date', new ODate(1518689532))
      .setField('first.test_interval', new OInterval(172800000))
      .setField('first.test_time', new OTime(3456))
      .setField('first.test_timestamp', new OTimestamp(29877132000))
      .setField('first.test_bool', true)
      .setField('first.test_bool_false', false)
      .setField('first.test_str', 'strstr')
      .setField('first.test_object', {a: 1, b: 2})
      .setField('first.test_empty_object', {})
      .setField('first.second.test_int', 123)
      .setField('first.second.test_date', new ODate(1518689532))
      .setField('first.second.test_interval', new OInterval(172800000))
      .setField('first.second.test_time', new OTime(3456))
      .setField('first.second.test_timestamp', new OTimestamp(29877132000))
      .setField('first.second.test_bool', true)
      .setField('first.second.test_bool_false', false)
      .setField('first.second.test_str', 'strstr')
      .setField('first.second.test_object', {a: 1, b: 2})
      .setField('first.second.test_empty_object', {})

    expect(doc.getField('first')).eql({
      test_int: 123,
      test_date: {value: new Date(1518689532)},
      test_interval: {value: new Date(172800000)},
      test_time: {value: new Date(3456)},
      test_timestamp: {value: new Date(29877132000)},
      test_bool: true,
      test_bool_false: false,
      test_str: 'strstr',
      test_object: {a: 1, b: 2},
      test_empty_object: {},
      second: {
        test_int: 123,
        test_date: {value: new Date(1518689532)},
        test_interval: {value: new Date(172800000)},
        test_time: {value: new Date(3456)},
        test_timestamp: {value: new Date(29877132000)},
        test_bool: true,
        test_bool_false: false,
        test_str: 'strstr',
        test_object: {a: 1, b: 2},
        test_empty_object: {},
      },
    })
  })
})
