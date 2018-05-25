/*
 * Copyright (c) 2018 MapR, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {expect} from 'chai'
import * as grpc from 'grpc'
import {join} from 'path'
import { config } from './config'
import {loadSync} from 'protobufjs'
import * as fs from 'fs'

const { HOST, PORT, SSL, SSL_CA, SSL_TARGET_NAME_OVERRIDE} = config
const PROTO_PATH = join(__dirname, '../proto/maprdb-server.proto')
const protoPackage = loadSync(PROTO_PATH)
const grpcObject: any = grpc.loadObject(protoPackage, { enumsAsStrings: false })

const sslTrustPem = (SSL === 'true') ? fs.readFileSync(SSL_CA) : new Buffer('')
const options = (SSL === 'true') ?
  {
     'grpc.ssl_target_name_override' : SSL_TARGET_NAME_OVERRIDE,
  } :
  {}

const client = new grpcObject.com.mapr.data.db.MapRDbServer(
  `${HOST}:${PORT}`,
  (SSL === 'true') ?
    grpc.credentials.createSsl(sslTrustPem) :
    grpc.credentials.createInsecure(),
  options)

describe('Test connection to DB', () => {
  let response: any
  let err: Error

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
