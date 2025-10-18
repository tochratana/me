import { useState } from "react";

export default function Education() {
  const [activeTab, setActiveTab] = useState("formal");

  const formalEducation = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Royal University of Phnom Penh",
      location: "Phnom Penh, Cambodia",
      period: "2019 - 2023",
      focus: "Web Development & Software Engineering",
      achievements: [
        "Specialized in Full-Stack Web Development",
        "Completed multiple real-world projects",
        "Graduated with honors in Web Technologies",
      ],
      icon: "🎓",
    },
    {
      degree: "High School Diploma",
      institution: "Hun Sen High School",
      location: "Phnom Penh, Cambodia",
      period: "2016 - 2019",
      focus: "Science & Mathematics",
      achievements: [
        "Developed strong analytical thinking skills",
        "Participated in coding competitions",
        "Top student in Mathematics",
      ],
      icon: "📚",
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Web Development",
      provider: "Online Platform",
      date: "2022",
      skills: ["React", "Node.js", "MongoDB", "REST APIs"],
      icon: "💻",
    },
    {
      title: "Advanced JavaScript",
      provider: "Udemy",
      date: "2021",
      skills: ["ES6+", "Async/Await", "Closures", "Prototypes"],
      icon: "⚡",
    },
    {
      title: "UI/UX Design Fundamentals",
      provider: "Coursera",
      date: "2021",
      skills: ["Figma", "User Research", "Wireframing", "Prototyping"],
      icon: "🎨",
    },
  ];

  // const skills = {
  //   technical: [
  //     "JavaScript/TypeScript",
  //     "React & Next.js",
  //     "Node.js & Express",
  //     "MongoDB & PostgreSQL",
  //     "Tailwind CSS",
  //     "Git & GitHub",
  //   ],
  //   soft: [
  //     "Problem Solving",
  //     "Team Collaboration",
  //     "Communication",
  //     "Time Management",
  //     "Critical Thinking",
  //     "Adaptability",
  //   ],
  // };

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

        {/* Tab Buttons */}
        <div className="flex gap-2 mb-12 border-b border-border justify-center">
          {["formal", "certifications"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
                activeTab === tab
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "formal"
                ? "Formal Education"
                : tab === "certifications"
                ? "Certifications"
                : "Skills"}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* Formal Education */}
          {activeTab === "formal" && (
            <div className="space-y-8 animate-fadeIn">
              {formalEducation.map((edu, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl">{edu.icon}</div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-primary font-medium">
                            {edu.institution}
                          </p>
                          <p className="text-muted-foreground text-sm mt-1">
                            📍 {edu.location}
                          </p>
                        </div>
                        <div className="bg-primary/10 px-4 py-2 rounded-lg mt-4 md:mt-0">
                          <p className="text-primary font-medium text-sm">
                            {edu.period}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        Focus: {edu.focus}
                      </p>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <p className="text-muted-foreground">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === "certifications" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium mb-1">
                    {cert.provider}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {/* {activeTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-2xl font-bold">Technical Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skills.technical.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-secondary border border-border rounded-lg p-3 hover:border-primary transition-all duration-200"
                    >
                      <p className="font-medium text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-2xl font-bold">Soft Skills</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skills.soft.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-secondary border border-border rounded-lg p-3 hover:border-primary transition-all duration-200"
                    >
                      <p className="font-medium text-sm">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )} */}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I&apos;m committed to continuous learning and staying updated with
            the latest technologies and best practices in web development.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200">
            View My Projects
          </button>
        </div>

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
