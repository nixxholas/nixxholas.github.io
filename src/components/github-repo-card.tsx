import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatRepoDate, type GitHubRepo } from "@/data/github";
import { cn } from "@/lib/utils";
import {
  ArchiveIcon,
  CalendarDaysIcon,
  ExternalLinkIcon,
  GitForkIcon,
  StarIcon,
} from "lucide-react";
import Link from "next/link";

type GitHubRepoCardProps = {
  repo: GitHubRepo;
  compact?: boolean;
};

export function GitHubRepoCard({ repo, compact }: GitHubRepoCardProps) {
  const visibleTags = repo.tags.slice(0, compact ? 4 : 6);

  return (
    <Card className="flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className={cn("gap-3 p-4", compact && "p-3")}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 space-y-1">
            <CardTitle className="text-base leading-6">
              <Link
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex max-w-full items-center gap-1.5 hover:underline"
              >
                <span className="truncate">{repo.name}</span>
                <ExternalLinkIcon className="size-3.5 shrink-0 text-muted-foreground" />
              </Link>
            </CardTitle>
            <p className="truncate text-xs text-muted-foreground">
              {repo.fullName}
            </p>
          </div>
          <Badge
            variant="outline"
            className={cn(
              "shrink-0 px-2 py-0 text-[10px]",
              repo.isFork && "border-dashed text-muted-foreground"
            )}
          >
            {repo.isFork ? "Fork" : "Original"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className={cn("flex-1 px-4 pb-3 pt-0", compact && "px-3")}>
        <p
          className={cn(
            "text-sm leading-6 text-muted-foreground",
            compact && "line-clamp-3"
          )}
        >
          {repo.explanation}
        </p>
      </CardContent>
      <CardFooter className={cn("flex-col items-stretch gap-3 p-4 pt-0", compact && "p-3 pt-0")}>
        <div className="flex flex-wrap gap-1">
          {visibleTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-2 py-0 text-[10px]"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <StarIcon className="size-3.5" />
            {repo.stars}
          </span>
          <span className="inline-flex items-center gap-1">
            <GitForkIcon className="size-3.5" />
            {repo.forks}
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDaysIcon className="size-3.5" />
            {formatRepoDate(repo.pushedAt)}
          </span>
          {repo.isArchived && (
            <span className="inline-flex items-center gap-1">
              <ArchiveIcon className="size-3.5" />
              Archived
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
