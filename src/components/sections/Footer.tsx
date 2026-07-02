"use client";

import { ArrowUpRight, Facebook, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const params = useParams<{ locale?: string }>();
  const currentYear = new Date().getFullYear();
  const locale = params.locale === "km" ? "km" : "en";
  const localePath = (path: string) =>
    path === "/" ? `/${locale}` : `/${locale}${path}`;

  const footerLinks = [
    { label: t("header.home"), href: localePath("/") },
    { label: t("header.about"), href: localePath("/about") },
    { label: t("header.skills"), href: localePath("/skills") },
    { label: t("header.experience"), href: localePath("/experience") },
    { label: t("header.projects"), href: localePath("/projects") },
    { label: t("header.contact"), href: localePath("/contact") },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/tochratana",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tochratana",
      icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/tochratana.me",
      icon: Facebook,
    },
  ];

  return (
    <footer className="border-t border-border bg-[var(--site-page-bg)] px-4 py-10 text-[color:var(--site-text)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-bold">Toch Ratana</p>
            <p className="mt-2 text-sm font-semibold uppercase text-primary">
              {t("footer.role")}
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-[color:var(--site-muted-text)]">
              {t("footer.description")}
            </p>
          </div>

          <nav
            aria-label={t("footer.navigation")}
            className="lg:justify-self-center"
          >
            <p className="mb-4 text-sm font-bold">{t("footer.navigation")}</p>
            <div className="grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[color:var(--site-muted-text)] transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="lg:justify-self-end">
            <p className="mb-4 text-sm font-bold">{t("footer.connect")}</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[color:var(--site-card-border)] text-[color:var(--site-muted-text)] transition-colors hover:border-primary/40 hover:text-primary"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            <Link
              href={localePath("/contact")}
              className="mt-5 inline-flex items-center gap-2 rounded-[8px] bg-[var(--site-button-primary-bg)] px-4 py-2 text-sm font-semibold text-[color:var(--site-button-primary-text)] transition-colors hover:bg-[var(--site-button-primary-hover-bg)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t("footer.contactCta")}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-[color:var(--site-muted-text)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Toch Ratana. {t("footer.rights")}.
          </p>
          <p>{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}
