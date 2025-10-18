import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  const interests = [
    {
      icon: "💻",
      title: "Coding",
      description: "Building innovative solutions",
    },
    {
      icon: "🎨",
      title: "Design",
      description: "Creating beautiful interfaces",
    },
    { icon: "📚", title: "Learning", description: "Always exploring new tech" },
    { icon: "🚀", title: "Innovation", description: "Pushing boundaries" },
  ];

  const values = [
    { title: "Quality", description: "Writing clean, maintainable code" },
    { title: "Collaboration", description: "Working effectively in teams" },
    { title: "Growth", description: "Continuous learning and improvement" },
    { title: "Impact", description: "Building products that matter" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Get to know me beyond the code
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-8 sticky top-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">John Doe</h3>
              <p className="text-muted-foreground text-center mb-6">
                Full-Stack Developer
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl">📍</span>
                  <span className="text-muted-foreground">
                    San Francisco, CA
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl">🎓</span>
                  <span className="text-muted-foreground">
                    Computer Science
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl">💼</span>
                  <span className="text-muted-foreground">
                    3+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 border-b border-border">
              <button
                onClick={() => setActiveTab("story")}
                className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === "story"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                My Story
              </button>
              <button
                onClick={() => setActiveTab("interests")}
                className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === "interests"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Interests
              </button>
              <button
                onClick={() => setActiveTab("values")}
                className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                  activeTab === "values"
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                Values
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "story" && (
                <div className="space-y-6 animate-fadeIn">
                  <p className="text-lg leading-relaxed">
                    Hello! I&apos;m a passionate full-stack developer with a
                    love for creating elegant solutions to complex problems. My
                    journey in tech started during college when I built my first
                    web application, and I&apos;ve been hooked ever since.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Over the years, I&apos;ve worked on diverse projects ranging
                    from e-commerce platforms to real-time data visualization
                    tools. I believe in writing clean, maintainable code and
                    creating user experiences that delight.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community through blog
                    posts and tutorials.
                  </p>
                  <div className="bg-secondary border border-border rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-lg mb-2">Fun Fact</h4>
                    <p className="text-muted-foreground">
                      I&apos;ve contributed to over 50 open-source projects and
                      love helping others learn to code. Community is what makes
                      tech amazing! 🚀
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "interests" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                  {interests.map((interest, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-md transition-all duration-200"
                    >
                      <div className="text-4xl mb-4">{interest.icon}</div>
                      <h4 className="font-bold text-lg mb-2">
                        {interest.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {interest.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "values" && (
                <div className="space-y-4 animate-fadeIn">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg mb-2">
                            {value.title}
                          </h4>
                          <p className="text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            Get In Touch
          </button>
        </div>

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
