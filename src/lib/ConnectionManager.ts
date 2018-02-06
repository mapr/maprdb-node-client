import {StoreConnection} from './StoreConnection'

export class ConnectionManagerClass {
  public getConnection(url: string) {
    return new StoreConnection(url)
  }
}

export const ConnectionManager = new ConnectionManagerClass()
