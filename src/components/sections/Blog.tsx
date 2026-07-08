"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

export function Blog() {
  const { t } = useTranslation();
  const params = useParams<{ locale?: string }>();
  const locale = params.locale === "km" ? "km" : "en";

  return (
    <section id="blog" className="bg-[var(--site-page-bg)] px-4 py-20 text-foreground min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="mb-20 max-w-3xl">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-[color:var(--site-text)] leading-tight">
            {t("blog.titleStart") || "All of my "}{" "}
            <span style={{ color: "#6ee7b7" }}>
              {t("blog.titleHighlight") || "Technical Knowledge"}
            </span>{" "}
            {t("blog.titleEnd") || "in one place"}
          </h2>
          <p className="text-lg leading-relaxed text-[color:var(--site-muted-text)] md:text-xl">
            {t("blog.description") || "I'm obsessed with writing bad code. I'm also obsessed with writing. Here, I write about my experiences with code and the things I've learned along the way."}
          </p>
        </div>

        <div className="space-y-16">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group">
              {/* Content */}
              <div className="pl-6 md:pl-8 border-l border-[var(--site-card-border)]">
                <div className="mb-2 text-sm text-[color:var(--site-muted-text)]">
                  {post.date}
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[color:var(--site-text)] group-hover:text-[#6ee7b7] transition-colors">
                  <Link href={`/${locale}/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mb-6 text-base leading-relaxed text-[color:var(--site-muted-text)]">
                  {post.description}
                </p>
                <Link
                  href={`/${locale}/blog/${post.slug}`}
                  className="inline-block text-sm font-semibold text-[#6ee7b7] hover:underline"
                >
                  {t("blog.readMore") || "Read More"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
