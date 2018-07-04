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

const { ConnectionManager } = require('node-maprdb');

const id = '123';

const mutation = {
  $set:[
    {'a.b[0].boolean':true},
    {'a.c.d':11},
    {'a.x':1}
  ]
};

const connectionString = 'localhost:5678?' +
  'auth=basic;' +
  'user=mapr;' +
  'password=mapr;' +
  'ssl=true;' +
  'sslCA=/tmp/ssl_truststore.pem;' +
  'sslTargetNameOverride=node1.cluster.com';

// Create connection with specified connection string
ConnectionManager.getConnection(connectionString, (err, connection) => {
  const storeName = '/test-db-1';

  connection.getStore(storeName, (err, store) => {
    store.update(id, mutation, (err, result) => {
      // Log the result to the console
      console.log('update', {err, result});
      connection.close();
    });
  });
});
