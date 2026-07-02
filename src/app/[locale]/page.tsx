"use client";

import { Contact } from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function LocalePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Skills />
      <Contact />
    </main>
  );
}
