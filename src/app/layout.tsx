import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/components/theme/ThemeWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toch Ratana - Full Stack Developer",
  description:
    "Portfolio of Toch Ratana, a passionate Full Stack Developer skilled in Next.js, Tailwind CSS, and Spring Boot. Explore projects, skills, and contact info.",
  keywords: [
    "Toch Ratana",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Tailwind CSS",
    "Spring Boot",
    "Portfolio",
    "Cambodia Developer",
    "Web Developer",
  ],
  authors: [{ name: "Toch Ratana", url: "https://tochratana.com" }],
  openGraph: {
    title: "Toch Ratana - Full Stack Developer",
    description:
      "Showcasing Toch Ratana’s web development projects, skills, and experiences.",
    url: "https://tochratana.com",
    siteName: "Toch Ratana Portfolio",
    images: [
      {
        url: "https://tochratana.com/og-image.jpg", // (Optional) upload a nice preview image to your public folder
        width: 1200,
        height: 630,
        alt: "Toch Ratana Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toch Ratana - Full Stack Developer",
    description:
      "Portfolio of Toch Ratana, a Full Stack Developer specializing in modern web technologies.",
    creator: "@tochratana", // optional if you have Twitter
    images: ["https://tochratana.com/og-image.jpg"],
  },
  metadataBase: new URL("https://tochratana.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="safoFDvc9jfRIVoNCZSIIeXGIs7zJm7fkJZplWac8J0"
        />
      </head>
      <body className={inter.className}>
        <ThemeWrapper>{children}</ThemeWrapper>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
