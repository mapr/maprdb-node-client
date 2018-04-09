const { ConnectionManager } = require('node-maprdb');
const MAPRDB_HOST = 'localhost';
const MAPRDB_PORT = '5678';

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;

// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

connection.createTable(storeName, (err, result) => {
  // Log the result to the console
  console.log('createTable', {err, result})
  connection.close();
});
