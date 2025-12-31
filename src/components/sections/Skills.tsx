import {
  Code,
  Braces,
  Cloud,
  Github,
  GitBranch,
  Container,
  Terminal,
  Code2,
  Server,
  Cpu,
  Sparkles,
} from "lucide-react";

const skillsData = {
  Backend: [
    { name: "Spring Boot", icon: Server },
    { name: "Java", icon: Code2 },
    { name: "FastAPI", icon: Terminal },
    { name: "Python", icon: Braces },
  ],
  "Tools & DevOps": [
    { name: "Google Cloud", icon: Cloud },
    { name: "GitHub Actions", icon: GitBranch },
    { name: "Docker", icon: Container },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github }
  ],
};

const learningSkills = [
  { name: "Google Cloud", icon: Cloud },
  { name: "Docker", icon: Container },
  { name: "GitHub Actions", icon: GitBranch },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I&apos;ve learned and used in my projects and studies.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-6">{category}</h3>
              <div className="space-y-3">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-background/50 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                        <Icon size={22} className="text-primary" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles size={18} className="text-primary" />
              <span className="text-sm font-semibold text-primary">
                Currently Learning
              </span>
            </div>
            <p className="text-muted-foreground">
              Expanding my skills and exploring new technologies
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {learningSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-background/50 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}