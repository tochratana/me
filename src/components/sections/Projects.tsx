import { ExternalLink, Github, Server, Layers } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
    image: "/project/endora-dark.webp",
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
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses, file sharing, and video calls.",
    image: "/project/portfolio.png",
    tags: ["React", "WebRTC", "OpenAI", "Socket.io"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
            <Layers size={18} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg">
            A selection of my recent infrastructure and development work
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-blue-400/50 shadow-lg">
                  <Server size={12} />
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-200 group/btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} className="text-slate-300 group-hover/btn:text-white transition-colors" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-200 group/btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} className="text-slate-300 group-hover/btn:text-white transition-colors" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-slate-700/50 border border-slate-600 text-slate-300 rounded-full hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-700">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group/link"
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                      View Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors group/link"
                    >
                      <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Accent border animation */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <a
              href="#"
              className="group relative px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-300 rounded-xl font-medium hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>View All Projects</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Pipeline decoration */}
        <div className="mt-12 flex justify-center items-center gap-2 opacity-20">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <div className="w-12 h-0.5 bg-blue-500" />
          <div className="w-2 h-2 rounded-full bg-cyan-500" />
          <div className="w-12 h-0.5 bg-cyan-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
      </div>
    </section>
  );
}