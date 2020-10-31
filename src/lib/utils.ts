export const localesMap = {
  en: "English",
  es: "Español",
  fr: "Française",
  pl: "Polski",
  ru: "Русский",
};

export function mapValueToRange(
  n: number,
  [a, b]: [number, number],
  [x, y]: [number, number]
) {
  return ((n - a) * (y - x)) / (b - a) + x;
}
