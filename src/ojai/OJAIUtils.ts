/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

import {ODate, OTime, OTimestamp} from '..'

const typeTransformMap = {
  $numberByte : (x) => x,
  $numberShort : (x) => x,
  $numberInt : (x) => x,
  $numberLong : (x) => x,
  $numberFloat : (x) => x,
  $dateDay : (x) => new ODate(x),
  $time : (x) => new OTime(x),
  $date : (x) => new OTimestamp(x),
  $binary : (x) => Buffer.from(x, 'base64'),
}

export const parseOJAIDocument = (jsonStr: string) => {
  const obj = JSON.parse(jsonStr)

  return normalizeTypes(obj)
}

export const stringifyOJAIDocument = (document : any) => {
  return JSON.stringify(document, (key: string, value : any) => {
    if ((value !== undefined) && (value.type === 'Buffer')) {
      return { $binary: Buffer.from(value.data).toString('base64') }
    }

    return value
  })
}

const normalizeTypes = (obj) => {
  Object.keys(obj).forEach(key => {
    const val = obj[key]
    if (val instanceof Object) {
      if (objectNeedsNormalization(val)) {
        obj[key] = normalizeObject(val)
      } else {
        normalizeTypes(val)
      }
    }
  })

  return obj
}

const objectNeedsNormalization = (obj) => {
  const keys = Object.keys(obj)

  return keys.length === 1 && typeTransformMap[keys[0]]
}

const normalizeObject = (obj) => {
  const field = Object.keys(obj)[0]

  return typeTransformMap[field](obj[field])
}
