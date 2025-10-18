import { useState } from "react";

const skillsData = {
  Frontend: [
    { name: "Next.js", icon: "⬢" },
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "CSS3", icon: "🎭" },
    { name: "HTML5", icon: "📄" },
  ],
  Backend: [
    { name: "Express.js", icon: "⚡" },
    { name: "Node.js", icon: "🟢" },
    { name: "Spring Boot", icon: "🍃" },
    { name: "Java", icon: "☕" },
    { name: "FastAPI", icon: "⚡" },
    { name: "Python", icon: "🐍" },
  ],
  Databases: [
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MySQL", icon: "🐬" },
    { name: "SQLite", icon: "📊" },
  ],
  "Tools & DevOps": [
    { name: "Google Cloud", icon: "☁️" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📌" },
    { name: "GitHub", icon: "🐙" },
    { name: "VS Code", icon: "💻" },
    { name: "IntelliJ IDEA", icon: "💡" },
  ],
};

const learningSkills = [
  { name: "Google Cloud", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "GitHub Actions", icon: "⚙️" },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I&apos;ve learned and used in my projects and
            studies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6">{category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-3 p-4 bg-card border border-border rounded-lg transition-all duration-200 cursor-pointer ${
                      hoveredSkill === skill.name
                        ? "border-primary shadow-md"
                        : "hover:border-primary/50 hover:shadow-sm"
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="text-center border-t border-border pt-12">
          <p className="text-muted-foreground mb-6 text-lg">
            Currently learning and expanding my skills in:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {learningSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
