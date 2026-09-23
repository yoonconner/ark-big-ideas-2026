import { HorizontalBars } from "@/components/charts/horizontal-bars";
import { formatCompactUSD } from "@/lib/format";
import {
  BAR_COLORS,
  OPPORTUNITY_TO_THEME,
  SHORT_OPPORTUNITY_LABEL,
} from "@/lib/theme-map";
import { ChartData } from "@/lib/types";

export function OpportunityChart({ data }: { data: ChartData }) {
  const rows = [...data.opportunityBars2030USD]
    .sort((a, b) => b.valueUSD - a.valueUSD)
    .map((bar, index) => ({
      ...bar,
      shortLabel: SHORT_OPPORTUNITY_LABEL[bar.id] ?? bar.theme,
      fill: BAR_COLORS[index % BAR_COLORS.length],
    }));

  return (
    <section id="opportunities" className="scroll-mt-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-medium tracking-[0.2em] text-fuchsia-300/75 uppercase">
            2030 opportunity sizes
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
            Where ARK sees the largest 2030 books
          </h2>
        </div>
        <p className="max-w-md text-sm text-violet-200/65">
          Sorted largest to smallest. Click a bar to open the matching Big Idea
          theme. Values are ARK research estimates from {data.pdf}.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
        <div className="min-w-0 rounded-2xl border border-fuchsia-400/15 bg-[#0c1020]/80 p-4 sm:p-5">
          <HorizontalBars
            ariaLabel="2030 opportunity sizes"
            items={rows.map((row) => ({
              id: row.id,
              label: row.shortLabel,
              value: row.valueUSD,
              href: `#opportunity-${row.id}`,
              color: row.fill,
              tooltip: [
                row.theme,
                row.metric,
                formatCompactUSD(row.valueUSD),
                ...(row.detail ? [row.detail] : []),
              ],
            }))}
          />
        </div>

        <aside
          data-chart
          className="relative min-h-[220px] rounded-2xl border border-fuchsia-400/15 bg-gradient-to-b from-[#16102a] to-[#0c1020] p-5"
        >
          {rows.map((row) => {
            const theme = data.themeCards.find(
              (card) => card.id === OPPORTUNITY_TO_THEME[row.id],
            );
            return (
              <article
                key={row.id}
                id={`opportunity-${row.id}`}
                className="hidden flex-col gap-4 target:flex"
              >
                <p className="text-[11px] font-medium tracking-[0.18em] text-fuchsia-300/70 uppercase">
                  Theme detail
                </p>
                <h3 className="text-xl font-semibold text-fuchsia-50">{row.theme}</h3>
                <p className="text-3xl font-semibold tracking-tight text-fuchsia-200">
                  {formatCompactUSD(row.valueUSD)}
                </p>
                <p className="text-sm text-violet-200/70">{row.metric}</p>
                {row.detail ? (
                  <p className="text-sm leading-relaxed text-violet-100/80">
                    {row.detail}
                  </p>
                ) : null}
                {theme ? (
                  <div className="mt-auto space-y-3 rounded-xl border border-white/8 bg-black/20 p-4">
                    <p className="text-xs font-medium text-fuchsia-200">{theme.title}</p>
                    <p className="text-sm leading-relaxed text-violet-100/75">
                      {theme.oneLiner}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {theme.tickers.map((ticker) => (
                        <span
                          key={ticker}
                          className="rounded-md border border-fuchsia-300/20 bg-fuchsia-400/10 px-2 py-0.5 font-mono text-[11px] text-fuchsia-100"
                        >
                          {ticker}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`#theme-${theme.id}`}
                      className="inline-flex text-sm text-fuchsia-200 underline-offset-4 hover:underline"
                    >
                      Open theme card
                    </a>
                  </div>
                ) : null}
              </article>
            );
          })}
          <div className="flex h-full min-h-[220px] flex-col justify-center gap-3 text-violet-200/70 [[data-chart]:has(:target)_&]:hidden">
            <p className="text-[11px] font-medium tracking-[0.18em] text-fuchsia-300/70 uppercase">
              Theme detail
            </p>
            <p className="text-lg font-medium text-violet-100/90">
              Click a bar to inspect a 2030 opportunity.
            </p>
            <p className="text-sm leading-relaxed">
              The panel shows ARK’s metric, any report note, and the linked Big
              Idea tickers — no extra numbers added.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
