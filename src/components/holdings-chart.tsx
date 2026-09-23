import { HorizontalBars } from "@/components/charts/horizontal-bars";
import { formatWeight } from "@/lib/format";
import { BAR_COLORS } from "@/lib/theme-map";
import { ChartData } from "@/lib/types";

export function HoldingsChart({ data }: { data: ChartData }) {
  const rows = [...data.arkkHoldingsSep22_2026.top].sort(
    (a, b) => b.weightPct - a.weightPct,
  );

  return (
    <section id="arkk" className="scroll-mt-8">
      <div className="mb-6">
        <p className="text-[11px] font-medium tracking-[0.2em] text-fuchsia-300/75 uppercase">
          Revealed conviction
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          ARKK top holdings
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-violet-200/65">
          {data.arkkHoldingsSep22_2026.note}
        </p>
      </div>

      <div className="rounded-2xl border border-fuchsia-400/15 bg-[#0c1020]/80 p-4 sm:p-5">
        <HorizontalBars
          ariaLabel="ARKK top holdings by weight"
          formatValue={(value) => formatWeight(value)}
          items={rows.map((row, index) => ({
            id: row.symbol,
            label: `${row.symbol} · ${row.name}`,
            value: row.weightPct,
            color: BAR_COLORS[index % BAR_COLORS.length],
            tooltip: [
              `${row.symbol} · ${row.name}`,
              `ARKK weight ${formatWeight(row.weightPct)}`,
              row.mapsTo.join(" · "),
            ],
          }))}
        />
      </div>

      <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((row) => (
          <li
            key={row.symbol}
            className="flex flex-col gap-2 rounded-xl border border-fuchsia-400/12 bg-[#0c1020]/70 px-3 py-2.5"
          >
            <div className="flex items-baseline justify-between gap-2">
              <span className="font-mono text-sm text-fuchsia-100">{row.symbol}</span>
              <span className="font-mono text-xs text-violet-200/80">
                {formatWeight(row.weightPct)}
              </span>
            </div>
            <p className="text-xs text-violet-200/65">{row.name}</p>
            <div className="flex flex-wrap gap-1">
              {row.mapsTo.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-2 py-0.5 text-[10px] text-fuchsia-100"
                >
                  {theme}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
