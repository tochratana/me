"use client";

import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug } from "@/data/blog-posts";

export default function BlogDetailPage() {
  const { t } = useTranslation();
  const params = useParams<{ locale?: string; slug?: string }>();
  const locale = params.locale === "km" ? "km" : "en";
  const slug = params.slug || "";

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[var(--site-page-bg)] px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-[color:var(--site-text)]">
            Post not found
          </h1>
          <p className="mb-8 text-[color:var(--site-muted-text)]">
            Sorry, the blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-[#6ee7b7] hover:underline font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("blog.backToBlog") || "Back to Blog"}
          </Link>
        </div>
      </main>
    );
  }

  // Split content into paragraphs
  const paragraphs = post.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <main className="min-h-screen bg-[var(--site-page-bg)] px-4 py-20">
      <article className="mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[#6ee7b7] transition-colors hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("blog.backToBlog") || "Back to Blog"}
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 text-sm text-[color:var(--site-muted-text)]">
            {post.date}
          </div>
          <h1 className="text-3xl font-bold leading-tight text-[color:var(--site-text)] md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
        </header>

        {/* Cover image */}
        <div className="mb-10 overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            width={900}
            height={506}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="h-px w-full bg-[var(--site-card-border)] mb-10" />

        {/* Content */}
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-8 text-[color:var(--site-muted-text)] md:text-lg md:leading-9"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="mt-16 border-t border-[var(--site-card-border)] pt-8">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6ee7b7] transition-colors hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("blog.backToBlog") || "Back to Blog"}
          </Link>
        </div>
      </article>
    </main>
  );
}
