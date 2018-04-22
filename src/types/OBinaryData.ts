/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export class OBinaryData {
  private binaryData : string
  public constructor(binaryData : string) {
    this.binaryData = binaryData
  }
  public toJSON () {
    return { $binary: this.binaryData }
  }
}
