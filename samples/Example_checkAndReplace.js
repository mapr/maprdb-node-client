
const { ConnectionManager, ODate, OTime, OTimestamp } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const docId = 'user000';
const store = connection.getStore(storeName);
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
store.checkAndReplace(doc, condition)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .then(() => connection.close());
