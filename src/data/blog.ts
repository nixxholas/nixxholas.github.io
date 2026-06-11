import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import type { SanityPost } from "@/types/sanity";

export function formatPostDate(date: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Undated";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsedDate);
}

export async function getAllPosts(): Promise<
  Pick<
    SanityPost,
    "_id" | "title" | "slug" | "publishedAt" | "mainImage" | "excerpt"
  >[]
> {
  return client.fetch(
    groq`*[
      _type == "post" &&
      defined(slug.current) &&
      defined(publishedAt)
    ] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "mainImage": mainImage.asset->url,
    }`,
    {},
    {
      cache: "no-store",
    }
  );
}

export async function getPost(slug: string): Promise<SanityPost | null> {
  return client.fetch(
    groq`*[
      _type == "post" &&
      slug.current == $slug &&
      defined(publishedAt)
    ][0] {
      _id,
      _type,
      title,
      slug,
      excerpt,
      publishedAt,
      "mainImage": mainImage.asset->url,
      body,
    }`,
    { slug },
    {
      cache: "no-store",
    }
  );
}
