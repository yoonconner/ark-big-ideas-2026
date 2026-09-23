import { Donut } from "@/components/charts/donut";
import { HorizontalBars } from "@/components/charts/horizontal-bars";
import { formatCompactUSD, formatPercent } from "@/lib/format";
import { Bitcoin2030 } from "@/lib/types";

const SLICE_COLORS = {
  bitcoin: "#f0abfc",
  contracts: "#a78bfa",
  other: "#6366f1",
};

export function BitcoinSection({ bitcoin }: { bitcoin: Bitcoin2030 }) {
  const otherUSD =
    bitcoin.digitalAssetsTotalUSD -
    bitcoin.bitcoinMarketCapUSD -
    bitcoin.smartContractsUSD;

  const slices = [
    {
      name: "Bitcoin",
      value: bitcoin.bitcoinMarketCapUSD,
      note: `~${formatPercent(bitcoin.bitcoinShare)} of digital assets`,
      color: SLICE_COLORS.bitcoin,
    },
    {
      name: "Smart contracts",
      value: bitcoin.smartContractsUSD,
      note: "ARK 2030 allocation",
      color: SLICE_COLORS.contracts,
    },
    {
      name: "Other digital assets",
      value: otherUSD,
      note: "Implied remainder of the $28T book",
      color: SLICE_COLORS.other,
    },
  ];

  return (
    <section id="bitcoin" className="scroll-mt-8">
      <div className="mb-6">
        <p className="text-[11px] font-medium tracking-[0.2em] text-fuchsia-300/75 uppercase">
          Bitcoin / digital assets
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
          A {formatCompactUSD(bitcoin.digitalAssetsTotalUSD)} digital-asset book
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-violet-200/65">
          Bitcoin is {formatCompactUSD(bitcoin.bitcoinMarketCapUSD)} at roughly{" "}
          {formatPercent(bitcoin.bitcoinShare)} of the{" "}
          {formatCompactUSD(bitcoin.digitalAssetsTotalUSD)} total. Smart contracts
          are {formatCompactUSD(bitcoin.smartContractsUSD)}. Digital-gold
          penetration is shown as ARK’s bear / base / bull cases against a{" "}
          {formatCompactUSD(bitcoin.digitalGoldTAMUSD)} TAM.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-fuchsia-400/15 bg-[#0c1020]/80 p-5">
          <h3 className="text-sm font-medium text-fuchsia-100">
            2030 digital-asset mix
          </h3>
          <Donut
            slices={slices}
            centerLabel="Digital assets"
            centerValue={formatCompactUSD(bitcoin.digitalAssetsTotalUSD)}
          />
          <ul className="grid gap-2 text-sm">
            {slices.map((slice) => (
              <li
                key={slice.name}
                className="flex items-center justify-between gap-3"
                title={slice.note}
              >
                <span className="flex items-center gap-2 text-violet-100/85">
                  <span
                    className="size-2.5 rounded-full"
                    style={{ background: slice.color }}
                  />
                  {slice.name}
                </span>
                <span className="font-mono text-fuchsia-100">
                  {formatCompactUSD(slice.value)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-fuchsia-400/15 bg-[#0c1020]/80 p-5">
          <h3 className="text-sm font-medium text-fuchsia-100">
            Digital-gold penetration
          </h3>
          <p className="mt-1 text-xs text-violet-200/60">
            Bear / base / bull vs a {formatCompactUSD(bitcoin.digitalGoldTAMUSD)}{" "}
            digital-gold TAM. Impact figures are ARK’s, not TAM × penetration.
          </p>
          <div className="mt-4">
            <HorizontalBars
              ariaLabel="Digital-gold penetration scenarios"
              items={bitcoin.penetrationScenarios.map((row) => ({
                id: row.name,
                label: row.name,
                value: row.impactUSD,
                color:
                  row.name === "Bull"
                    ? "#f0abfc"
                    : row.name === "Base"
                      ? "#c084fc"
                      : "#6366f1",
                tooltip: [
                  `${row.name} case`,
                  `Digital-gold penetration ${formatPercent(row.digitalGold)}`,
                  `ARK impact ${formatCompactUSD(row.impactUSD)}`,
                ],
              }))}
            />
          </div>
          <ul className="mt-4 grid gap-1.5 text-xs text-violet-200/70 sm:grid-cols-3">
            {bitcoin.penetrationScenarios.map((row) => (
              <li key={row.name}>
                {row.name}: {formatPercent(row.digitalGold)} ·{" "}
                {formatCompactUSD(row.impactUSD)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
