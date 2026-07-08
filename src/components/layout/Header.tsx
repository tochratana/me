"use client";
import { useState } from "react";
import { ArrowUpRight, Menu, X, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";

type NavigationItem = {
  name: string;
  href: string;
  icon?: LucideIcon;
  external?: boolean;
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const params = useParams<{ locale?: string }>();
  const pathname = usePathname();
  const locale = params.locale === "km" ? "km" : "en";
  const localePath = (path: string) =>
    path === "/" ? `/${locale}` : `/${locale}${path}`;

  const navigation: NavigationItem[] = [
    { name: t("header.home"), href: localePath("/") },
    { name: t("header.about"), href: localePath("/about") },
    { name: t("header.projects"), href: localePath("/projects") },
    {
      name: "Blog",
      href: "#",
      icon: ArrowUpRight,
      external: true,
    },
  ];

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 mx-auto w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded rounded-lg border border-[color:var(--header-border)] bg-[var(--header-bg)] px-4 py-2 text-[color:var(--header-text)] [box-shadow:0_22px_70px_-24px_var(--header-shadow),inset_0_1px_0_var(--header-highlight)] backdrop-blur-xl">
        <span className="hidden sm:inline cursor-pointer font-bold">NEXI</span>

        <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive =
              !item.external &&
              (pathname === item.href ||
                (item.href !== `/${locale}` &&
                  pathname?.startsWith(`${item.href}/`)));
            const className = `inline-flex items-center justify-center gap-1 rounded rounded-5 px-4 py-2 text-[length:var(--font-size-header)] font-semibold leading-[var(--line-height-header)] text-[color:var(--header-text)] transition hover:bg-[var(--header-hover-bg)] hover:text-[color:var(--header-hover-text)] ${
              isActive
                ? "bg-[var(--header-hover-bg)] text-[color:var(--header-hover-text)]"
                : ""
            }`;

            return item.external ? (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={className}
              >
                <span>{item.name}</span>
                {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
              </a>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={className}
                aria-current={isActive ? "page" : undefined}
              >
                <span>{item.name}</span>
                {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--header-border)] bg-[var(--header-bg)] text-[color:var(--header-text)] transition hover:bg-[var(--header-hover-bg)] hover:text-[color:var(--header-hover-text)] lg:hidden"
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
        <div className="mx-auto mt-3 max-w-7xl rounded-xl border border-[color:var(--header-border)] bg-[var(--header-bg)] px-4 py-3 [box-shadow:0_22px_70px_-24px_var(--header-shadow),inset_0_1px_0_var(--header-highlight)] backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive =
                !item.external &&
                (pathname === item.href ||
                  (item.href !== `/${locale}` &&
                    pathname?.startsWith(`${item.href}/`)));
              const className = `inline-flex items-center gap-1 rounded-full px-4 py-3 text-[length:var(--font-size-header)] font-semibold leading-[var(--line-height-header)] text-[color:var(--header-text)] transition hover:bg-[var(--header-hover-bg)] hover:text-[color:var(--header-hover-text)] ${
                isActive
                  ? "bg-[var(--header-hover-bg)] text-[color:var(--header-hover-text)]"
                  : ""
              }`;

              return item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={className}
                  onClick={closeMenu}
                >
                  <span>{item.name}</span>
                  {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={className}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  <span>{item.name}</span>
                  {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                </Link>
              );
            })}
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
