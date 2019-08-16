import facepaint from "facepaint";

export const media = facepaint([
  "@media(min-width: 420px)",
  "@media(min-width: 920px)",
  "@media(min-width: 1120px)"
]);

export const state = facepaint([":hover", ":focus", ":active"]);

export const when = <T, K extends keyof T = keyof T>(
  key: K,
  fn: (value?: T[K]) => string
) => (props: T) => {
  if (props[key]) {
    return fn(props[key]);
  }

  return null;
};
