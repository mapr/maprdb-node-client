/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export class OTime {
  private time : string
  public constructor (time : string) {
    this.time = time
  }
  public toJSON () {
    return { $time: this.time }
  }
}
