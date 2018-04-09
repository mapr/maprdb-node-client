/*
 * Copyright (c) 2018 & onwards. MapR Tech, Inc., All rights reserved
 *
 */

export function OTimestamp(timestamp: string) {
  return {
    $date: timestamp,
  }
}
