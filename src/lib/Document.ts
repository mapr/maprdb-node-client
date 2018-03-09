import * as _ from 'lodash'

import {ODate} from '../types/ODate'
import {OInterval} from '../types/OInterval'
import {OTime} from '../types/OTime'
import {OTimestamp} from '../types/OTimestamp'

export class Document {
  private _internalObject: any

  constructor(id: string) {
    this._internalObject = {}
    this.setId(id)
  }

  public setId(id: string): Document {
    if (typeof id === 'string' || typeof id === 'number') {
      this._internalObject._id = id
    }

    return this
  }

  public getId() {
    return this._internalObject._id
  }

  public getField(field: string): any {
    const internalField = _.get(this._internalObject, field)

    if (internalField instanceof ODate || internalField instanceof OTime ||
      internalField instanceof OTimestamp || internalField instanceof OInterval) {
      return internalField.getValue()
    }

    return internalField
  }

  public setField(field: string, value: any): Document {
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      _.set(this._internalObject, field, value)
    } else if (Array.isArray(value)) {
      this.setArray(field, value)
    } else if (value instanceof ODate) {
      this.setODate(field, value)
    } else if (value instanceof OTime) {
      this.setOTime(field, value)
    } else if (value instanceof OTimestamp) {
      this.setOTimestamp(field, value)
    } else if (value instanceof OInterval) {
      this.setOInterval(field, value)
    } else {
      _.set(this._internalObject, field, value)
    }

    return this
  }

  public toJSON() {
    return this._internalObject
  }

  private setArray(field: string, value: any[]) {
    _.set(this._internalObject, field, value)
  }

  private setODate(field: string, value: ODate) {
    _.set(this._internalObject, field, value)
  }

  private setOTime(field: string, value: OTime) {
    _.set(this._internalObject, field, value)
  }

  private setOTimestamp(field: string, value: OTimestamp) {
    _.set(this._internalObject, field, value)
  }

  private setOInterval(field: string, value: OInterval) {
    _.set(this._internalObject, field, value)
  }
}
