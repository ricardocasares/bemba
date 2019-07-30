export function toObjectByKey(key: string) {
  return (res: any) =>
    Array.isArray(res)
      ? res.reduce((a, s) => ({ ...a, [s[key]]: s }), {})
      : res;
}
