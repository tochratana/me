"use client";

import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const params = useParams<{ locale?: string }>();
  const locale = params.locale === "km" ? "km" : "en";
  const localePath = (path: string) =>
    path === "/" ? `/${locale}` : `/${locale}${path}`;

  const footerLinks = [
    { label: t("header.about"), href: localePath("/about") },
    { label: t("header.skills"), href: localePath("/skills") },
    { label: t("header.projects"), href: localePath("/projects") },
    { label: t("header.contact"), href: localePath("/contact") },
  ];

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
    <footer className="border-t border-[#2C2E33] bg-[#1A1B1E] px-4 py-4 text-[#C1C2C5]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
        
        {/* Logo/Name */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#339AF0] text-sm font-bold text-white">
            R
          </div>
          <span className="text-lg font-bold text-white">Toch Ratana</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium md:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2C2E33] text-[#C1C2C5] transition-colors hover:bg-[#3B3E45] hover:text-white"
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
