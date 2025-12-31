"use client";

import {
    GraduationCap,
    Code2,
    Briefcase,
    PenTool,
} from "lucide-react";

export default function Experience() {
    const experiences = [
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
            color: "from-purple-500 to-pink-500",
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
            color: "from-green-500 to-emerald-500",
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
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 px-4 text-foreground"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
                    <p className="text-muted-foreground text-lg">
                        My professional journey and projects
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

                    {/* Experience Items */}
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative">
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 z-10" />

                                {/* Content Card */}
                                <div className="md:ml-20">
                                    <div className="rounded-2xl p-6 transition-all duration-300">
                                        {/* Header Section */}
                                        <div className="flex items-start gap-4 mb-4">

                                            {/* Company & Position Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl md:text-2xl font-bold mb-1 transition-colors">
                                                    {exp.position}
                                                </h3>
                                                <p className="text-lg font-semibold text-foreground/90 mb-2">
                                                    {exp.company}
                                                </p>
                                                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                                                    <span className="flex items-center gap-1">
                                                        <span>📅</span>
                                                        <span>{exp.period}</span>
                                                    </span>
                                                    <span>•</span>
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <span>📍</span>
                                                        <span>{exp.location}</span>
                                                    </span>
                                                    <span>•</span>
                                                    <span>{exp.locationType}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        {exp.description && (
                                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        )}

                                        {/* Technologies */}
                                        {exp.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-primary px-3 py-1 rounded-full text-xs font-medium transition-colors"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
