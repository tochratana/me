"use client";
import { motion } from "framer-motion";
import { YearGroup as YearGroupType } from "./types";
import { YearGroup } from "./YearGroup";

export function Timeline({
  timelineData,
  t,
}: {
  timelineData: YearGroupType[];
  t: (key: string) => string;
}) {
  return (
    <div className="mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {t("about.timeline.heading")}
        </h2>
        <p className="mt-2 text-base text-muted-foreground md:text-lg">
          {t("about.timeline.subheading")}
        </p>
      </motion.div>

      {/* Year sections */}
      <div className="space-y-14">
        {timelineData && timelineData.length > 0 ? (
          timelineData.map((yearGroup) => (
            <YearGroup key={yearGroup.year} yearGroup={yearGroup} t={t} />
          ))
        ) : (
          <p className="text-muted-foreground">Timeline data not available.</p>
        )}
      </div>
    </div>
  );
}
