import { useState } from "react";
import { Mail, Download, Calendar, Briefcase } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const serviceID = "service_f9qgu4i";
      const templateID = "template_4p9s2bf";
      const publicKey = "sjbBj5W8oH4XRp3mW";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Toch Ratana",
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 relative overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-4 border border-blue-500/20">
            <Mail size={18} className="text-blue-400" />
            <span className="text-sm font-semibold text-blue-400">
              Get In Touch
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Let&apos;s Connect
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I&apos;m actively looking for opportunities to start my career in
            DevOps and backend development.
            <br />
            Let&apos;s discuss how I can contribute to your infrastructure team!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Availability Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Calendar size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Availability
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-3">
                  Job Search Status
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Actively Looking
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-3">
                  Available From
                </h3>
                <p className="text-white font-medium">Immediately</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-3">
                  Preferred Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200">
                    DevOps Engineer
                  </span>
                  <span className="px-3 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200">
                    Backend Developer
                  </span>
                  <span className="px-3 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200">
                    Cloud Engineer
                  </span>
                  <span className="px-3 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-blue-500/50 hover:text-blue-300 transition-all duration-200">
                    Infrastructure Engineer
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-slate-500 mb-3">
                  Work Preference
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200">
                    On-site
                  </span>
                  <span className="px-3 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200">
                    Remote
                  </span>
                  <span className="px-3 py-2 bg-slate-700/50 border border-slate-600 text-slate-300 text-sm rounded-lg hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200">
                    Hybrid
                  </span>
                </div>
              </div>

              {/* Tech Stack Highlight */}
              <div className="pt-6 border-t border-slate-700">
                <h3 className="text-sm font-semibold text-slate-500 mb-3">
                  Core Technologies
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    Spring Boot
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    Kubernetes
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    Docker
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    Google Cloud
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Ready to Make an Impact
              </h2>
              <p className="text-slate-400">
                I&apos;m excited to bring my passion for automation, infrastructure,
                and scalable backend solutions to your development team.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-white placeholder-slate-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none text-white placeholder-slate-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none resize-none text-white placeholder-slate-500"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === "sending"}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                >
                  <Mail size={20} />
                  {status === "idle" && "Send Email"}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "✓ Message Sent!"}
                  {status === "error" && "Failed - Try Again"}
                </button>

                <button
                  type="button"
                  className="px-6 py-4 bg-slate-700/50 border border-slate-600 text-slate-300 rounded-lg font-medium hover:bg-slate-600/50 hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Connection indicator */}
        <div className="flex justify-center items-center gap-3 opacity-30">
          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
          <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500" />
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </section>
  );
}