export function isServer() {
  return typeof window !== "undefined" ? false : true;
}

export function isProduction() {
  return process.env.NODE_ENV === "production" ? true : false;
}
