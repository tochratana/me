"use client";

import { useTranslation } from "react-i18next";

type Locale = "en" | "km";

function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "km";
}

function persistLocale(locale: Locale) {
  localStorage.setItem("i18nextLng", locale);
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = locale;
}

function replaceUrlLocale(locale: Locale) {
  const segments = window.location.pathname.split("/").filter(Boolean);
  const pathWithoutLocale = isLocale(segments[0]) ? segments.slice(1) : segments;
  const restPath =
    pathWithoutLocale.length > 0 ? `/${pathWithoutLocale.join("/")}` : "";
  const finalPath = `/${locale}${restPath}${window.location.search}${window.location.hash}`;

  window.history.replaceState(window.history.state, "", finalPath);
}

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const switchLanguage = (locale: Locale) => {
    persistLocale(locale);
    replaceUrlLocale(locale);
    void i18n.changeLanguage(locale);
  };

  const currentLocale =
    i18n.resolvedLanguage === "km" || i18n.language?.startsWith("km")
      ? "km"
      : "en";

  const nextLocale = currentLocale === "en" ? "km" : "en";
  const buttonLabel = nextLocale === "km" ? "🇰🇭 KM" : "🇺🇸 EN";
  const ariaLabel =
    nextLocale === "km"
      ? `${t("language.khmer")} (${buttonLabel})`
      : `${t("language.english")} (${buttonLabel})`;

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLocale)}
      className="rounded-md bg-gray-200 px-3 py-2 font-medium text-gray-800 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {buttonLabel}
    </button>
  );
}
