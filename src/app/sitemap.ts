import { MetadataRoute } from "next";

const siteUrl = "https://tochratana.com";
const locales = ["en", "km"] as const;
const routes = ["", "/about", "/skills", "/experience", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...locales.flatMap((locale) =>
      routes.map((route) => ({
        url: `${siteUrl}/${locale}${route}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: route === "" ? 0.9 : 0.8,
      })),
    ),
  ];
}
