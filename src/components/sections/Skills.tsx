import { useState } from "react";
import {
  Hexagon,
  Code,
  Braces,
  Database,
  Cloud,
  Github,
  GitBranch,
  Container,
  Terminal,
  Coffee,
  Leaf,
  Palette,
  Globe,
  Layers,
  Cpu,
} from "lucide-react";

const skillsData = {
  Frontend: [
    { name: "Next.js", icon: <Hexagon size={26} /> },
    { name: "React", icon: <Code size={26} /> },
    { name: "TypeScript", icon: <Braces size={26} /> },
    { name: "JavaScript", icon: <Braces size={26} /> },
    { name: "Tailwind CSS", icon: <Palette size={26} /> },
    { name: "CSS3", icon: <Layers size={26} /> },
    { name: "HTML5", icon: <Globe size={26} /> },
  ],
  Backend: [
    { name: "Express.js", icon: <Terminal size={26} /> },
    { name: "Node.js", icon: <Cpu size={26} /> },
    { name: "Spring Boot", icon: <Leaf size={26} /> },
    { name: "Java", icon: <Coffee size={26} /> },
    { name: "FastAPI", icon: <Terminal size={26} /> },
    { name: "Python", icon: <Braces size={26} /> },
  ],
  Databases: [
    { name: "MongoDB", icon: <Database size={26} /> },
    { name: "PostgreSQL", icon: <Database size={26} /> },
    { name: "MySQL", icon: <Database size={26} /> },
    { name: "SQLite", icon: <Database size={26} /> },
  ],
  "Tools & DevOps": [
    { name: "Google Cloud", icon: <Cloud size={26} /> },
    { name: "GitHub Actions", icon: <GitBranch size={26} /> },
    { name: "Docker", icon: <Container size={26} /> },
    { name: "Git", icon: <GitBranch size={26} /> },
    { name: "GitHub", icon: <Github size={26} /> },
    { name: "VS Code", icon: <Code size={26} /> },
    { name: "IntelliJ IDEA", icon: <Code size={26} /> },
  ],
};

const learningSkills = [
  { name: "Google Cloud", icon: <Cloud size={24} /> },
  { name: "Docker", icon: <Container size={24} /> },
  { name: "GitHub Actions", icon: <GitBranch size={24} /> },
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
                        ? "border-primary shadow-md scale-[1.02]"
                        : "hover:border-primary/50 hover:shadow-sm"
                    }`}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <span className="text-primary">{skill.icon}</span>
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
                <span className="text-primary">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
