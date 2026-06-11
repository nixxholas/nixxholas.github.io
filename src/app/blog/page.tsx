import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { formatPostDate, getAllPosts } from "@/data/blog";
import { ArrowUpRightIcon, CalendarDaysIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Notes on software, startups, blockchains, investing, and the edges between them.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <section className="space-y-8">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit">
            Writing
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Notes from the workbench
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Longer-form writing on building products, blockchains, markets, and
            the occasional investment thesis.
          </p>
        </div>
      </BlurFade>
      {posts.length === 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        </BlurFade>
      ) : (
        <div className="space-y-4">
          {featuredPost && (
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <Link
                className="group block rounded-lg border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                href={`/blog/${featuredPost.slug.current}`}
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDaysIcon className="size-3.5" />
                  <time dateTime={featuredPost.publishedAt}>
                    {formatPostDate(featuredPost.publishedAt)}
                  </time>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight group-hover:underline">
                      {featuredPost.title}
                    </h2>
                    {featuredPost.excerpt && (
                      <p className="text-sm leading-6 text-muted-foreground">
                        {featuredPost.excerpt}
                      </p>
                    )}
                  </div>
                  <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </BlurFade>
          )}

          <div className="divide-y">
            {remainingPosts.map((post, id) => (
              <BlurFade
                delay={BLUR_FADE_DELAY * 3 + id * 0.05}
                key={post.slug.current}
              >
                <Link
                  className="group flex items-start justify-between gap-4 py-4"
                  href={`/blog/${post.slug.current}`}
                >
                  <div className="space-y-1">
                    <p className="font-medium tracking-tight group-hover:underline">
                      {post.title}
                    </p>
                    {post.excerpt && (
                      <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {post.excerpt}
                      </p>
                    )}
                    <time
                      className="block text-xs text-muted-foreground"
                      dateTime={post.publishedAt}
                    >
                      {formatPostDate(post.publishedAt)}
                    </time>
                  </div>
                  <ArrowUpRightIcon className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
