export class OTimestamp {
  private value: Date

  constructor(value: string) {
    this.value = new Date(value)
  }

  public getValue() {
    return this.value
  }

  public toString() {
    return {$date: this.value.getTime()}
  }
}
