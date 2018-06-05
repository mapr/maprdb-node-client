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
  private readonly _encodedUserMetadata: string;
  private readonly _url: string
  private readonly _ssl: boolean
  private readonly _sslCa: string
  private readonly _sslTargetNameOverride: string
  private _validationMetadata: Metadata

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

  set validationMetadata(value: Metadata) {
    this._validationMetadata = value
  }

  get sslTargetNameOverride(): string {
    return this._sslTargetNameOverride
  }

  public constructor (url : string,
                      ssl: boolean,
                      sslCa: string,
                      validationMetadata: Metadata,
                      sslTargetNameOverride: string,
                      encodedUserMetadata: string,
                      ) {
    this._url = url
    this._ssl = ssl
    this._sslCa = sslCa
    this._validationMetadata = validationMetadata
    this._sslTargetNameOverride = sslTargetNameOverride
    this._encodedUserMetadata = encodedUserMetadata
  }

  public setBasicAuth() {
    this._validationMetadata.set('authorization', `basic ${this._encodedUserMetadata}`)
  }

  public setBearerAuth(jwtToken: string) {
    this._validationMetadata.set('authorization', `bearer ${jwtToken}`)
  }

}
