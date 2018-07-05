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

import {WrapOptions} from 'retry'

export const DEFAULT_WAIT_MULTIPLIER = 1000
export const DEFAULT_WAIT_MAX_ATTEMPT = 18000
export const DEFAULT_MAX_RETRIES = 7

export class ConnectionOptions {
  private 'ojai.mapr.rpc.wait-multiplier': number = DEFAULT_WAIT_MULTIPLIER
  private 'ojai.mapr.rpc.wait-max-attempt': number = DEFAULT_WAIT_MAX_ATTEMPT
  private 'ojai.mapr.rpc.max-retries': number = DEFAULT_MAX_RETRIES

  constructor(connectionOptions: any) {
    const options = Object.keys(connectionOptions)
    options.forEach((val) => {
      if ((<any>this)[val] !== undefined) {
        (<any>this)[val] = connectionOptions[val]
      } else {
        throw new Error(`Illigal connection option: ${val}. Ligal options are: ${Object.keys(this)}`)
      }
    })
  }

  public toWrapOptions(): WrapOptions {
    return {
      minTimeout: this['ojai.mapr.rpc.wait-multiplier'],
      maxTimeout: this['ojai.mapr.rpc.wait-max-attempt'],
      retries: this['ojai.mapr.rpc.max-retries'],
    }
  }
}
