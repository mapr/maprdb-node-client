const { ConnectionManager } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const store = connection.getStore(storeName);

const query = {};
query.$select = ["name", "age"];
query.$condition = {$eq: {"address.zip": 95110}};

const stream = store.find(query);

stream.on('data', (chunk) => console.log(chunk));
stream.on('end', () => {
  console.log('end');
  connection.close();
});

//with promise
store.find(query)
  .toPromise()
  .then((results) => console.log(results))
  .catch((err) => console.error(err))
  .then(() => connection.close());
