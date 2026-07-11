"use client";
import { motion } from "framer-motion";
import { YearGroup as YearGroupType } from "./types";
import { ActivityCard } from "./cards";

const yearVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function YearGroup({
  yearGroup,
  t,
}: {
  yearGroup: YearGroupType;
  t: (key: string) => string;
}) {
  return (
    <motion.div
      variants={yearVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* Year label */}
      <div className="flex-shrink-0 pt-1 w-24 flex flex-col items-center">
        {typeof yearGroup.year === 'string' && yearGroup.year.includes('-') ? (
          <div className="flex flex-col items-center justify-center text-2xl font-black text-foreground md:text-3xl">
            <span>{yearGroup.year.split('-')[1].trim()}</span>
            <div className="w-1.5 h-6 bg-foreground rounded-full my-1" />
            <span>{yearGroup.year.split('-')[0].trim()}</span>
          </div>
        ) : (
          <span className="text-2xl font-black text-foreground md:text-3xl block text-center">
            {yearGroup.year}
          </span>
        )}
      </div>

      {/* Activities */}
      <div className="min-w-0 flex-1 border-l border-foreground/15">
        {yearGroup.items.map((item, index) => (
          <ActivityCard key={index} item={item} index={index} t={t} />
        ))}
      </div>
    </motion.div>
  );
}
