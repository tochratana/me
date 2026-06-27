"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
          <h1 className="mb-6 text-[length:var(--font-size-hero-title)] font-bold leading-[var(--line-height-hero-title)] text-foreground">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("hero.greeting")}
            </span>
          </h1>

          <div className="h-16 mb-6">
            <p className="text-[length:var(--font-size-hero-subtitle)] leading-[var(--line-height-hero-subtitle)] text-muted-foreground transition-all duration-500">
              <span className="text-primary font-semibold">
                {t("hero.title")}
              </span>
            </p>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
