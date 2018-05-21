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
const condition = {
  $where: {
    $and: [
      {
        $eq: { testField : 'test'}
      }
    ]
  }
};

const mutation = {
  $set:[
    {'a.b[0].boolean':true},
    {'a.c.d':11},
    {'a.x':1}
  ]
};


// Create connection with specified connection string
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const store = connection.getStore(storeName);

store.checkAndUpdate(id, mutation, condition, (err, result) => {
  // Log the result to the console
  console.log('checkAndUpdate', {err, result});
  connection.close();
});