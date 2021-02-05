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

export const pageview = (url) => {
  // @ts-expect-error
  window.gtag("config", process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  // @ts-expect-error
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
