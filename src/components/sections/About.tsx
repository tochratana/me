"use client";

import { CloudCog, Workflow } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl items-center">
        <div>
          <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            {t("about.title")}
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
            <p>{t("about.intro")}</p>
            <p>{t("about.description")}</p>
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
