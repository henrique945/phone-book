export function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}

export function isValid(value: any): value is object {
  return !isNullOrUndefined(value);
}
