export function isServer() {
  return typeof window !== "undefined" ? false : true;
}

export function isProduction() {
  return process.env.NODE_ENV === "production" ? true : false;
}

export function toObjectByKey(key) {
  return arr => arr.reduce((a, s) => ({ ...a, [s[key]]: s }), {});
}
