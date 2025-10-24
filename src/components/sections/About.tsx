import { useState } from "react";
import Image from "next/image"; // ✅ for optimized image loading
import { BriefcaseBusiness, GraduationCap, MapPinned } from "lucide-react";

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
    <section id="about" className="py-20 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Get to know me beyond the code
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-8 sticky top-8 shadow-lg hover:shadow-xl transition-all">
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
                <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/project/me.JPG"
                    alt="Toch Ratana"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">
                Toch Ratana
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Full-Stack Developer
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl"><MapPinned /></span>
                  <span className="text-muted-foreground">
                    Phnom Penh, Cambodia
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl"><GraduationCap /></span>
                  <span className="text-muted-foreground">
                    Information Technology (Web Dev Focus)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-xl"><BriefcaseBusiness /></span>
                  <span className="text-muted-foreground">
                    2+ Years Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="lg:col-span-2">
            {/* Tab Buttons */}
            <div className="flex gap-2 mb-8 border-b border-border">
              {["story", "interests", "values"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab === "story"
                    ? "My Story"
                    : tab === "interests"
                    ? "Interests"
                    : "Values"}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === "story" && (
                <div className="space-y-6 animate-fadeIn">
                  <p className="text-lg leading-relaxed">
                    Hello! I&apos;m <b>Toch Ratana</b>, a passionate full-stack
                    developer who loves creating elegant, impactful digital
                    experiences. My journey began with curiosity about how
                    technology shapes our world, and that curiosity grew into a
                    lifelong passion for coding.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I enjoy transforming ideas into real, functional projects —
                    from e-learning platforms to e-commerce sites. My focus is
                    on writing clean, scalable code and crafting smooth user
                    experiences that inspire people.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Beyond coding, I enjoy sharing knowledge through social
                    media, making videos about my developer journey, and helping
                    others grow in tech. ✨
                  </p>
                  <div className="bg-secondary border border-border rounded-xl p-6 mt-8">
                    <h4 className="font-bold text-lg mb-2">Fun Fact</h4>
                    <p className="text-muted-foreground">
                      I once built a full e-commerce site solo — from UI to
                      backend API — just for fun and learning 🚀
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

        {/* CTA Section */}
        {/* <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s Work Together</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            Get In Touch
          </button>
        </div> */}

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
