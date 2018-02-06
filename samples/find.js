const { ConnectionManager } = require('node-maprdb');
const { MAPRDB_HOST, MAPRDB_PORT } = require('./config');

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;

// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

const store = connection.getStore(storeName);

const query = {};
query.$select = ["name", "age"];
query.$condition = {$eq: {"address.zip": 95110}};

const stream = store.find(query);

stream.on('data', (chunk) => console.log(chunk));
stream.on('end', () => {
  console.log('end');
});

//with promise
store.find(query)
  .toPromise()
  .then((results) => console.log(results))
  .catch((err) => console.error(err));