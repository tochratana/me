"use client";

import { Server, GitBranch, Workflow, Cloud, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [pipelineStep, setPipelineStep] = useState(0);

  const titles = [
    "DevOps Engineer",
    "Cloud Architect",
    "Infrastructure Specialist",
  ];
  const pipelineSteps = ["Build", "Test", "Deploy", "Monitor"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPipelineStep((prev) => (prev + 1) % pipelineSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [pipelineSteps.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-primary text-sm font-medium">
              System Status: Online
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Toch Ratana
            </span>
          </h1>

          <div className="h-16 mb-6">
            <p className="text-2xl md:text-3xl text-muted-foreground transition-all duration-500">
              A passionate{" "}
              <span className="text-primary font-semibold">
                {titles[currentTitle]}
              </span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Automating infrastructure, optimizing CI/CD pipelines, and building
            scalable cloud solutions. Let&apos;s streamline your deployment
            process.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
            >
              <Workflow size={20} />
              View Pipelines
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
            >
              <Terminal size={20} />
              Get In Touch
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex gap-2 mt-8 flex-wrap">
            {["Docker", "Kubernetes", "GCP", "Terraform", "Jenkins"].map(
              (tech, i) => (
                <div
                  key={tech}
                  className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium text-foreground hover:border-primary transition-colors"
                >
                  {tech}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Right side - Terminal visualization */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main terminal window */}
            <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
              {/* Window header */}
              <div className="bg-secondary px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer"></div>
                </div>
                <Terminal size={14} className="ml-2 text-muted-foreground" />
                <span className="text-xs text-muted-foreground ml-1 font-mono">
                  devops@pipeline:~$
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm bg-card min-h-[400px]">
                <div className="space-y-3">
                  {/* Command 1 */}
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-500">~</span>
                    <span className="text-foreground">kubectl get pods</span>
                    <span className="animate-pulse text-foreground">▊</span>
                  </div>
                  <div className="pl-4 text-xs space-y-1 text-foreground">
                    <div className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>frontend-deployment-7d9f8b6c5-x2k4p</span>
                      <span className="text-green-500">Running</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>backend-api-5c8d9e7f6-p9m3n</span>
                      <span className="text-green-500">Running</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-500">✓</span>
                      <span>database-6f9a8b5c4-k7j2h</span>
                      <span className="text-green-500">Running</span>
                    </div>
                  </div>

                  {/* Command 2 */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-500">~</span>
                    <span className="text-foreground">
                      docker-compose up -d
                    </span>
                  </div>
                  <div className="pl-4 text-xs text-blue-600 dark:text-blue-400 space-y-1">
                    <div>
                      Creating network "app_default" with driver "bridge"
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="animate-spin">⟳</span>
                      <span>Building containers...</span>
                    </div>
                    <div className="text-green-500">
                      ✓ Container app-web-1 Started
                    </div>
                  </div>

                  {/* Command 3 */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-green-500">➜</span>
                    <span className="text-blue-500">~</span>
                    <span className="text-foreground">
                      terraform apply -auto-approve
                    </span>
                  </div>
                  <div className="pl-4 text-xs text-purple-600 dark:text-purple-400 space-y-1">
                    <div className="text-yellow-600 dark:text-yellow-500">
                      ⚡ Terraform v1.6.0
                    </div>
                    <div className="text-foreground">
                      aws_instance.web: Creating...
                    </div>
                    <div className="text-foreground">
                      aws_instance.web: Still creating... [10s elapsed]
                    </div>
                    <div className="text-green-500">
                      ✓ Apply complete! Resources: 3 added, 0 changed, 0
                      destroyed.
                    </div>
                  </div>

                  {/* Pipeline status */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                      <Workflow size={12} />
                      CI/CD Pipeline Status:
                    </div>
                    <div className="flex gap-1">
                      {pipelineSteps.map((step, i) => (
                        <div
                          key={step}
                          className={`flex-1 h-2 rounded transition-all duration-500 ${
                            i === pipelineStep
                              ? "bg-blue-500 animate-pulse"
                              : i < pipelineStep
                                ? "bg-green-500"
                                : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-1 flex items-center gap-1">
                      <span className="animate-pulse">●</span>
                      {pipelineSteps[pipelineStep]} in progress...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div
              className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce flex items-center gap-1"
              style={{ animationDuration: "2s" }}
            >
              <Cloud size={15} /> CGP
            </div>

            <div
              className="absolute top-1/2 -left-4 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce flex items-center gap-1"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            >
              <Server size={15} /> K8s
            </div>

            <div
              className="absolute -bottom-4 right-8 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce flex items-center gap-1"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            >
              <GitBranch size={15} /> CI/CD
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
