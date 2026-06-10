import { GitHubRepoCard } from "@/components/github-repo-card";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import {
  getFeaturedRepositories,
  getPublicRepositories,
  getRepositoryStats,
} from "@/data/github";
import { DATA } from "@/data/resume";
import { ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Public GitHub repositories, experiments, forks, and technical archive for Nicholas Chen.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function OpenSourcePage() {
  const repos = await getPublicRepositories();
  const featuredRepos = getFeaturedRepositories(repos).slice(0, 6);
  const stats = getRepositoryStats(repos);

  return (
    <section className="space-y-10">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-3">
          <Badge variant="outline" className="w-fit">
            GitHub
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Open source workbench
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Public repositories, experiments, forks, and older project archives
            pulled from GitHub and annotated with the useful context.
          </p>
          <Link
            href={DATA.contact.social.GitHub.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            View GitHub profile
            <ArrowUpRightIcon className="ml-1 size-4" />
          </Link>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-lg border p-3">
            <p className="text-2xl font-semibold tracking-tight">
              {stats.total}
            </p>
            <p className="text-xs text-muted-foreground">public repos</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-2xl font-semibold tracking-tight">
              {stats.originals}
            </p>
            <p className="text-xs text-muted-foreground">originals</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-2xl font-semibold tracking-tight">
              {stats.forks}
            </p>
            <p className="text-xs text-muted-foreground">forks</p>
          </div>
          <div className="rounded-lg border p-3">
            <p className="text-2xl font-semibold tracking-tight">
              {stats.stars}
            </p>
            <p className="text-xs text-muted-foreground">stars</p>
          </div>
        </div>
      </BlurFade>

      {stats.languages.length > 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-wrap gap-1">
            {stats.languages.map(([language, count]) => (
              <Badge key={language} variant="secondary">
                {language} {count}
              </Badge>
            ))}
          </div>
        </BlurFade>
      )}

      <section className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="space-y-1">
            <h2 className="text-xl font-bold">Featured repositories</h2>
            <p className="text-sm text-muted-foreground">
              A small cut of repos with stronger portfolio signal or useful
              historical context.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {featuredRepos.map((repo, id) => (
            <BlurFade
              key={repo.fullName}
              delay={BLUR_FADE_DELAY * 5 + id * 0.03}
            >
              <GitHubRepoCard repo={repo} />
            </BlurFade>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <div className="space-y-1">
            <h2 className="text-xl font-bold">All public repositories</h2>
            <p className="text-sm text-muted-foreground">
              The complete public GitHub surface, including forks and older
              experiments.
            </p>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {repos.map((repo, id) => (
            <BlurFade
              key={repo.fullName}
              delay={BLUR_FADE_DELAY * 7 + Math.min(id, 8) * 0.02}
            >
              <GitHubRepoCard repo={repo} compact />
            </BlurFade>
          ))}
        </div>
      </section>
    </section>
  );
}
