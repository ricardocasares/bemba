import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import defaultLang from "@/i18n/en.json";

export type Translation = typeof defaultLang;

export interface TranslateContext {
  t: Translation;
  locale: string;
  locales: string[];
}

export const TranslateContext = createContext<TranslateContext>(null);

export const TranslateProvider = ({ children }) => {
  const { locale, locales } = useRouter();
  const [t, setTranslation] = useState(defaultLang);
  const [cache, setCache] = useState({ en: defaultLang });

  useEffect(() => {
    if (cache[locale]) {
      setTranslation(cache[locale]);
    }

    if (!cache[locale]) {
      fetch(`/i18n/${locale}.json`)
        .then(async (r) => await r.json())
        .then((translation) => {
          setCache((state) => ({ ...state, [locale]: translation }));
          setTranslation(translation);
        });
    }
  }, [locale]);

  return (
    <TranslateContext.Provider value={{ t, locale, locales }}>
      {children}
    </TranslateContext.Provider>
  );
};
