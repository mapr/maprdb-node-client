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

const { HOST, PORT } = config
const PROTO_PATH = join(__dirname, '../proto/maprdb-server.proto')
const protoPackage = loadSync(PROTO_PATH)
const grpcObject: any = grpc.loadObject(protoPackage, { enumsAsStrings: false })

const client = new grpcObject.com.mapr.data.db.MapRDbServer(`${HOST}:${PORT}`, grpc.credentials.createInsecure())

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
