/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export function OTime(value: string) {
  return {
    $time: value,
  }
}
