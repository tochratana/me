import React from "react";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { BookOpenText, Camera, Github, Mic, TvMinimalPlay } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="left-0 right-0 z-50">
      <div className="mx-auto px-6 py-10 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black  text-sm"
        >
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
            <g mask="url(#mask0_634_3)">
              <path
                className="path1"
                d="M43.8252 39.3048C43.5 29 38 27 31 35.5C16.9959 58.4158 35 61 42.5 46C44.4559 42.5 45.5001 37 45.5001 37C44.8789 42.2731 43.8252 45.9801 43.8252 50C43.8252 56.6285 48 57.9 54.5 48.4C60.5 40.9 68.5 27.5 72 15.5C74.4792 7 70.5 4.5 64 16.5C55 31.5 50.7595 59 52.3 78C53.8038 96.5469 63 97.5 61 79.5C59.5082 66.0734 52 42.5 45.5001 33C48 38.5 57 52 65.5 58.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </Link>

        <div className="flex gap-10">
          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              href="/blog"
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-ml"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-ml"
            >
              Projects
            </Link>
            <Link
              href="/talks"
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-ml"
            >
              Talks
            </Link>
            <Link
              href="/sponsors"
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-ml"
            >
              Sponsors
            </Link>
          </nav>

          {/* Icon Actions */}
          <div className="flex items-center gap-4">
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="Podcast"
            >
              <Mic />
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="Camera"
            >
            <Camera />
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="Code"
            >
            <TvMinimalPlay />
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="Video"
            >
              <BookOpenText />
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github />
            </button>
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
