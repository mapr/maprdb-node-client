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

// Create connection with specified connection string
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

connection.deleteStore(storeName, (err, result) => {
  // Log the result to the console
  console.log('deleteStore', {err, result});
  connection.close();
});
