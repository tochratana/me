import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Toch Ratana - Full Stack Developer",
    template: "%s | Toch Ratana",
  },
  description:
    "Hi, I'm Toch Ratana — a passionate Full Stack Developer skilled in Next.js, Tailwind CSS, and Spring Boot. Explore my portfolio, projects, and coding journey from Cambodia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
