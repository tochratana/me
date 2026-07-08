"use client";

import { Facebook, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/tochratana",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tochratana",
      icon: Linkedin,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/tochratana.me",
      icon: Facebook,
    },
  ];

  return (
    <footer className="border-t border-border bg-background px-4 py-4 text-muted-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
        
        {/* Logo/Name */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-foreground">TOCH RATANA</span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Toch Ratana. {t("footer.rights") || "All rights reserved"}
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors hover:bg-[#6ee7b7] hover:text-black"
                aria-label={link.label}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}
