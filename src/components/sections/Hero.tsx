import { Server, GitBranch, Boxes, Database, Cloud, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [terminalText, setTerminalText] = useState("");

  const titles = ["DevOps Engineer", "Backend Developer", "Cloud Architect", "Infrastructure Specialist"];
  const fullTerminalText = "$ kubectl get pods --all-namespaces\n$ docker-compose up -d\n$ terraform apply --auto-approve";

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
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullTerminalText.length) {
        setTerminalText(fullTerminalText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Animated background with grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5" />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating pipeline nodes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <div
          className={`transition-all duration-1000 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
            }`}
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/30 backdrop-blur-sm">
            <span className="text-blue-400 text-sm font-medium">
              ⚡ DevOps & Backend Engineering
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              Toch Ratana
            </span>
          </h1>

          <div className="h-16 mb-6">
            <p className="text-2xl md:text-3xl text-slate-300 transition-all duration-500">
              A passionate{" "}
              <span className="text-blue-400 font-semibold">
                {titles[currentTitle]}
              </span>
            </p>
          </div>

          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Building scalable cloud infrastructure and robust backend systems with Spring Boot,
            Kubernetes, Docker, and modern DevOps practices. Automating deployments and
            optimizing CI/CD pipelines.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50 font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-slate-800 text-slate-200 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-slate-700/50 font-medium border border-slate-700"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 backdrop-blur-sm">
              Spring Boot
            </span>
            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 backdrop-blur-sm">
              Kubernetes
            </span>
            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 backdrop-blur-sm">
              Docker
            </span>
            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 backdrop-blur-sm">
              Jenkins
            </span>
            <span className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-300 backdrop-blur-sm">
              AWS
            </span>
          </div>
        </div>

        {/* Right side - Terminal/Infrastructure showcase */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Terminal window */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
              {/* Window header */}
              <div className="bg-slate-800/80 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <Terminal size={14} className="text-slate-400 ml-2" />
                <span className="text-xs text-slate-400">terminal</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm min-h-[300px]">
                <div className="space-y-3">
                  <div className="text-green-400 whitespace-pre-wrap">
                    {terminalText}
                    <span className="animate-pulse">_</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <div className="text-slate-400">
                      <span className="text-cyan-400">const</span>{" "}
                      <span className="text-blue-400">engineer</span> = {"{"}
                    </div>
                    <div className="pl-4 text-slate-400">
                      name:{" "}
                      <span className="text-green-400">
                        &quot;Toch Ratana&quot;
                      </span>
                      ,
                    </div>
                    <div className="pl-4 text-slate-400">
                      role: <span className="text-green-400">&quot;DevOps Engineer&quot;</span>,
                    </div>
                    <div className="pl-4 text-slate-400">
                      stack: [
                    </div>
                    <div className="pl-8 text-green-400">
                      &quot;Spring Boot&quot;,
                    </div>
                    <div className="pl-8 text-green-400">
                      &quot;Kubernetes&quot;,
                    </div>
                    <div className="pl-8 text-green-400">
                      &quot;Docker&quot;,
                    </div>
                    <div className="pl-8 text-green-400">
                      &quot;CI/CD&quot;
                    </div>
                    <div className="pl-4 text-slate-400">],</div>
                    <div className="pl-4 text-slate-400">
                      focus:{" "}
                      <span className="text-green-400">&quot;Automation&quot;</span>
                    </div>
                    <div className="text-slate-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating tech icons */}
            <div
              className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-blue-500/50 animate-bounce flex items-center gap-2"
              style={{ animationDuration: "2s" }}
            >
              <Server size={16} /> Kubernetes
            </div>

            <div
              className="absolute top-1/3 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-green-500/50 animate-bounce flex items-center gap-2"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            >
              <GitBranch size={16} /> CI/CD
            </div>

            <div
              className="absolute bottom-12 -right-6 bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg shadow-cyan-500/50 animate-bounce flex items-center gap-2"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            >
              <Cloud size={16} /> Cloud
            </div>

            <div
              className="absolute -bottom-4 left-8 bg-slate-700 border border-slate-600 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-bounce flex items-center gap-2"
              style={{ animationDuration: "2.8s", animationDelay: "0.3s" }}
            >
              <Database size={16} /> Spring Boot
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline visualization at bottom */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-50">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
        </div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-green-500" />
        <div className="w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-cyan-500" />
        <div className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-slate-400"
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