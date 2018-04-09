const { ConnectionManager } = require('node-maprdb');
const MAPRDB_HOST = 'localhost';
const MAPRDB_PORT = '5678';

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;

// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

const docId = '123';
const store = connection.getStore(storeName);

store.delete(docId, (err, result) => {
  // Log the result to the console
  console.log('delete', {err, result})
  connection.close();
});
