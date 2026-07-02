"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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

function getLocalizedUrl(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  const pathWithoutLocale = isLocale(segments[0])
    ? segments.slice(1)
    : segments;
  const restPath =
    pathWithoutLocale.length > 0 ? `/${pathWithoutLocale.join("/")}` : "";
  return `/${locale}${restPath}${window.location.search}${window.location.hash}`;
}

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (locale: Locale) => {
    persistLocale(locale);
    void i18n.changeLanguage(locale);
    router.replace(getLocalizedUrl(pathname, locale), { scroll: false });
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
      className="inline-flex items-center gap-1.5 text-sm text-[color:var(--header-text)] transition-colors hover:text-[color:var(--header-hover-text)]"
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <Languages />
      <span>{label}</span>
    </button>
  );
}
