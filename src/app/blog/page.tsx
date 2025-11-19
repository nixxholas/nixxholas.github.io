import BlurFade from "@/components/magicui/blur-fade";
import { getAllPosts } from "@/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts.length === 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground">No posts yet. Check back soon!</p>
        </BlurFade>
      ) : (
        posts.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug.current}>
            <Link
              className="flex flex-col space-y-1 mb-4 group"
              href={`/blog/${post.slug.current}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight group-hover:underline">{post.title}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toDateString()}
                </p>
                {post.excerpt && (
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          </BlurFade>
        ))
      )}
    </section>
  );
}
