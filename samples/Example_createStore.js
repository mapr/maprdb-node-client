const { ConnectionManager } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

connection.createStore(storeName, (err, result) => {
  // Log the result to the console
  console.log('createStore', {err, result});
  connection.close();
});
