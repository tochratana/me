import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(0);

  const titles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section className="min-h-screen flex items-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-pulse" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* TODO Left side - Text content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
            <span className="text-primary text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
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
            Crafting beautiful, functional, and user-centric digital experiences
            with modern web technologies. Let&apos;s build something amazing
            together.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          {/* <div className="flex gap-4 mt-8">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <span className="text-xl">💼</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <span className="text-xl">🐙</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
            >
              <span className="text-xl">🔗</span>
            </a>
          </div> */}
        </div>

        {/* Right side - Code/Tech showcase */}
        <div
          className={`relative transition-all duration-1000 delay-300   ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full max-w-lg mx-auto">
            {/* Main code window */}
            <div className="bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
              {/* Window header */}
              <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  portfolio.tsx
                </span>
              </div>

              {/* Code content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <div className="text-muted-foreground">
                    <span className="text-orange-500">const</span>{" "}
                    <span className="text-primary">developer</span> = {"{"}
                  </div>
                  <div className="pl-4 text-muted-foreground">
                    name:{" "}
                    <span className="text-green-500">
                      &quot;Toch Ratana&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4 text-muted-foreground">Role: [</div>
                  <div className="pl-8 text-green-500">
                    Full Stack Developer;,
                  </div>
                  <div className="pl-8 text-green-500">Frontend Developer;</div>
                  <div className="pl-8 text-green-500">Backend Developer;</div>
                  <div className="pl-8 text-green-500">Junior Developer</div>
                  <div className="pl-4 text-muted-foreground">],</div>
                  <div className="pl-4 text-muted-foreground">
                    passion:{" "}
                    <span className="text-green-500">&quot;Building&quot;</span>
                  </div>
                  <div className="text-muted-foreground">{"}"}</div>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div
              className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce"
              style={{ animationDuration: "2s" }}
            >
              ⚛️ React
            </div>

            <div
              className="absolute top-1/2 -left-4 bg-accent text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce"
              style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
            >
              🎨 Design
            </div>

            <div
              className="absolute -bottom-4 right-8 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce text-foreground"
              style={{ animationDuration: "3s", animationDelay: "1s" }}
            >
              💻 Code
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
