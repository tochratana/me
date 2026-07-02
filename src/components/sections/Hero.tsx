"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      value: t("hero.stats.projects.value"),
      label: t("hero.stats.projects.label"),
    },
    {
      value: t("hero.stats.uptime.value"),
      label: t("hero.stats.uptime.label"),
    },
    {
      value: t("hero.stats.clients.value"),
      label: t("hero.stats.clients.label"),
    },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--hero-bg)] px-4 py-16 text-[color:var(--hero-text)] transition-colors duration-300 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)] transition-colors duration-300" />

      <div
        className={`relative z-10 mx-auto flex min-h-[calc(100vh-13rem)] w-full max-w-7xl flex-col justify-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-[8px] bg-[var(--hero-accent-soft)] px-3 py-1.5 text-sm font-semibold text-[color:var(--hero-accent)] ring-1 ring-[color:var(--hero-accent-border)]">
              <span className="h-2 w-2 rounded-[8px] bg-[var(--hero-accent-strong)]" />
              {t("hero.status")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-[8px] border border-[color:var(--hero-border)] bg-[var(--hero-surface)] px-3 py-1.5 text-sm font-medium text-[color:var(--hero-text-soft)]">
              <MapPin
                className="h-4 w-4 text-[color:var(--hero-accent)]"
                aria-hidden="true"
              />
              {t("hero.location")}
            </span>
          </div>

          <p className="mb-4 text-base font-semibold text-[color:var(--hero-accent)]">
            {t("hero.title")}
          </p>

          <h1 className="max-w-5xl text-4xl font-bold leading-[1.05] text-[color:var(--hero-text)] sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block">{t("hero.greeting")}</span>
            <span className="block max-w-4xl text-balance text-[color:var(--hero-text-soft)]">
              {t("hero.headline")}
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[color:var(--hero-text-soft)] sm:text-lg">
            {t("hero.description")}
          </p>

          <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-[color:var(--hero-text-muted)] sm:text-lg">
            {t("hero.supportingText")}
          </p>

          {/* <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-[var(--hero-primary-button-bg)] px-5 text-sm font-bold text-[color:var(--hero-primary-button-text)] transition hover:bg-[var(--hero-primary-button-hover-bg)]"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-[color:var(--hero-border)] bg-[var(--hero-secondary-button-bg)] px-5 text-sm font-bold text-[color:var(--hero-secondary-button-text)] transition hover:bg-[var(--hero-secondary-button-hover-bg)]"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {t("hero.contactMe")}
            </a>
          </div> */}

          <dl className="mt-8 grid max-w-2xl grid-cols-3 divide-x divide-[color:var(--hero-divider)] border-y border-[color:var(--hero-divider)]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-5 first:pl-0">
                <dt className="text-2xl font-bold leading-none text-[color:var(--hero-text)] sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs font-medium leading-5 text-[color:var(--hero-text-muted)] sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
