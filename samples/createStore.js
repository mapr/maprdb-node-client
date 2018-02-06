const { ConnectionManager } = require('node-maprdb');
const { MAPRDB_HOST, MAPRDB_PORT } = require('./config');

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;

// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

connection.createTable(storeName, (err, result) => {
  // Log the result to the console
  console.log('createTable', {err, result})
});
