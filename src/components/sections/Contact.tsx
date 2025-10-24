"use client";

import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // EmailJS integration
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-white dark:bg-black py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Let&apos;s Connect
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I&apos;m actively looking for opportunities to start my career in
            web development.
            <br />
            Let&apos;s discuss how I can contribute to your team!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Availability Card */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <svg
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Availability
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Job Search Status
                </h3>
                <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm font-medium rounded">
                  Actively Looking
                </span>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Available From
                </h3>
                <p className="text-gray-900 dark:text-white">Immediately</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  Preferred Roles
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm rounded">
                    Backend Developer
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm rounded">
                    Full-Stack Developer
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm rounded">
                    Frontend Developer
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm rounded">
                    Junior Developer
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  Work Preference
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm rounded">
                    On-site
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm rounded">
                    Remote
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white text-sm rounded">
                    Hybrid
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Ready to Make an Impact
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                I&apos;m excited to bring my passion for solving real-world
                problems and creating meaningful software solutions to your
                development team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 focus:border-blue-500 dark:focus:border-white focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-white/20 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 focus:border-blue-500 dark:focus:border-white focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-white/20 transition-all outline-none text-gray-900 dark:text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-900 dark:text-white"
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
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 focus:border-blue-500 dark:focus:border-white focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-white/20 transition-all outline-none resize-none text-gray-900 dark:text-white placeholder-gray-500"
                  placeholder="Tell me about the opportunity..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex-1 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {status === "idle" && "Send Email"}
                  {status === "sending" && "Sending..."}
                  {status === "sent" && "✓ Message Sent!"}
                  {status === "error" && "Failed - Try Again"}
                </button>

                <button
                  type="button"
                  className="px-6 py-4 bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all duration-300"
                >
                  Download Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
