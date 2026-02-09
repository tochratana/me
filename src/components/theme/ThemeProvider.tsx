"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check if there's a theme stored in localStorage
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    // Check if the system prefers dark mode
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    // Use stored theme if available, otherwise use system preference
    const initialTheme = storedTheme || systemTheme;

    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    // Update the DOM whenever theme changes
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => {
  //     const newTheme = prevTheme === "light" ? "dark" : "light";
  //     localStorage.setItem("theme", newTheme);
  //     return newTheme;
  //   });
  // };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      console.log("Theme changing from", prevTheme, "to", newTheme); // Add this
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
