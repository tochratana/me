"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navigation = [
    { name: t("header.home"), href: "#home" },
    { name: t("header.about"), href: "#about" },
    { name: t("header.skills"), href: "#skills" },
    { name: t("header.contact"), href: "#contact" },
    { name: "Blog", href: "https://blog.tochratana.com" },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-3xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-2xl shadow-slate-900/5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
        <span className="hidden sm:inline cursor-pointer font-bold">NEXI</span>

        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className=" rounded rounded-5 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-foreground transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-2xl shadow-slate-900/5 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90 lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900"
                onClick={closeMenu}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
