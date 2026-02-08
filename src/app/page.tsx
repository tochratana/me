"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      {/* <Education /> */}
      <Contact />
      <Footer />
    </main>
  );
}

