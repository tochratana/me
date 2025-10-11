import React from "react";
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const Header: React.FC = () => {
  return (
    <header className="left-0 right-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-sm"
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
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-sm"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-sm"
            >
              Projects
            </Link>
            <Link
              href="/talks"
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-sm"
            >
              Talks
            </Link>
            <Link
              href="/sponsors"
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors text-sm"
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
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 00-10 10v5a5 5 0 005 5h1v-9H6v-1a6 6 0 1112 0v1h-2v9h1a5 5 0 005-5v-5A10 10 0 0012 2z" />
              </svg>
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="Camera"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="Code"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="Video"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button
              className="dark:text-white/60 dark:hover:text-white text-black/60 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
