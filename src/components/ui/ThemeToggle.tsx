"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const ThemeToggle = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    setMounted(true);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current || !mounted) return;

    const doToggle = () => {
      flushSync(() => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        if (newTheme) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }

        try {
          localStorage.setItem("theme", newTheme ? "dark" : "light");
        } catch {
          // ignore
        }
      });
    };

    if (typeof document.startViewTransition === "function") {
      try {
        await document.startViewTransition(() => {
          doToggle();
        }).ready;
      } catch {
        doToggle();
      }
    } else {
      doToggle();
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }, [isDark, duration, mounted]);

  if (!mounted) {
    return (
      <button
        className={`rounded-full transition-colors duration-200 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white z-50 ${
          className || ""
        }`}
        disabled
        {...props}
      >
        <Moon className="w-7 h-7" />
      </button>
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white z-50 ${
        className || ""
      }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      {...props}
    >
      {isDark ? <Sun className="w-7 h-7" /> : <Moon className="w-7 h-7" />}
    </button>
  );
};
