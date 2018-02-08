const TYPE_CODE_NULL = 1;
const TYPE_CODE_BOOLEAN = 2;
const TYPE_CODE_STRING = 3;
const TYPE_CODE_BYTE = 4;
// const TYPE_CODE_SHORT = 5;
// const TYPE_CODE_INT = 6;
// const TYPE_CODE_LONG = 7;
// const TYPE_CODE_FLOAT = 8;
// const TYPE_CODE_DOUBLE = 9;
const TYPE_CODE_DECIMAL = 10;
// const TYPE_CODE_DATE = 11;
// const TYPE_CODE_TIME = 12;
// const TYPE_CODE_TIMESTAMP = 13;
// const TYPE_CODE_INTERVAL = 14;
// const TYPE_CODE_BINARY = 15;
const TYPE_CODE_MAP = 16;
const TYPE_CODE_ARRAY = 17;

/*

const types = {
  $numberLong: TYPE_CODE_LONG,
  $decimal: TYPE_CODE_FLOAT,
  $dateDay: TYPE_CODE_DATE,
  $time: TYPE_CODE_TIME,
  $date: TYPE_CODE_TIMESTAMP,
  $interval: TYPE_CODE_INTERVAL,
  $binary: TYPE_CODE_BINARY,
};
*/

export enum code {
  TYPE_CODE_NULL,
  TYPE_CODE_BOOLEAN,
  TYPE_CODE_STRING,
  TYPE_CODE_BYTE,
  TYPE_CODE_SHORT,
  TYPE_CODE_INT,
  TYPE_CODE_LONG,
  TYPE_CODE_FLOAT,
  TYPE_CODE_DOUBLE,
  TYPE_CODE_DECIMAL,
  TYPE_CODE_DATE,
  TYPE_CODE_TIME,
  TYPE_CODE_TIMESTAMP,
  TYPE_CODE_INTERVAL,
  TYPE_CODE_BINARY,
  TYPE_CODE_MAP,
  TYPE_CODE_ARRAY,
}

export interface ValueI {
  // code: code;
  setCode(n: number): void;

  getCode(): number;

  isScalar(): boolean;

  isNumeric(): boolean;
}

/**
 * Documentation for Value class
 */
export class Value implements ValueI {
  private code: code;

  constructor(codeNumber: number) {
    this.setCode(codeNumber);
  }

  public static DetermineType(typeCode: code): code {
    switch (typeof typeCode) {
      case 'undefined':
        return TYPE_CODE_NULL;
      case 'boolean':
        return TYPE_CODE_BOOLEAN;
      case 'string':
        return TYPE_CODE_STRING;
      // case 'object': return types[typeCode] || TYPE_CODE_NULL;
      default:
        return null;
    }
  }

  public setCode(c: code) {
    this.code = c;
  }

  public getCode(): code {
    return this.code;
  }

  public isScalar(): boolean {
    return this.code !== TYPE_CODE_MAP && this.code !== TYPE_CODE_ARRAY;
  }

  public isNumeric(): boolean {
    return this.code >= TYPE_CODE_BYTE && this.code <= TYPE_CODE_DECIMAL;
  }
}
