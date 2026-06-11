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
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface InvestmentCardProps {
  name: string;
  logoUrl: string;
  description: string;
  status?: string;
  badges: readonly string[];
  shortIntro: string;
  blogPostSlug?: string;
  href?: string;
}

export function InvestmentCard({
  name,
  logoUrl,
  description,
  status,
  badges,
  shortIntro,
  blogPostSlug,
  href,
}: InvestmentCardProps) {
  const isWrittenOff = status === "written_off";

  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-xl",
        isWrittenOff && "border-dashed opacity-80"
      )}
    >
      <Link
        href={href || "#"}
        target="_blank"
        rel="noreferrer"
        className="group block cursor-pointer"
      >
        <CardHeader className="flex flex-row items-center gap-4 p-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-sm border bg-background p-1">
            <Image
              src={logoUrl}
              alt={name}
              width={40}
              height={40}
              className="max-h-full max-w-full rounded-sm object-contain"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <CardTitle className="text-base">{name}</CardTitle>
              {isWrittenOff && (
                <Badge
                  variant="outline"
                  className="border-amber-300 bg-amber-50 px-2 py-0 text-[10px] text-amber-800 dark:border-amber-900/70 dark:bg-amber-950/40 dark:text-amber-300"
                >
                  Written off
                </Badge>
              )}
            </div>
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
          <Link
            href={`/blog/${blogPostSlug}`}
            className="flex items-center text-xs font-semibold text-muted-foreground hover:text-foreground"
          >
            Read Thesis
            <ChevronRightIcon className="size-4 ml-0.5" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
