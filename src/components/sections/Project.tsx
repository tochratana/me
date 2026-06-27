"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  };
  tags: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "ENDORA",
    description:
      "Endora is an automated backend generateion platform designed to help developers and small businesses build APIs faster, easier and more efficienly",
    image: {
      light: "/project/endora-light.webp",
      dark: "/project/endora-dark.webp",
    },
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "Spring Boot",
      "MongoDB",
      "Google Cloud",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "AUTONOMOUS - A8S",
    description:
      "A cloud-native deployment platform focused on automating application deployment, CI/CD workflows, container orchestration, infrastructure management, scalability, monitoring, security, and DevOps automation using modern cloud-native technologies.",
    image: {
      light: "/project/a8s-light.png",
      dark: "/project/a8s-dark.png",
    },
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind",
      "Spring Boot",
      "MongoDB",
      "Google Cloud",
    ],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="bg-[var(--site-page-bg)] px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold text-[color:var(--site-text)] md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-lg text-[color:var(--site-muted-text)]">
            A selection of my recent work
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <article
              key={index}
              className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
            >
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--site-muted-text)]">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-5 text-3xl font-extrabold text-[color:var(--site-text)] md:text-4xl">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-xl text-base leading-7 text-[color:var(--site-muted-text)] md:text-lg">
                  {project.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--site-chip-bg)] px-3 py-1 text-xs font-medium text-[color:var(--site-chip-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[var(--site-button-secondary-bg)] px-4 py-2 text-sm font-semibold text-[color:var(--site-button-secondary-text)] transition-colors hover:bg-[var(--site-button-secondary-hover-bg)]"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[var(--site-button-primary-bg)] px-4 py-2 text-sm font-semibold text-[color:var(--site-button-primary-text)] transition-colors hover:bg-[var(--site-button-primary-hover-bg)]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-lg border border-[var(--site-card-border)] bg-[var(--site-card-bg)] shadow-[0_24px_80px_var(--site-feature-shadow)]">
                <img
                  src={project.image[theme]}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
