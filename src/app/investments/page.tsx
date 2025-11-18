import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { getInvestments } from "@/data/investments";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Angel Investments",
  description: "Portfolio of angel investments and startup ventures.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function InvestmentsPage() {
  const investments = await getInvestments();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-2 tracking-tighter">
          angel investments
        </h1>
        <p className="text-muted-foreground mb-8">
          Companies and startups I've invested in
        </p>
      </BlurFade>
      <div className="grid grid-cols-1 gap-4">
        {investments
          .sort((a, b) => {
            if (
              new Date(a.metadata.investedAt) > new Date(b.metadata.investedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((investment, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 2 + id * 0.05}
              key={investment.slug}
            >
              <Link
                className="block p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                href={`/investments/${investment.slug}`}
              >
                <div className="flex items-start gap-4">
                  {investment.metadata.logo && (
                    <div className="w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={investment.metadata.logo}
                        alt={investment.metadata.company}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-medium tracking-tight">
                        {investment.metadata.company}
                      </h3>
                      <Badge variant="secondary" className="flex-shrink-0">
                        {investment.metadata.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {investment.metadata.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span>{investment.metadata.category}</span>
                      {investment.metadata.stage && (
                        <>
                          <span>•</span>
                          <span>{investment.metadata.stage}</span>
                        </>
                      )}
                      <span>•</span>
                      <span>{investment.metadata.investedAt}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
      </div>
      {investments.length === 0 && (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-muted-foreground">
            No investments listed yet. Check back soon!
          </p>
        </BlurFade>
      )}
    </section>
  );
}
