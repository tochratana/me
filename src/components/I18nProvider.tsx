"use client";

import React, { ReactNode, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "@/locales/en.json";
import kmTranslations from "@/locales/km.json";

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      lng: "en",
      resources: {
        en: { translation: enTranslations },
        km: { translation: kmTranslations },
      },
      ns: ["translation"],
      defaultNS: "translation",
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export function I18nProvider({
  children,
  locale = "en",
}: {
  children: ReactNode;
  locale?: string;
}) {
  useEffect(() => {
    // Set the language based on the locale parameter
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
