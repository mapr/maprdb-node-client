export class OInterval {
  private value: Date

  constructor(value: string) {
    this.value = new Date(value)
  }

  public getValue() {
    return this.value
  }

  public toString() {
    return {$interval: this.value.getTime()}
  }
}
