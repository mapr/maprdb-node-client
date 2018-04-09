const { ConnectionManager } = require('node-maprdb');
const MAPRDB_HOST = 'localhost';
const MAPRDB_PORT = '5678';

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;

// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

connection.tableExists(storeName, (err, result) => {
  // Log the result to the console
  console.log('tableExists', {err, result});
  connection.close();
});
