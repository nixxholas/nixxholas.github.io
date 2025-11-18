import { getInvestments, getInvestment } from "@/data/investments";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const investments = await getInvestments();
  return investments.map((investment) => ({ slug: investment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let investment = await getInvestment(params.slug);

  let {
    company: title,
    investedAt: publishedTime,
    description,
    logo: image,
  } = investment.metadata;
  let ogImage = image
    ? `${DATA.url}${image}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title: `${title} - Angel Investment`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/investments/${investment.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Investment({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let investment = await getInvestment(params.slug);

  if (!investment) {
    notFound();
  }

  return (
    <section id="investment">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: investment.metadata.company,
            datePublished: investment.metadata.investedAt,
            description: investment.metadata.description,
            image: investment.metadata.logo
              ? `${DATA.url}${investment.metadata.logo}`
              : `${DATA.url}/og?title=${investment.metadata.company}`,
            url: `${DATA.url}/investments/${investment.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <div className="mb-8">
        <div className="flex items-start gap-4 mb-4">
          {investment.metadata.logo && (
            <div className="w-20 h-20 relative flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={investment.metadata.logo}
                alt={investment.metadata.company}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h1 className="title font-medium text-2xl tracking-tighter">
                {investment.metadata.company}
              </h1>
              <Badge variant="secondary">{investment.metadata.status}</Badge>
            </div>
            <p className="text-muted-foreground mb-2">
              {investment.metadata.description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm mb-4">
          <div>
            <span className="text-muted-foreground">Category: </span>
            <span>{investment.metadata.category}</span>
          </div>
          {investment.metadata.stage && (
            <div>
              <span className="text-muted-foreground">Stage: </span>
              <span>{investment.metadata.stage}</span>
            </div>
          )}
          <div>
            <Suspense fallback={<p className="h-5" />}>
              <span className="text-muted-foreground">Invested: </span>
              <span>{formatDate(investment.metadata.investedAt)}</span>
            </Suspense>
          </div>
        </div>
        {investment.metadata.website && (
          <Button asChild variant="outline" size="sm">
            <Link
              href={investment.metadata.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </Link>
          </Button>
        )}
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: investment.source }}
      ></article>
    </section>
  );
}
