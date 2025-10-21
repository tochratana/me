import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "@/components/theme/ThemeWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Toch Ratana - Full Stack Developer",
    template: "%s | Toch Ratana",
  },
  description:
    "Hi, I'm Toch Ratana — a passionate Full Stack Developer skilled in Next.js, Tailwind CSS, and Spring Boot. Explore my portfolio, projects, and coding journey from Cambodia.",
  keywords: [
    "Toch Ratana",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Spring Boot",
    "Portfolio",
    "Cambodia Developer",
    "Web Developer",
  ],
  authors: [{ name: "Toch Ratana", url: "https://tochratana.com" }],
  creator: "Toch Ratana",
  publisher: "Toch Ratana",
  openGraph: {
    title: "Toch Ratana - Full Stack Developer",
    description:
      "Welcome to my personal portfolio — showcasing my web development projects, technical skills, and creative journey as a Full Stack Developer.",
    url: "https://tochratana.com",
    siteName: "Toch Ratana",
    images: [
      {
        url: "https://tochratana.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Toch Ratana - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tochratana",
    creator: "@tochratana",
    title: "Toch Ratana - Full Stack Developer",
    description:
      "Full Stack Developer skilled in Next.js, Tailwind CSS, and Spring Boot. Visit my portfolio to explore projects and experiences.",
    images: ["https://tochratana.com/og-image.jpg"],
  },
  metadataBase: new URL("https://tochratana.com"),
  alternates: {
    canonical: "https://tochratana.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Google site verification */}
        <meta
          name="google-site-verification"
          content="safoFDvc9jfRIVoNCZSIIeXGIs7zJm7fkJZplWac8J0"
        />

        {/* ✅ JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Toch Ratana",
              url: "https://tochratana.com",
              image: "https://tochratana.com/og-image.jpg",
              sameAs: [
                "https://github.com/tochratana",
                "https://www.linkedin.com/in/tochratana",
                "https://www.facebook.com/ratans",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Toch Ratana Portfolio",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Toch Ratana",
              alternateName: "Toch Ratana Portfolio",
              url: "https://tochratana.com",
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <Header />
        <ThemeWrapper>{children}</ThemeWrapper>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
