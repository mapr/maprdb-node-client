const { ConnectionManager } = require('node-maprdb');
const { MAPRDB_HOST, MAPRDB_PORT } = require('./config');

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;
// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

const docId = '123';
const store = connection.getStore(storeName);

store.findById(docId, (err, result) => {
  // Log the result to the console
  console.log('findById', {err, result})
});

//with promise
store.findById(docId)
  .then((doc) => console.log(doc))
  .catch((err) => console.error(err));
