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

const { ConnectionManager, ODate, OTime, OTimestamp } = require('node-maprdb');

const docId = 'user000';
const doc = {};
doc._id = docId;
doc.date = new ODate('2012-10-20');
doc.time = new OTime('07:42:46.123');
doc.timestamp = new OTimestamp('2016-02-22T10:26:12.487');
doc.age = 35;
doc.firstName = 'John';
doc.lastName = 'Doe';
doc.address = {
  street: '350 Hoger Way',
  city: 'San Jose',
  state: 'CA',
  zipCode: 95134
};
doc.phoneNumbers = [
  {areaCode: '555', number: '5555555'},
  {areaCode: '555', number: '555-5556'}
];

const condition = {
  $where: {
    $eq: { firstName: 'John' }
  }
};
const storeName = '/test-db-1';

const connectionString = 'localhost:5678?' +
  'auth=basic;' +
  'user=mapr;' +
  'password=mapr;' +
  'ssl=true;' +
  'sslCA=/tmp/ssl_truststore.pem;' +
  'sslTargetNameOverride=node1.cluster.com';

// Create connection with specified connection string
const connection = ConnectionManager.getConnection(connectionString)
  .then((connection) => connection.getStore(storeName))
  .then((store) => store.checkAndReplace(doc, condition))
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .then(() => connection.close());
