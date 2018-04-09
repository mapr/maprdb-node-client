/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

import {StoreConnection} from './StoreConnection'

export class ConnectionManagerClass {
  public getConnection(url: string) {
    return new StoreConnection(url)
  }
}

export const ConnectionManager = new ConnectionManagerClass()
