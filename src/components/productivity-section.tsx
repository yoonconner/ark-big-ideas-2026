import { HorizontalBars } from "@/components/charts/horizontal-bars";
import { formatCompactUSD } from "@/lib/format";
import { ChartData } from "@/lib/types";

const PROD_COLORS = ["#6366f1", "#a78bfa", "#d946ef", "#f0abfc"];
const BROADER_COLORS = ["#22d3ee", "#67e8f9", "#a5f3fc"];

export function ProductivitySection({ data }: { data: ChartData }) {
  const productivity = data.macro.productivityScenariosUSD;
  const broader = data.macro.broaderOpportunityUSD;
  const first = productivity[0];
  const last = productivity[productivity.length - 1];

  return (
    <section id="productivity" className="scroll-mt-8">
      <div className="mb-6">
        <p className="text-[11px] font-medium tracking-[0.2em] text-fuchsia-300/75 uppercase">
          Macro scenarios
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          {data.macro.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-violet-200/65">
          Worker productivity gains run from{" "}
          {first ? formatCompactUSD(first.workerProductivityGainUSD) : "—"} to{" "}
          {last ? formatCompactUSD(last.workerProductivityGainUSD) : "—"}. A
          wider opportunity set sits beside them — also ARK’s figures, not ours.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-fuchsia-400/15 bg-[#0c1020]/80 p-5">
          <h3 className="text-sm font-medium text-fuchsia-100">
            Worker productivity gains
          </h3>
          <div className="mt-4">
            <HorizontalBars
              ariaLabel="Worker productivity gain scenarios"
              items={productivity.map((row, index) => ({
                id: row.label,
                label: row.label,
                value: row.workerProductivityGainUSD,
                color: PROD_COLORS[index % PROD_COLORS.length],
                tooltip: [
                  row.label,
                  formatCompactUSD(row.workerProductivityGainUSD),
                ],
              }))}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-fuchsia-400/15 bg-[#0c1020]/80 p-5">
          <h3 className="text-sm font-medium text-fuchsia-100">
            Broader opportunity set
          </h3>
          <div className="mt-4">
            <HorizontalBars
              ariaLabel="Broader opportunity scenarios"
              items={broader.map((row, index) => ({
                id: row.label,
                label: row.label,
                value: row.value,
                color: BROADER_COLORS[index % BROADER_COLORS.length],
                tooltip: [row.label, formatCompactUSD(row.value)],
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
