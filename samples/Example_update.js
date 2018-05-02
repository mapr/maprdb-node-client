const { ConnectionManager } = require('node-maprdb');

// Create connection with specified URL
const connection = ConnectionManager.getConnection('localhost:5678');

const storeName = '/test-db-1';

const store = connection.getStore(storeName);
const id = '123';

const mutation = {
  $set:[
    {'a.b[0].boolean':true},
    {'a.c.d':11},
    {'a.x':1}
  ]
};

store.update(id, mutation, (err, result) => {
  // Log the result to the console
  console.log('update', {err, result});
  connection.close();
});
