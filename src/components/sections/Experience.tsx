"use client";

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
            status: "current",
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
            className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
        >
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-4 border border-blue-500/20">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-blue-400">
                            Professional Journey
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Experience
                    </h2>
                    <p className="text-slate-400 text-lg">
                        My professional journey and projects
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line with gradient */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-green-500" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative group">
                                {/* Timeline Dot with glow effect */}
                                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-slate-900 z-10 shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform duration-300" />

                                {/* Content Card */}
                                <div className="md:ml-20">
                                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group-hover:translate-x-2">
                                        {/* Status badge for current position */}
                                        {exp.status === "current" && (
                                            <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full mb-4">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                <span className="text-xs font-medium text-green-400">
                                                    Currently Active
                                                </span>
                                            </div>
                                        )}

                                        {/* Header Section */}
                                        <div className="mb-4">
                                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                                                {exp.position}
                                            </h3>
                                            <p className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                                                {exp.company}
                                            </p>

                                            {/* Info Grid */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>{exp.period}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span>{exp.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-400">
                                                    <span className="text-slate-500">•</span>
                                                    <span>{exp.locationType}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        {exp.description && (
                                            <p className="text-slate-300 mb-4 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        )}

                                        {/* Technologies */}
                                        {exp.technologies && (
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs font-medium text-slate-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
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

                {/* Pipeline flow indicator at bottom */}
                <div className="flex justify-center mt-12 gap-2 opacity-30">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
            </div>
        </section>
    );
}