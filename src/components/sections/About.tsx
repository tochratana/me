import { useState } from "react";
import { BriefcaseBusiness, GraduationCap, MapPinned } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Get to know me beyond the code
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Image and Info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                    src="/project/me.JPG"
                    alt="Toch Ratana"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>

            <h3 className="text-3xl font-bold mb-2">Toch Ratana</h3>
            <p className="text-muted-foreground mb-8 text-lg">Full-Stack Developer</p>

            <div className="space-y-4 w-full max-w-sm">
              <div className="flex items-center gap-3">
                <MapPinned className="text-primary" />
                <span className="text-muted-foreground">Phnom Penh, Cambodia</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="text-primary" />
                <span className="text-muted-foreground">
                  Information Technology (Web Dev Focus)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="text-primary" />
                <span className="text-muted-foreground">2+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side - Story Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I&apos;m a passionate web developer driven by the desire to solve
                real-world problems through technology. I believe that even
                small changes in code can create big impacts on people&apos;s daily
                lives, and that&apos;s what motivates me to write better software
                every day.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                What Drives Me
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I&apos;m fascinated by how technology can transform the way people
                work, learn, and connect. Whether it&apos;s building a backend
                service that powers thousands of users or creating an interface
                that makes someone&apos;s job easier, I find purpose in creating
                solutions that matter.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Beyond Coding
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When I&apos;m not coding, you can find me watching movies or
                listening to music. I find that these creative outlets help me
                think differently about problems and often inspire new
                approaches to the challenges I face in development.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 mt-8">
              <h4 className="font-bold text-lg mb-2 text-primary">
                Fun Fact
              </h4>
              <p className="text-muted-foreground">
                I once built a full e-commerce site solo — from UI to backend
                API — just for fun and learning 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}