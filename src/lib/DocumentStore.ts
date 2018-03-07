import {createConnection} from './Connection'

import {com} from '../../proto'
import CreateTableCallback = com.mapr.maprdb.grpc.MapRDbServer.CreateTableCallback
import MapRDbServer = com.mapr.maprdb.grpc.MapRDbServer
import IInsertOrReplaceRequest = com.mapr.maprdb.grpc.IInsertOrReplaceRequest
import InsertOrReplaceResponse = com.mapr.maprdb.grpc.InsertOrReplaceResponse
import ICreateTableRequest = com.mapr.maprdb.grpc.ICreateTableRequest
import CreateTableResponse = com.mapr.maprdb.grpc.CreateTableResponse
import InsertOrReplaceCallback = com.mapr.maprdb.grpc.MapRDbServer.InsertOrReplaceCallback
import DeleteTableCallback = com.mapr.maprdb.grpc.MapRDbServer.DeleteTableCallback
import DeleteTableResponse = com.mapr.maprdb.grpc.DeleteTableResponse
import IDeleteTableRequest = com.mapr.maprdb.grpc.IDeleteTableRequest
import TableExistsCallback = com.mapr.maprdb.grpc.MapRDbServer.TableExistsCallback
import TableExistsRequest = com.mapr.maprdb.grpc.TableExistsRequest
import TableExistsResponse = com.mapr.maprdb.grpc.TableExistsResponse
import IFindByIdRequest = com.mapr.maprdb.grpc.IFindByIdRequest
import FindByIdResponse = com.mapr.maprdb.grpc.FindByIdResponse
import FindByIdCallback = com.mapr.maprdb.grpc.MapRDbServer.FindByIdCallback
import IFindRequest = com.mapr.maprdb.grpc.IFindRequest
import FindCallback = com.mapr.maprdb.grpc.MapRDbServer.FindCallback
import FindResponse = com.mapr.maprdb.grpc.FindResponse
import ErrorCode = com.mapr.maprdb.grpc.ErrorCode

export class DocumentStore implements MapRDbServer {
  public requestDelimited: boolean
  public responseDelimited: boolean
  public rpcImpl: any

  constructor(rpcImpl: { url?: string; connection?: string; storePath?: string },
              requestDelimited?: boolean,
              responseDelimited?: boolean) {
    this.rpcImpl = Boolean(rpcImpl) && Boolean(rpcImpl.connection) ? rpcImpl.connection : createConnection(rpcImpl.url)

    console.log({requestDelimited, responseDelimited})
  }

  public insertOrReplace(request: IInsertOrReplaceRequest, callback: InsertOrReplaceCallback): void
  public insertOrReplace(request: IInsertOrReplaceRequest): Promise<InsertOrReplaceResponse>
  public insertOrReplace(request: IInsertOrReplaceRequest, callback?: InsertOrReplaceCallback): (void | Promise<InsertOrReplaceResponse>) {
    if (callback) {
      this.rpcImpl.insertOrReplace(request, callback)

      return
    }

    return new Promise<InsertOrReplaceResponse>((resolve, reject) => {
      this.rpcImpl.insertOrReplace(request, (err: Error, response: InsertOrReplaceResponse) => {
        if (err) {
          reject(err)
        } else if (!response) {
          reject(new Error())
        } else {
          switch (response.error.errCode) {
            case ErrorCode.NO_ERROR:
              resolve(response)
              break
            default:
              reject(new Error(response.error.errorMessage))
          }
        }
      })
    })
  }

  public createTable(request: ICreateTableRequest, callback: CreateTableCallback): void
  public createTable(request: ICreateTableRequest): Promise<CreateTableResponse>
  public createTable(request: ICreateTableRequest, callback?: CreateTableCallback): (void | Promise<CreateTableResponse>) {
    if (callback) {
      this.rpcImpl.createTable(request, callback)

      return
    }

    return new Promise<CreateTableResponse>((resolve, reject) => {
      this.rpcImpl.createTable(request, (err: Error, response: CreateTableResponse) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  public deleteTable(request: IDeleteTableRequest, callback: DeleteTableCallback): void
  public deleteTable(request: IDeleteTableRequest): Promise<DeleteTableResponse>
  public deleteTable(request: IDeleteTableRequest, callback?: DeleteTableCallback): (void | Promise<DeleteTableResponse>) {
    if (callback) {
      this.rpcImpl.deleteTable(request, callback)

      return
    }

    return new Promise<DeleteTableResponse>((resolve, reject) => {
      this.rpcImpl.deleteTable(request, (err: Error) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }

  public tableExists(request: TableExistsRequest, callback: TableExistsCallback): void
  public tableExists(request: TableExistsRequest): Promise<TableExistsResponse>
  public tableExists(request: TableExistsRequest, callback?: TableExistsCallback): (void | Promise<TableExistsResponse>) {
    if (callback) {
      this.rpcImpl.tableExists(request, callback)

      return
    }

    return new Promise<TableExistsResponse>((resolve, reject) => {
      this.rpcImpl.tableExists(request, (err: Error, response: TableExistsResponse) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  public findById(request: IFindByIdRequest, callback: FindByIdCallback): void
  public findById(request: IFindByIdRequest): Promise<FindByIdResponse>
  public findById(request: IFindByIdRequest, callback?: FindByIdCallback): (void | Promise<FindByIdResponse>) {
    if (callback) {
      this.rpcImpl.findById(request, callback)

      return
    }

    return new Promise<FindByIdResponse>((resolve, reject) => {
      this.rpcImpl.findById(request, (err: Error, response: FindByIdResponse) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  public find(request: IFindRequest, callback: FindCallback): void
  public find(request: IFindRequest): Promise<FindResponse>
  public find(request: IFindRequest, callback?: FindCallback): (void | Promise<FindResponse>) {
    if (callback) {
      this.rpcImpl.find(request, callback)

      return
    }

    return new Promise<FindResponse>((resolve, reject) => {
      this.rpcImpl.find(request, (err: Error, response: FindResponse) => {
        if (err) {
          reject(err)
        } else {
          resolve(response)
        }
      })
    })
  }

  public rpcCall() {
    console.log('rpcCall')
  }

  public end(): any {
    console.log('end')
  }

  public on(): any {
    console.log('on')
  }

  public off(): any {
    console.log('off')
  }

  public emit(): any {
    console.log('off')
  }
}
