/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

const { ConnectionManager } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const docId = '123';
const store = connection.getStore(storeName);

//with promise
store.findById(docId)
  .then((doc) => console.log('findById', doc))
  .catch((err) => console.error(err))
  .then(() => {
    connection.close();
  });
