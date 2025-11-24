import { InvestmentCard } from "@/components/investment-card";
import { DATA } from "@/data/investments";

export default function InvestmentsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Angel
          </h1>
          <p className="text-xl text-muted-foreground">
            My angel investments in founders and products I believe in.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8">
        {DATA.investments.map((investment) => (
          <InvestmentCard
            key={investment.name}
            name={investment.name}
            logoUrl={investment.logoUrl}
            description={investment.description}
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
