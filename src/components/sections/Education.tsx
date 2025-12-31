"use client";

import { useState } from "react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Royal University of Phnom Penh",
      location: "Phnom Penh, Cambodia",
      period: "2019 - 2023",
      duration: "4 years",
      focus: "Web Development & Software Engineering",
      achievements: [
        "Specialized in Full-Stack Web Development",
        "Completed multiple real-world projects",
        "Graduated with honors in Web Technologies",
      ],
      icon: "🎓",
      color: "from-blue-500 to-indigo-500",
      type: "degree",
    },
    {
      degree: "High School Diploma",
      institution: "Hun Sen High School",
      location: "Phnom Penh, Cambodia",
      period: "2016 - 2019",
      duration: "3 years",
      focus: "Science & Mathematics",
      achievements: [
        "Developed strong analytical thinking skills",
        "Participated in coding competitions",
        "Top student in Mathematics",
      ],
      icon: "📚",
      color: "from-green-500 to-teal-500",
      type: "degree",
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Web Development",
      provider: "Online Platform",
      date: "2022",
      skills: ["React", "Node.js", "MongoDB", "REST APIs"],
      icon: "💻",
      color: "from-purple-500 to-pink-500",
      type: "certification",
    },
    {
      title: "Advanced JavaScript",
      provider: "Udemy",
      date: "2021",
      skills: ["ES6+", "Async/Await", "Closures", "Prototypes"],
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      type: "certification",
    },
    {
      title: "UI/UX Design Fundamentals",
      provider: "Coursera",
      date: "2021",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      type: "certification",
    },
  ];

  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <section
      id="education"
      className="py-20 px-4 bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">
            My learning journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* Education Items */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content Card */}
                <div className="md:ml-20">
                  <div className="bg-card border border-border rounded-2xl p-6 transition-all duration-300">
                    {/* Header Section */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* Icon with gradient */}
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl md:text-3xl shrink-0`}
                      >
                        {edu.icon}
                      </div>

                      {/* Degree & Institution Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-foreground/90 mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground mb-2">
                          <span className="flex items-center gap-1">
                            <span>📅</span>
                            <span>{edu.period}</span>
                          </span>
                          <span>•</span>
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span>📍</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Focus */}
                    <p className="text-muted-foreground mb-4 italic">
                      Focus: {edu.focus}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1 shrink-0">✓</span>
                          <p className="text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Toggle */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowCertifications(!showCertifications)}
            className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-all duration-200 hover:shadow-md"
          >
            {showCertifications ? "Hide" : "View"} Certifications ({certifications.length})
          </button>
        </div>

        {/* Certifications Section */}
        {showCertifications && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4`}
                >
                  {cert.icon}
                </div>

                {/* Title & Provider */}
                <h3 className="text-xl font-bold mb-2 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium mb-1">{cert.provider}</p>
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.date}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Fade In Animation */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
}

