import { InvestmentCard } from "@/components/investment-card";
import { DATA } from "@/data/investments";

export default function InvestmentsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Angel Investments
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            Public notes on founders, markets, and products I have backed. I
            keep outcomes visible too, including investments that have been
            written off.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4">
        {DATA.investments.map((investment) => (
          <InvestmentCard
            key={investment.name}
            name={investment.name}
            logoUrl={investment.logoUrl}
            description={investment.description}
            status={investment.status}
            badges={investment.badges}
            shortIntro={investment.shortIntro}
            blogPostSlug={investment.blogPostSlug}
            href={investment.href}
          />
        ))}
      </div>
    </div>
  );
}
