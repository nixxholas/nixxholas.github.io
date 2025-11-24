"use client";

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";
import { getPost } from "@/data/blog";
import type { SanityPost } from "@/types/sanity";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/components/portable-text";
import { ChevronRightIcon, Loader2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface InvestmentCardProps {
  name: string;
  logoUrl: string;
  description: string;
  badges: readonly string[];
  shortIntro: string;
  blogPostSlug?: string;
  href?: string;
}

export function InvestmentCard({
  name,
  logoUrl,
  description,
  badges,
  shortIntro,
  blogPostSlug,
  href,
}: InvestmentCardProps) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [post, setPost] = React.useState<SanityPost | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (blogPostSlug) {
      e.preventDefault();
      if (isExpanded) {
        setIsExpanded(false);
        return;
      }

      setIsExpanded(true);
      if (!post) {
        setIsLoading(true);
        const fetchedPost = await getPost(blogPostSlug);
        setPost(fetchedPost);
        setIsLoading(false);
      }
    }
  };

  return (
    <Card className="flex flex-col overflow-hidden border transition-all duration-300 ease-out h-full hover:shadow-xl hover:-translate-y-1">
      <Link
        href={href || "#"}
        target="_blank"
        className="block cursor-pointer group"
      >
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <Image
            src={logoUrl}
            alt={name}
            width={40}
            height={40}
            className="rounded-sm"
          />
          <div className="flex-1">
            <CardTitle className="text-base flex items-center">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 text-sm text-muted-foreground">
          <p className="border-l-2 border-border pl-4 italic">{shortIntro}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0 mt-auto flex justify-between items-center">
        <div className="flex flex-wrap gap-1">
          {badges.map((badge) => (
            <Badge
              key={badge}
              variant="secondary"
              className="px-2 py-1 text-[10px] font-semibold"
            >
              {badge}
            </Badge>
          ))}
        </div>
        {blogPostSlug && (
          <button
            onClick={handleClick}
            className="flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            Read Thesis
            <ChevronRightIcon
              className={cn(
                "size-4 translate-x-0 transform transition-all duration-300 ease-out",
                isExpanded ? "rotate-90" : "rotate-0"
              )}
            />
          </button>
        )}
      </CardFooter>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <CardContent className="p-4 pt-0">
          {isLoading && (
            <div className="flex items-center justify-center">
              <Loader2Icon className="animate-spin" />
            </div>
          )}
          {post && (
            <article className="prose dark:prose-invert max-w-none">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </article>
          )}
        </CardContent>
      </motion.div>
    </Card>
  );
}
