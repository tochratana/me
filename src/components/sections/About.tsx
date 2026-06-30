"use client";

import { CloudCog, Workflow } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const focusItems = [
    t("about.focus.cloud"),
    t("about.focus.automation"),
    t("about.focus.reliability"),
  ];

  return (
    <section
      id="about"
      className="bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <div className="relative overflow-hidden rounded-[8px] border border-border bg-card shadow-[0_24px_80px_var(--site-feature-shadow)]">
            <div className="relative aspect-[4/5] min-h-[380px]">
              <Image
                src="/project/ratana.jpg"
                alt="Toch Ratana"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="border-t border-border p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {t("about.role")}
              </p>
              <h3 className="mt-2 text-2xl font-bold">Toch Ratana</h3>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
            <CloudCog className="h-4 w-4" aria-hidden="true" />
            {t("about.eyebrow")}
          </div>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            {t("about.title")}
          </h2>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
            <p>{t("about.intro")}</p>
            <p>{t("about.description")}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {focusItems.map((item) => (
              <div
                key={item}
                className="flex min-h-24 flex-col justify-between rounded-[8px] border border-border bg-card p-4"
              >
                <Workflow className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-5 text-sm font-semibold leading-6">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-primary/40 pl-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {t("about.noteTitle")}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
              {t("about.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
