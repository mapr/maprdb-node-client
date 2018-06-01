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

import {Metadata} from 'grpc'

export class ConnectionInfo {
  get url(): string {
    return this._url
  }

  get ssl(): boolean {
    return this._ssl
  }

  get sslCa(): string {
    return this._sslCa
  }

  get validationMetadata(): Metadata {
    return this._validationMetadata
  }

  get sslTargetNameOverride(): string {
    return this._sslTargetNameOverride
  }
  private _url: string
  private _ssl: boolean
  private _sslCa: string
  private _validationMetadata: Metadata
  private _sslTargetNameOverride: string

  public constructor (url : string,
                      ssl: boolean,
                      sslCa: string,
                      validationMetadata: Metadata,
                      sslTargeNameOverride: string) {
    this._url = url
    this._ssl = ssl
    this._sslCa = sslCa
    this._validationMetadata = validationMetadata
    this._sslTargetNameOverride = sslTargeNameOverride
  }
}
