// var join = require('path').join;
// var grpc = require('grpc');
// var PROTO_PATH = join(__dirname, './protos/maprdb-server.proto');
// var com = grpc.load(PROTO_PATH).com;
const nodeClient = require('./dist')

const store = new nodeClient.ConnectionStore('localhost:5678')
//
// //store.createStore('/test-store1').catch(e => console.error(e.message))
// store.isStoreExists('/test-store1')
//   .then(result => {
//     if (result === true) {
//       console.log(true)
//     } else {
//       console.log(false)
//     }
//   })
//   .catch(e => console.error(e.message))
// //store.insertOrReplace(null, doc).catch(e => console.error(e.message))
// //store.deleteStore('/test-store1').catch(e => console.error(e.message))
// store.isStoreExists('/test-store-test')
//   .then(result => {
//     if (result === true) {
//       console.log(true)
//     } else {
//       console.log(false)
//     }
//   })
//   .catch(e => console.error(e.message))
//
// //
// // var client = new com.mapr.maprdb.grpc.MapRDbServer('localhost:5678', grpc.credentials.createInsecure());
// //
// // client.insertOrReplace('test', (err, response) => {
// //   console.log('InsertOrReplace response', response)
// //   console.log('InsertOrReplace err', err)
// // })

store.isStoreExists('/test-store1')
  .then(exists => {
    if (exists) {
      store.getStore('/test-store1').insertOrReplace({'_id': 'test'})
        .catch(e => {
          console.log(e)
        })
    } else {
      store.createStore('/test-store1')
        .then(storeDocument => {
          storeDocument.insertOrReplace({'_id': 'test'}).catch(e => {
            console.log(e)
          })
        })
        .catch(e => {
          console.log(e)
        })
    }
  })
  .catch(e => {
    console.log(e)
  })
