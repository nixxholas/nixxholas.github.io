import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";

interface Props {
  company: string;
  description: string;
  investedAt: string;
  logo?: string;
  website?: string;
  category: string;
  status: "Active" | "Exited" | "Acquired" | "IPO";
  stage?: string;
  className?: string;
}

export function InvestmentCard({
  company,
  description,
  investedAt,
  logo,
  website,
  category,
  status,
  stage,
  className,
}: Props) {
  const CardWrapper = website ? Link : "div";
  const wrapperProps = website
    ? { href: website, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full",
        className
      )}
    >
      <CardWrapper
        {...wrapperProps}
        className={cn("block", website && "cursor-pointer")}
      >
        {logo && (
          <div className="relative h-40 w-full bg-muted flex items-center justify-center">
            <Image
              src={logo}
              alt={company}
              width={200}
              height={160}
              className="object-contain p-4 max-h-40"
            />
          </div>
        )}
      </CardWrapper>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="mt-1 text-base">{company}</CardTitle>
            <Badge
              variant={
                status === "Active"
                  ? "default"
                  : status === "Exited" || status === "IPO"
                  ? "secondary"
                  : "outline"
              }
              className="text-[10px] px-2 py-0 flex-shrink-0"
            >
              {status}
            </Badge>
          </div>
          <time className="font-sans text-xs text-muted-foreground">
            {investedAt}
          </time>
          <p className="text-pretty font-sans text-xs text-muted-foreground line-clamp-3">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        <div className="flex flex-wrap gap-1">
          <Badge className="px-2 py-0 text-[10px]" variant="secondary">
            {category}
          </Badge>
          {stage && (
            <Badge className="px-2 py-0 text-[10px]" variant="secondary">
              {stage}
            </Badge>
          )}
        </div>
      </CardContent>
      {website && (
        <CardFooter className="px-2 pb-2">
          <Link href={website} target="_blank" rel="noopener noreferrer">
            <Badge className="flex gap-2 px-2 py-1 text-[10px]">
              <Icons.globe className="size-3" />
              Website
            </Badge>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
}
