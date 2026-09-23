import { BitcoinSection } from "@/components/bitcoin-section";
import { Hero } from "@/components/hero";
import { HoldingsChart } from "@/components/holdings-chart";
import { OpportunityChart } from "@/components/opportunity-chart";
import { ProductivitySection } from "@/components/productivity-section";
import { SiteFooter } from "@/components/site-footer";
import { ThemeCards } from "@/components/theme-cards";
import { ChartData } from "@/lib/types";

export function Explainer({ data }: { data: ChartData }) {
  return (
    <div className="relative min-h-full">
      <Hero data={data} />
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-12 sm:px-6 sm:py-16">
        <OpportunityChart data={data} />
        <ThemeCards data={data} />
        <BitcoinSection bitcoin={data.bitcoin2030} />
        <HoldingsChart data={data} />
        <ProductivitySection data={data} />
      </main>
      <SiteFooter data={data} />
    </div>
  );
}
