/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

import {decode, encode, InsertOrReplaceRequestBuilder} from './Connection'
import {Callback} from '../types'
import {DocumentStream} from '../ojai/DocumentStream'

import {com} from '../proto'
import IInsertOrReplaceResponse = com.mapr.data.db.IInsertOrReplaceResponse
import IFindByIdResponse = com.mapr.data.db.IFindByIdResponse
import IFindRequest = com.mapr.data.db.IFindRequest
import IUpdateRequest = com.mapr.data.db.IUpdateRequest
import IDeleteRequest = com.mapr.data.db.IDeleteRequest
import IUpdateResponse = com.mapr.data.db.IUpdateResponse
import IDeleteResponse = com.mapr.data.db.IDeleteResponse
import InsertMode = com.mapr.data.db.InsertMode
import IFindByIdRequest = com.mapr.data.db.IFindByIdRequest
import PayloadEncoding = com.mapr.data.db.PayloadEncoding
import ErrorCode = com.mapr.data.db.ErrorCode

/*
 * Class that responsible for operation with documents
 */
export class DocumentStore {
  private storePath: string
  private connection: any
  constructor(storePath: string, connection: any) {
    this.storePath = storePath
    this.connection = connection
  }
  public insertOrReplace(document: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.INSERT_OR_REPLACE, callback)
  }
  public insert(document: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.INSERT, callback)
  }
  public replace(document: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.REPLACE, callback)
  }
  public checkAndReplace(document: any, condition: any, callback?: Callback): void|Promise<any> {
    return this.grpcInsertOrReplace(document, InsertMode.REPLACE, condition, callback)
  }
  // TODO: Add $binary support
  public findById(id: string, callback?: Callback): void|Promise<any> {
    const request: IFindByIdRequest = {
      tablePath: this.storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      jsonDocument: encode({_id: id}),
    }

    if (callback) {
      this.connection.findById(request, (err, response: IFindByIdResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, decode(response.jsonDocument, response.payloadEncoding))
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this.connection.findById(request, (err, response: IFindByIdResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(decode(response.jsonDocument, response.payloadEncoding))
          }
        }
        reject(err || response.error)
      })
    })
  }
  public find(query: any, includeQueryPlan: boolean = false): DocumentStream {
    const request: IFindRequest = {
      tablePath: this.storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      includeQueryPlan,
      jsonQuery: encode(query),
    }

    return new DocumentStream(this.connection.find(request))
  }
  public delete(_id: string, callback?: Callback): void|Promise<any> {
    return this.grpcDelete(_id, callback)
  }
  public checkAndDelete(_id: string, condition: any, callback?: Callback): void|Promise<any> {
    return this.grpcDelete(_id, condition, callback)
  }
  public update(_id: string, mutation: any, callback?: Callback): void|Promise<any> {
    return this.grpcUpdate(_id, mutation, callback)
  }
  public checkAndMutate(_id: string, mutation: any, condition: any, callback?: Callback): void|Promise<any> {
    return this.grpcUpdate(_id, mutation, condition, callback)
  }
  private grpcInsertOrReplace(
    document: any,
    mode: InsertMode,
    conditionOrCallback?: any,
    optionalCallback?: Callback,
  ): void|Promise<any> {
    const { condition, callback } = this.handleOptionalParams(conditionOrCallback, optionalCallback)

    const request = InsertOrReplaceRequestBuilder(document, this.storePath, mode, condition)
    if (callback) {
      this.connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this.connection.insertOrReplace(request, (err, response: IInsertOrReplaceResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
        }
        reject(err || response.error)
      })
    })
  }
  private grpcUpdate(_id: string, mutation: any, conditionOrCallback?: any, optionalCallback?: Callback): void|Promise<any> {
    const { condition, callback } = this.handleOptionalParams(conditionOrCallback, optionalCallback)

    const request: IUpdateRequest = {
      tablePath: this.storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      jsonDocument: encode({ _id }),
      jsonCondition: encode(condition),
      jsonMutation: encode(mutation),
    }

    if (callback) {
      this.connection.update(request, (err, response: IUpdateResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
          if (response.error.errCode === ErrorCode.DOCUMENT_NOT_FOUND) {
            return callback(null, false)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this.connection.update(request, (err, response: IUpdateResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
          if (response.error.errCode === ErrorCode.DOCUMENT_NOT_FOUND) {
            return resolve(false)
          }
        }
        reject(err || response.error)
      })
    })
  }
  private grpcDelete(_id: string, conditionOrCallback?: any, optionalCallback?: Callback): void|Promise<any> {
    const { callback, condition } = this.handleOptionalParams(conditionOrCallback, optionalCallback)

    const request: IDeleteRequest = {
      tablePath: this.storePath,
      payloadEncoding: PayloadEncoding.JSON_ENCODING,
      jsonDocument: encode({ _id }),
      jsonCondition: encode(condition),
    }

    if (callback) {
      this.connection.delete(request, (err, response: IDeleteResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return callback(null, true)
          }
        }
        callback(err || response.error)
      })

      return
    }

    return new Promise((resolve: any, reject: (err: Error) => void) => {
      this.connection.delete(request, (err, response: IDeleteResponse) => {
        if (!err) {
          if (response.error.errCode === ErrorCode.NO_ERROR) {
            return resolve(true)
          }
        }
        reject(err || response.error)
      })
    })
  }
  private handleOptionalParams(conditionOrCallback?: any, optionalCallback?: Callback) {
    let condition
    let callback
    if (optionalCallback !== undefined) {
      condition = conditionOrCallback
    } else if (conditionOrCallback !== undefined) {
      if (typeof conditionOrCallback === 'function') {
        callback = conditionOrCallback
      } else {
        condition = conditionOrCallback
      }
    }

    return {condition, callback}
  }
}
