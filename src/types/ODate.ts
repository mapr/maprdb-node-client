/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export function ODate(value: string | number) {
  return {
    $dateDay: value,
  }
}
