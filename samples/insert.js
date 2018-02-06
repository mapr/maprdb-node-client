const { ConnectionManager, ODate, OInterval, OTime, OTimestamp } = require('node-maprdb');
const { MAPRDB_HOST, MAPRDB_PORT } = require('./config');

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;

// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

const docId = '123';
const store = connection.getStore(storeName);
const doc = {};
doc._id = docId;
doc.date = ODate("2012-10-20");
doc.time = OTime("07:42:46.123");
doc.timestamp = OTimestamp("2016-02-22T10:26:12.487");
doc.interval = OInterval(1000000);
doc.test_number = 123.123;
doc.test_bool = true;
doc.test_bool_false = false;
doc.test_str = 'strstr';
doc.test_object = {a: 1, b: 2};
doc.test_empty_object = {};

store.insertOrReplace(doc, (err, result) => {
  // Log the result to the console
  console.log('insertOrReplace', {err, result})
});

//with promise
doc._id = '345';
store.insertOrReplace(doc)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

doc._id = 'zbc';
store.insert(doc)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

doc._id = 'qwe';
store.replace(doc)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
