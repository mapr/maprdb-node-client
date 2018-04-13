const { ConnectionManager } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

connection.storeExists(storeName)
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .then(() => connection.close());
