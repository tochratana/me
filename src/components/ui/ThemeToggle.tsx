"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { flushSync } from "react-dom";
import { useTheme } from "@/components/theme/ThemeProvider";

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number;
}

export const ThemeToggle = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  const { theme, toggleTheme: toggleThemeContext } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current || !mounted) return;

    const doToggle = () => {
      flushSync(() => {
        toggleThemeContext();
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
  }, [duration, mounted, toggleThemeContext]);

  if (!mounted) {
    return (
      <button
        className={`rounded-full bg-transparent text-[color:var(--header-text)] transition-colors duration-200 hover:bg-[var(--header-hover-bg)] hover:text-[color:var(--header-hover-text)] z-50 ${
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
      className={`flex items-center justify-center w-10 h-10 rounded-full bg-transparent text-[color:var(--header-text)] transition-colors duration-200 hover:bg-[var(--header-hover-bg)] hover:text-[color:var(--header-hover-text)] z-50 ${
        className || ""
      }`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      {...props}
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
