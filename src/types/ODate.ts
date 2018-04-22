/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export class ODate {
  private date : string
  public constructor(date : string) {
    this.date = date
  }
  public toJSON () {
    return { $dateDay: this.date }
  }
}
