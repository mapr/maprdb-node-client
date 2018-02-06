export function ODate(value: string | number) {
  return {
    $dateDay: value,
  }
}
