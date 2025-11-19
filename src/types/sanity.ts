// src/types/sanity.ts
import type { PortableTextBlock } from "@portabletext/types";

export interface SanitySlug {
  _type: "slug";
  current: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface SanityAuthor {
  _id: string;
  _type: "author";
  name: string;
  image?: SanityImage;
}

export interface SanityCategory {
  _id: string;
  _type: "category";
  title: string;
  description?: string;
}

export interface SanityPost {
  _id: string;
  _type: "post";
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  publishedAt: string;
  mainImage?: string; // This will be the resolved URL from the query
  author?: SanityAuthor;
  categories?: SanityCategory[];
  body: PortableTextBlock[];
}
