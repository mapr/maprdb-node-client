/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export class OTimestamp {
  private timestamp : string
  public constructor (timestamp : string) {
    this.timestamp = timestamp
  }
  public toJSON () {
    return { $date: this.timestamp }
  }
}
