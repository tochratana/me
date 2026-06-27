"use client";

import { Languages } from "lucide-react";
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
  const pathWithoutLocale = isLocale(segments[0])
    ? segments.slice(1)
    : segments;
  const restPath =
    pathWithoutLocale.length > 0 ? `/${pathWithoutLocale.join("/")}` : "";
  const finalPath = `/${locale}${restPath}${window.location.search}${window.location.hash}`;

  window.history.replaceState(window.history.state, "", finalPath);
}

// Translate icon matching the screenshot style
function TranslateIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 8l6 6" />
      <path d="M4 6h7M7 4v2" />
      <path d="M2 12h8" />
      <path d="M12 6l4 10 1.5-3.5L19 16" />
      <path d="M14.5 12.5H19" />
    </svg>
  );
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

  // Label shows the *current* language name (like the screenshot shows "អង់គ្លេស" = English)
  const label =
    currentLocale === "km"
      ? t("language.khmer") // e.g. "ខ្មែរ"
      : t("language.english"); // e.g. "អង់គ្លេស" or "English"

  const ariaLabel =
    nextLocale === "km"
      ? t("language.switch_to_khmer")
      : t("language.switch_to_english");

  return (
    <button
      type="button"
      onClick={() => switchLanguage(nextLocale)}
      className="inline-flex items-center gap-1.5 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <Languages />
      <span>{label}</span>
    </button>
  );
}
