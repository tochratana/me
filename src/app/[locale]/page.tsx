"use client";

import About from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";

export default function LocalePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
