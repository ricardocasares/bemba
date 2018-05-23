export function isServer() {
  return typeof window !== "undefined" ? false : true;
}

export function isProduction() {
  return process.env.NODE_ENV === "production" ? true : false;
}

export function toObjectByKey(key) {
  return res =>
    Array.isArray(res)
      ? res.reduce((a, s) => ({ ...a, [s[key]]: s }), {})
      : res;
}
