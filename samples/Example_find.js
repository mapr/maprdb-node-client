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

const query = {};
query.$select = ['_id', 'name', 'age', 'address'];
query.$where = {
  $and: [
    {$ge: {age: 26}},
    {$le: {age: 35}}
  ]
};

// Create connection with specified connection string
ConnectionManager.getConnection('localhost:5678', (err, connection) => {
  const storeName = '/test-db-1';

  connection.getStore(storeName, (err, store) => {
    const stream = store.find(query);
    stream.on('data', (document) => console.log(document));
    stream.on('end', () => {
      console.log('end');
      connection.close();
    });
  });
});
