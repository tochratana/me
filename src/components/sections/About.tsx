"use client";
import "@/app/globals.css";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Timeline } from "./about/timeline/Timeline";
import { YearGroup as YearGroupType } from "./about/timeline/types";

export default function About() {
  const { t } = useTranslation();

  // Load the timeline data from the translation files (en.json / km.json)
  const timelineData: YearGroupType[] = t("about.timeline.history", {
    returnObjects: true,
    defaultValue: [],
  }) as YearGroupType[];

  return (
    <section
      id="about"
      className="bg-background px-4 py-20 text-foreground sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Top Section: Intro & Image */}
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Hey! I&apos;m{" "}
              <span style={{ color: "#6ee7b7" }}>
                {t("hero.greeting") || "Toch Ratana"}
              </span>{" "}
              and I&apos;m a {t("about.role") || "DevOps & Cloud Engineer"}.
            </h2>

            <div className="space-y-4 text-base leading-8 text-muted-foreground md:text-lg">
              <p>{t("about.intro")}</p>
              <p>{t("about.description")}</p>
              <p>{t("about.quote")}</p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs flex-shrink-0 sm:max-w-sm lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[24px] bg-white/5 border border-white/10"
            >
              <Image
                src="/project/ratana.jpg"
                alt="Toch Ratana"
                width={500}
                height={500}
                className="aspect-square w-full object-cover"
                priority={false}
              />
            </motion.div>
          </div>
        </div>

        {/* ─── Year-Based Timeline ──────────────────────────────────────── */}
        <Timeline timelineData={timelineData} t={t} />
      </div>
    </section>
  );
}
