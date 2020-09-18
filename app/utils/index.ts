function isFalsy(val: unknown, zero = true) {
  if (!zero) {
    return !val && val !== 0;
  }
  return !val;
}
export function getValOrDefault<T, U>(
  val: T,
  defVal: U,
  zero?: boolean
): T | U {
  return isFalsy(val, zero) ? defVal : val;
}
