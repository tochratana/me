"use client";
import "@/app/globals.css"; // Ensure global styles are applied

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CalendarDays, MapPin } from "lucide-react";

export default function About() {
  const { t } = useTranslation();

  const experiences = [
    {
      company: "Endora",
      companyShort: "Endora",
      position: "IT Professional",
      duration: "6 mos",
      period: "Jul 2025 - Present",
      location: "Phnom Penh, Cambodia",
      locationType: "On-site",
      description:
        "Endora is a developer-focused platform designed to generate and manage APIs efficiently. It helps developers quickly create RESTful APIs for different applications — reducing repetitive backend development work.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "API Design"],
    },
    {
      company: "Endora",
      companyShort: "Endora",
      position: "Full-Stack Developer",
      duration: "6 mos",
      period: "Jul 2025 - Present",
      location: "Phnom Penh, Cambodia",
      locationType: "On-site",
      description:
        "Endora is a developer-focused platform designed to generate and manage APIs efficiently. It helps developers quickly create RESTful APIs for different applications — reducing repetitive backend development work.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "API Design"],
    },
    {
      company: "FluentFlow",
      companyShort: "FluentFlow",
      position: "Foundation",
      duration: "2 months",
      period: "Oct 2024 - Oct 2025",
      location: "Phnom Penh, Cambodia",
      locationType: "On-site",
      description:
        "JobSeek is a modern job portal web application designed to connect job seekers with employers. It allows users to search, apply, and post jobs easily while providing companies a platform to find the right candidates.",
      technologies: ["React", "Next.js", "MongoDB", "Express", "REST APIs"],
    },
    {
      company: "Service Listing",
      companyShort: "Service Listing",
      position: "Pre-University",
      duration: "1 month",
      period: "Dec 2025 - Jan 2026",
      location: "Phnom Penh, Cambodia",
      locationType: "On-site",
      description:
        "Service Listing is a platform that allows users to list and find services in their community. It's designed to give users an easy way to find and book services they need.",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    },
  ];

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
              Hey! I&apos;m <span style={{ color: "#6ee7b7" }}>{t("hero.greeting") || "Toch Ratana"}</span> and I&apos;m a {t("about.role") || "DevOps & Cloud Engineer"}.
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

        {/* Timeline Section */}
        <div className="mt-20">
          <p className="mb-10 text-lg text-muted-foreground">
            Here&apos;s a timeline of what I&apos;ve been upto
          </p>

          <div className="relative border-l-2 border-[#6ee7b7]/30 ml-3 md:ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                <div className="absolute left-[-9px] top-1.5 h-4 w-4 rounded-full border-2 border-[#6ee7b7] bg-background"></div>
                
                <h3 className="text-2xl font-bold mb-1 transition-colors">
                  {exp.position}
                </h3>
                
                <p className="text-lg font-semibold text-foreground/90 mb-2 flex items-center gap-2">
                  <span style={{ color: "#6ee7b7" }}>{exp.company}</span>
                </p>
                
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </span>
                  <span>•</span>
                  <span>{exp.duration}</span>
                  <span className="ml-2 flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </span>
                  <span>•</span>
                  <span>{exp.locationType}</span>
                </div>

                {exp.description && (
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                )}

                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-medium border border-[#6ee7b7]/20 text-[#6ee7b7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
