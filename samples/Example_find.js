const { ConnectionManager } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const store = connection.getStore(storeName);

const query = {};
query.$select = ['_id', 'name', 'age', 'address'];
query.$where = {
  $and: [
    {$ge: {age: 26}},
    {$le: {age: 35}}
  ]
};

const stream = store.find(query);
stream.on('data', (document) => console.log(document));
stream.on('end', () => {
  console.log('end');
  connection.close();
});
