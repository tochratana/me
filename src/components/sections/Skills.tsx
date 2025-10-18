"use client";

import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

const skills: Skill[] = [
  { name: "React", level: 90, icon: "⚛️", category: "Frontend" },
  { name: "TypeScript", level: 85, icon: "📘", category: "Frontend" },
  { name: "Next.js", level: 88, icon: "▲", category: "Frontend" },
  { name: "Tailwind CSS", level: 92, icon: "🎨", category: "Frontend" },
  { name: "Node.js", level: 80, icon: "🟢", category: "Backend" },
  { name: "PostgreSQL", level: 75, icon: "🐘", category: "Backend" },
  { name: "MongoDB", level: 78, icon: "🍃", category: "Backend" },
  { name: "Docker", level: 70, icon: "🐳", category: "DevOps" },
];

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={`p-6 rounded-xl bg-card border border-border transition-all duration-300 ${
                  hoveredSkill === skill.name
                    ? "scale-101 shadow-2xl border-primary"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.category}
                </p>

                {/* Progress bar */}
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                    style={{
                      width:
                        hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-right">
                  {skill.level}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
