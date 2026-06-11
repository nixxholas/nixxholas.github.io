import {
  formatPostDate,
  getPost,
} from "@/data/blog";
import { DATA } from "@/data/resume";
import { portableTextComponents } from "@/components/portable-text";
import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, mainImage } = post;
  const ogImage = mainImage ?? `${DATA.url}${DATA.avatarUrl}`;

  return {
    title,
    description: post.excerpt ?? `A blog post by ${DATA.name}`,
    openGraph: {
      title,
      description: post.excerpt ?? `A blog post by ${DATA.name}`,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug.current}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt ?? `A blog post by ${DATA.name}`,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <Link
        href="/blog"
        className="mb-8 flex items-center text-sm text-muted-foreground transition-all hover:text-foreground"
      >
        <ArrowLeftIcon className="mr-1 size-4" />
        Back to blog
      </Link>
      <header className="mb-10 max-w-[650px] space-y-3">
        <p className="text-sm text-muted-foreground">
          <time dateTime={post.publishedAt}>
            {formatPostDate(post.publishedAt)}
          </time>
        </p>
        <h1 className="title text-4xl font-bold tracking-tighter sm:text-5xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-lg leading-8 text-muted-foreground">
            {post.excerpt}
          </p>
        )}
      </header>
      <article className="prose max-w-[650px] dark:prose-invert prose-headings:tracking-tight prose-a:text-foreground prose-a:underline-offset-4">
        <PortableText value={post.body} components={portableTextComponents} />
      </article>
    </section>
  );
}
