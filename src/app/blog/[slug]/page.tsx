import { getAllPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portable-text";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = await getPost(slug);

  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, mainImage } = post;
  let ogImage = mainImage ? mainImage : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description: "A blog post by " + DATA.name,
    openGraph: {
      title,
      description: "A blog post by " + DATA.name,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug.current}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: "A blog post by " + DATA.name,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  let post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog">
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {new Date(post.publishedAt).toDateString()}
        </p>
      </div>
      <article className="prose dark:prose-invert max-w-[650px]">
        <PortableText value={post.body} components={portableTextComponents} />
      </article>
    </section>
  );
}
