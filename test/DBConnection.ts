import {expect} from 'chai'
import * as grpc from 'grpc'
import {join} from 'path'

const PROTO_PATH = join(__dirname, '../proto/maprdb-server.proto')
const com: any = grpc.load(PROTO_PATH).com

const client = new com.mapr.maprdb.grpc.MapRDbServer('localhost:5678', grpc.credentials.createInsecure())

describe('Test connection to DB', () => {
  let response
  let err

  beforeEach((done: () => void) => {
    client.insertOrReplace('test', (resErr: Error, res: {}) => {
      response = res
      err = resErr

      done()
    })
  })

  it('DB should return response', () => {
    expect(response).to.exist
  })

  it('DB should return null err', () => {
    expect(err).to.be.null
  })
})
