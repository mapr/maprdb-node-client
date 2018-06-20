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

import {Connection} from './Connection'
import {Callback} from '../types'
import {withOptionalCallback} from './utils'
import {status, StatusObject} from 'grpc'
import {ConnectionOptions} from '..'

const isSslError = (e: StatusObject) => e.code === status.UNAVAILABLE && e.details === 'EOF'
/*
 * Class for connection management
 */
export class ConnectionManagerClass {
  public getConnection(url: string, connectionOptionsOrCallback?: any, callback?: Callback) {

    const { connectionOptionsInternal, callbackInternal } = this.handleOptionalParams(connectionOptionsOrCallback, callback)

    const connection = new Connection(url, connectionOptionsInternal)

    return withOptionalCallback(
      () => connection.pingConnection().catch((err: StatusObject) => {
            if (isSslError(err)) {
              throw new Error('Attempt to establish plain text connection failed! Server is listening on SSL socket?')
            }
            throw err
        }),
      () => connection,
      callbackInternal,
    )}

  private handleOptionalParams(connectionOptionsOrCallback?: any, optionalCallback?: Callback) {
    let connectionOptions: ConnectionOptions
    let callback: Callback
    if (optionalCallback !== undefined) {
      connectionOptions = connectionOptionsOrCallback
    } else if (connectionOptionsOrCallback !== undefined) {
      if (typeof connectionOptionsOrCallback === 'function') {
        callback = connectionOptionsOrCallback
      } else {
        connectionOptions = new ConnectionOptions(connectionOptionsOrCallback)
      }
    } else {
      connectionOptions = new ConnectionOptions({})
    }

    return {connectionOptionsInternal: connectionOptions, callbackInternal: callback}
  }
}

export const ConnectionManager = new ConnectionManagerClass()
