import { Explainer } from "@/components/explainer";
import raw from "@/data/bigideas2026-chart-data.json";
import { ChartData } from "@/lib/types";

export default function Home() {
  return <Explainer data={raw as ChartData} />;
}
