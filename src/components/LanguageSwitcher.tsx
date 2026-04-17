"use client";

import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useTranslation();

  const switchLanguage = (locale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const hasLocalePrefix =
      segments[0] === "en" || segments[0] === "km";
    const pathWithoutLocale = hasLocalePrefix ? segments.slice(1) : segments;
    const restPath =
      pathWithoutLocale.length > 0 ? `/${pathWithoutLocale.join("/")}` : "";

    // Always include locale in URL so middleware won't override manual choice.
    const finalPath = `/${locale}${restPath}`;

    i18n.changeLanguage(locale);
    router.push(finalPath);
  };

  const currentLocale =
    pathname.split("/").filter(Boolean)[0] === "km" ? "km" : "en";

  return (
    <div className="flex gap-3">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-3 py-2 rounded-md font-medium transition-colors ${
          currentLocale === "en"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
        }`}
        aria-label="Switch to English"
      >
        🇺🇸 EN
      </button>

      <button
        onClick={() => switchLanguage("km")}
        className={`px-3 py-2 rounded-md font-medium transition-colors ${
          currentLocale === "km"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
        }`}
        aria-label="Switch to Khmer"
      >
        🇰🇭 KM
      </button>
    </div>
  );
}
