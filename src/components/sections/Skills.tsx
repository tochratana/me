"use client";

import { useTranslation } from "react-i18next";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Terminal, Cloud, Box, GitBranch, Code2, Database } from "lucide-react";

const skillsData = [
  {
    category: "Cloud & IaC",
    icon: Cloud,
    color: "#4F8EF7",
    skills: [
      {
        name: "Google Cloud",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "DigitalOcean",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg",
      },
      {
        name: "Terraform",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
    ],
  },
  {
    category: "Containers & Orchestration",
    icon: Box,
    color: "#2196F3",
    skills: [
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
  },
  {
    category: "CI/CD & Automation",
    icon: GitBranch,
    color: "#F97316",
    skills: [
      {
        name: "Jenkins",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      {
        name: "GitHub Actions",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        darkLogo: "https://cdn.simpleicons.org/github/ffffff",
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
  },
  {
    category: "Backend & Scripting",
    icon: Code2,
    color: "#22C55E",
    skills: [
      {
        name: "Spring Boot",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
    ],
  },
  {
    category: "Storage & Secrets",
    icon: Database,
    color: "#A855F7",
    skills: [
      {
        name: "MinIO",
        logo: "https://cdn.simpleicons.org/minio/C72E49",
      },
      {
        name: "Nextcloud",
        logo: "https://cdn.simpleicons.org/nextcloud/0082C9",
      },
      {
        name: "Owncloud",
        logo: "https://cdn.simpleicons.org/owncloud/555555",
        darkLogo: "https://cdn.simpleicons.org/owncloud/ffffff",
      },
      {
        name: "Vault",
        logo: "https://cdn.simpleicons.org/vault/FFCA28",
      },
    ],
  },
];

export default function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--hero-accent)]/10 rounded-full mb-4 border border-[var(--hero-accent)]/20">
            <Terminal size={18} className="text-[var(--hero-accent)]" />
            <span className="text-sm font-semibold text-[var(--hero-accent)]">
              DevOps & Cloud Engineering
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            {t("skills.heading")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </div>

        {/* Timeline pipeline */}
        <div className="flex flex-col">
          {skillsData.map(({ category, icon: Icon, color, skills }, index) => {
            const isLast = index === skillsData.length - 1;
            return (
              <div key={category} className="flex gap-6 group">
                {/* Left: timeline track */}
                <div
                  className="flex flex-col items-center flex-shrink-0"
                  style={{ width: "40px" }}
                >
                  {/* Dot node */}
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: color,
                        boxShadow: `0 0 0 4px ${color}33`,
                      }}
                    >
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Connector line to next item */}
                  {!isLast && (
                    <div
                      className="flex-1 w-0.5 my-2"
                      style={{
                        background: `linear-gradient(to bottom, ${color}99, ${color}22)`,
                        minHeight: "32px",
                      }}
                    />
                  )}
                </div>

                {/* Right: category content */}
                <div className={`flex-1 pb-12 ${isLast ? "pb-0" : ""}`}>
                  {/* Category label */}
                  <h3
                    className="text-base font-bold text-foreground mb-4 mt-1.5 transition-colors duration-200"
                    style={{ color: undefined }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = color)
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color = "")
                    }
                  >
                    {category}
                  </h3>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2.5">
                    {skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="rounded-md flex items-center gap-2.5 px-4 py-1 border hover:border-border transition-all duration-200 group/pill cursor-default"
                        style={{ ["--pill-color" as string]: color }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = `${color}99`;
                          el.style.backgroundColor = `${color}0D`;
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.borderColor = "";
                          el.style.backgroundColor = "";
                        }}
                      >
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                          <img
                            src={(isDark && skill.darkLogo) ? skill.darkLogo : skill.logo}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground/75 whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
