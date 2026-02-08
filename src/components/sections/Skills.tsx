"use client";

import { Sparkles, Server, Terminal } from "lucide-react";
import { useState } from "react";

const skillsData = {
  "Cloud & Infrastructure": [
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "Terraform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    },
  ],
  "Containers & Orchestration": [
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "Podman",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/podman/podman-original.svg",
    },
    {
      name: "Linux",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ],
  "CI/CD & Automation": [
    {
      name: "Jenkins",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    },
    {
      name: "GitHub Actions",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "GitLab CI/CD",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
    },
    {
      name: "Ansible",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    },
  ],
  // "Monitoring & Logging": [
  //   {
  //     name: "Prometheus",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
  //   },
  //   {
  //     name: "Grafana",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  //   },
  //   {
  //     name: "Elasticsearch",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
  //   },
  //   {
  //     name: "Nginx",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  //   },
  // ],
  "Backend & Scripting": [
    {
      name: "Spring Boot",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "Java",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
  ],
  // "Version Control & Databases": [
  //   {
  //     name: "Git",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  //   },
  //   {
  //     name: "PostgreSQL",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  //   },
  //   {
  //     name: "MongoDB",
  //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  //   },
  // ],
};

const learningSkills = [
  {
    name: "Service Mesh (Istio)",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "ArgoCD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Helm",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
            <Terminal size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              DevOps & Cloud Engineering
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building and automating scalable infrastructure with modern DevOps
            practices
          </p>
        </div>

        {/* Skills Categories - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Server size={14} className="text-primary" />
                </div>
                <span className="line-clamp-2">{category}</span>
              </h3>
              <div className="space-y-2">
                {skills.map((skill) => {
                  const isHovered =
                    hoveredSkill === `${category}-${skill.name}`;
                  return (
                    <div
                      key={skill.name}
                      className="group/item"
                      onMouseEnter={() =>
                        setHoveredSkill(`${category}-${skill.name}`)
                      }
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center gap-2 p-2 bg-background/50 rounded-md hover:bg-accent/50 transition-all duration-200">
                        <div className="w-7 h-7 flex items-center justify-center bg-primary/10 rounded-md group-hover/item:bg-white group-hover/item:shadow-md transition-all duration-300 overflow-hidden flex-shrink-0">
                          {isHovered ? (
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              className="w-5 h-5 object-contain"
                            />
                          ) : (
                            <div className="w-4 h-4 rounded bg-primary/50" />
                          )}
                        </div>
                        <span className="text-xs font-medium group-hover/item:text-primary transition-colors line-clamp-1">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        {/* <div className="bg-gradient-to-br from-card via-card to-primary/5 border border-border rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20">
              <Sparkles size={18} className="text-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">
                Currently Learning
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Expanding My Toolkit</h3>
            <p className="text-muted-foreground">
              Exploring cutting-edge technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto relative z-10">
            {learningSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="relative group/card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div
                      className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${skill.color} rounded-xl shadow-lg group-hover/card:scale-110 transition-transform duration-300`}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-10 h-10 object-contain brightness-0 invert"
                      />
                    </div>
                    <div>
                      <span className="font-semibold block mb-1">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-1 justify-center">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-muted-foreground">
                          In Progress
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
