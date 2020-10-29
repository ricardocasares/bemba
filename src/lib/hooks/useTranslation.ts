import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import en from "../../../public/i18n/en.json";

export const useTranslation = createUseTranslation("en", en);

export function createUseTranslation<T>(defaultLocale: string, translation: T) {
  const cache = new Map();
  cache.set(defaultLocale, translation);

  return function useTranslation() {
    const { locale } = useRouter();
    const [lang] = locale.split("-");
    const [t, setTranslation] = useState(translation);

    useEffect(() => {
      if (cache.has(lang)) {
        return setTranslation(cache.get(lang));
      }

      fetch(`/i18n/${lang}.json`)
        .then((r) => r.json())
        .then((translation) => {
          cache.set(lang, translation);
          setTranslation(translation);
        });
    }, [lang]);

    return { t };
  };
}
