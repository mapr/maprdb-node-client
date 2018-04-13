const { ConnectionManager } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const docId = '123';
const store = connection.getStore(storeName);

store.delete(docId, (err, result) => {
  // Log the result to the console
  console.log('delete', {err, result})
  connection.close();
});
