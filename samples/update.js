const { ConnectionManager } = require('node-maprdb');
const MAPRDB_HOST = 'localhost';
const MAPRDB_PORT = '5678';

const maprURL = `${MAPRDB_HOST}:${MAPRDB_PORT}`;
// Create connection with specified URL
const connection = ConnectionManager.getConnection(maprURL);

const storeName = '/test-db-1';

const store = connection.getStore(storeName);
const condition = {
  "$and": [
    {
      "$eq": {"_id" : "id1"}
    }
  ]
};
const mutation = {
  "$set":[
    {"a.b[0].boolean":true},
    {"a.c.d":11},
    {"a.x":1}
  ]
};
store.update(condition, mutation, (err, result) => {
  // Log the result to the console
  console.log('update', {err, result})
});

//with promise
store.update(condition, mutation)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
