export function OTimestamp(timestamp: string) {
  return {
    $date: timestamp,
  }
}
