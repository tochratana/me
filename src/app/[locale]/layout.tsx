import type { Metadata } from "next";
import "../globals.css";
import { ThemeWrapper } from "@/components/theme/ThemeWrapper";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/layout/Header";
import { I18nProvider } from "@/components/I18nProvider";

const siteTitle = "Toch Ratana - DevOps Engineer";
const siteDescription =
  "Toch Ratana is a DevOps Engineer in Cambodia focused on Kubernetes, Jenkins, GitOps, Docker, Linux, Argo CD, Terraform, Vault, Prometheus, and Grafana.";
const siteUrl = "https://tochratana.com";
const ogImage = `${siteUrl}/og-image.jpg`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Toch Ratana",
    "DevOps Engineer",
    "Cloud Engineer",
    "Kubernetes",
    "Jenkins",
    "GitOps",
    "Docker",
    "Linux",
    "Argo CD",
    "Terraform",
    "Vault",
    "Prometheus",
    "Grafana",
    "Portfolio",
    "Cambodia DevOps Engineer",
  ],
  authors: [{ name: "Toch Ratana", url: siteUrl }],
  creator: "Toch Ratana",
  publisher: "Toch Ratana",
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Toch Ratana",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Toch Ratana - DevOps Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@tochratana",
    creator: "@tochratana",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
    languages: {
      en: `${siteUrl}/en`,
      km: `${siteUrl}/km`,
    },
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "km" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "km" ? "km" : "en";

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* ✅ Google site verification */}
        <meta
          name="google-site-verification"
          content="safoFDvc9jfRIVoNCZSIIeXGIs7zJm7fkJZplWac8J0"
        />

        {/* ✅ Apply saved theme BEFORE React hydrates to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}else{document.documentElement.classList.remove("dark")}}catch(e){}})();`,
          }}
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
              jobTitle: "DevOps Engineer",
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

      <body>
        <I18nProvider locale={lang}>
          <ThemeWrapper>
            <Header />
            {children}
          </ThemeWrapper>
          <GoogleAnalytics />
        </I18nProvider>
      </body>
    </html>
  );
}
