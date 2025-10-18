"use client";

import { ThemeProvider } from "./ThemeProvider";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
