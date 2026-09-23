import { ChartData } from "@/lib/types";

export function SiteFooter({ data }: { data: ChartData }) {
  return (
    <footer className="border-t border-fuchsia-400/15 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-3 text-sm text-violet-200/60">
        <p>
          Source: {data.source}. PDF: {data.pdf}. Holdings snapshot:{" "}
          {data.arkkHoldingsSep22_2026.note}
        </p>
        <p>
          This page restates published ARK research for exploration. It is not
          an offer, solicitation, or recommendation to buy or sell any security.
        </p>
      </div>
    </footer>
  );
}
