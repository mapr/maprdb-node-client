import {format} from 'date-fns'

export class OTime {
  private value: Date

  constructor(value: string) {
    this.value = new Date(value)
  }

  public getValue() {
    return this.value
  }

  public toString() {
    return {$time: format(this.value, 'hh:mm:ss')}
  }
}
