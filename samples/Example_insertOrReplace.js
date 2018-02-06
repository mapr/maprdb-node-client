/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

const { ConnectionManager, ODate, OTime, OTimestamp } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const docId = '123';
const store = connection.getStore(storeName);
const doc = {};
doc._id = docId;
doc.date = new ODate("2012-10-20");
doc.time = new OTime("07:42:46.123");
doc.timestamp = new OTimestamp("2016-02-22T10:26:12.487");
doc.test_number = 123.123;
doc.test_bool = true;
doc.test_bool_false = false;
doc.test_str = 'strstr';
doc.test_object = {a: 1, b: 2};
doc.test_empty_object = {};

store.insertOrReplace(doc)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .then(() => connection.close());
