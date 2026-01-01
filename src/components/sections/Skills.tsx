import { Code, Cloud, GitBranch, Terminal, Server, Sparkles } from "lucide-react";

const skillsData = {
  Backend: [
    { name: "Spring Boot" },
    { name: "Java" },
    { name: "FastAPI" },
    { name: "Python" },
  ],
  "Tools & DevOps": [
    { name: "Google Cloud" },
    { name: "GitHub Actions" },
    { name: "Docker" },
    { name: "Git" },
    { name: "GitHub" }
  ],
};

const learningSkills = [
  { name: "Google Cloud" },
  { name: "Docker" },
  { name: "GitHub Actions" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            <Code size={18} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-lg">
            Technologies and tools I use to build scalable infrastructure
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  {category === "Backend" ? (
                    <Server size={20} className="text-white" />
                  ) : (
                    <Terminal size={20} className="text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-white">{category}</h3>
              </div>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl hover:bg-slate-700/50 transition-all duration-200 border border-transparent hover:border-blue-500/30 cursor-pointer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors border border-blue-500/20">
                      <Code size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-green-500/5 rounded-2xl blur-xl" />
          <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4 border border-cyan-500/30">
                <Sparkles size={18} className="text-cyan-400 animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Currently Learning
                </span>
              </div>
              <p className="text-slate-400">
                Expanding my skills and exploring new technologies
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {learningSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative"
                >
                  {/* Progress bar effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />

                  <div className="relative flex items-center gap-3 p-4 bg-slate-900/50 rounded-xl hover:bg-slate-700/50 transition-all duration-200 border border-slate-700 hover:border-cyan-500/50 cursor-pointer">
                    <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20 group-hover:scale-110 duration-300">
                      {skill.name === "Google Cloud" && <Cloud size={20} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />}
                      {skill.name === "Docker" && <Terminal size={20} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />}
                      {skill.name === "GitHub Actions" && <GitBranch size={20} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />}
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-slate-300 group-hover:text-white transition-colors block">
                        {skill.name}
                      </span>
                      <div className="w-full bg-slate-700 rounded-full h-1 mt-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"
                          style={{
                            width: `${60 + index * 10}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats footer */}
            <div className="mt-8 pt-6 border-t border-slate-700 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">9+</div>
                <div className="text-xs text-slate-500 mt-1">Technologies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">3</div>
                <div className="text-xs text-slate-500 mt-1">Currently Learning</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-xs text-slate-500 mt-1">Commitment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack visualization */}
        <div className="mt-12 flex justify-center items-center gap-3 flex-wrap opacity-30">
          {[...skillsData.Backend, ...skillsData["Tools & DevOps"]].map((skill, i) => (
            <div
              key={skill.name}
              className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Code size={16} className="text-slate-600" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}