export const when = <T, K extends keyof T = keyof T>(
  key: K,
  fn: (value?: T[K]) => string
) => (props: T) => {
  if (props[key]) {
    return fn(props[key]);
  }

  return null;
};
