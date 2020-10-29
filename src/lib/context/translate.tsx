import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import defaultLang from "@/i18n/en.json";

export type Translation = typeof defaultLang;

export type TranslateContext = {
  t: Translation;
  locale: string;
  locales: string[];
};

const cache = new Map<string, Translation>();
cache.set("en", defaultLang);

export const TranslateContext = createContext<TranslateContext>(null);

export const TranslateProvider = ({ children }) => {
  const { locale, locales } = useRouter();
  const [t, setTranslation] = useState(defaultLang);

  useEffect(() => {
    if (cache.has(locale)) {
      setTranslation(cache.get(locale));
    }

    if (!cache.has(locale)) {
      fetch(`/i18n/${locale}.json`)
        .then((r) => r.json())
        .then((translation) => {
          cache.set(locale, translation);
          setTranslation(cache.get(locale));
        });
    }
  }, [locale]);

  return (
    <TranslateContext.Provider value={{ t, locale, locales }}>
      {children}
    </TranslateContext.Provider>
  );
};
