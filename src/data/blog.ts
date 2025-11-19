// src/data/blog.ts
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import type { SanityPost } from "@/types/sanity";

// Lightweight query for blog list - only fetch what we display
export async function getAllPosts(): Promise<
  Pick<SanityPost, "_id" | "title" | "slug" | "publishedAt" | "mainImage" | "excerpt">[]
> {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "mainImage": mainImage.asset->url,
    }`,
    {},
    {
      // Enable caching for better performance
      cache: "force-cache",
      next: { tags: ["posts"] },
    }
  );
}

// Full query for individual post page
export async function getPost(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      "mainImage": mainImage.asset->url,
      body,
    }`,
    { slug },
    {
      // Enable caching for better performance
      cache: "force-cache",
      next: { tags: [`post:${slug}`] },
    }
  );
}