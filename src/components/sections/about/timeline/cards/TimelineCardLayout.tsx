"use client";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      delay: i * 0.1,
    },
  }),
};

export function TimelineCardLayout({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      className="relative pl-8 md:pl-10"
    >
      {/* Dot */}
      <div className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-foreground/40" />

      {/* Content */}
      <div className="pb-6">{children}</div>
    </motion.div>
  );
}
