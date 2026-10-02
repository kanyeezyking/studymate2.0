import { useState } from "react";
import { ArrowLeft, Atom, Lightbulb, Spline, Zap } from "lucide-react";
import { CircuitLab } from "@/components/labs/CircuitLab";
import { DecayLab } from "@/components/labs/DecayLab";
import { LightLab, type LightMode } from "@/components/labs/LightLab";
import { SankeyLab } from "@/components/labs/SankeyLab";
import { EnergyTools } from "@/components/tools/EnergyTools";
import { HalfLifeTool } from "@/components/tools/HalfLifeTool";
import { Button } from "@/components/ui/button";
import { Panel, PanelTitle } from "@/components/ui/panel";

export type LabId = "light" | "circuit" | "sankey" | "decay";

const LABS: { id: LabId; title: string; blurb: string; icon: typeof Lightbulb }[] = [
  {
    id: "light",
    title: "Light lab",
    blurb: "Spectrum, reflection, refraction, TIR and colour mixing — the visual bench.",
    icon: Lightbulb,
  },
  {
    id: "circuit",
    title: "Circuit bench",
    blurb: "Series vs parallel. See current and voltage split as you add lamps.",
    icon: Zap,
  },
  {
    id: "sankey",
    title: "Energy & Sankey",
    blurb: "GPE, KE, work, efficiency and a live Sankey split.",
    icon: Spline,
  },
  {
    id: "decay",
    title: "Half-life sample",
    blurb: "Watch 64 nuclei decay. Compare the random sample to the (1/2)^n model.",
    icon: Atom,
  },
];

export function LabsPanel({ initialLab = null }: { initialLab?: LabId | null }) {
  const [lab, setLab] = useState<LabId | null>(initialLab);
  const active = LABS.find((l) => l.id === lab);

  if (!active) {
    return (
      <Panel>
        <PanelTitle
          kicker="Interactive"
          title="Labs"
          description="Build the picture in your head before the test. Start with the light bench — then circuits, energy and decay."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {LABS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setLab(item.id)}
                className="rounded-[var(--radius-md)] border border-border bg-bg p-5 text-left transition-colors hover:border-primary"
              >
                <Icon className="size-5 text-primary" />
                <h3 className="mt-3 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.blurb}</p>
              </button>
            );
          })}
        </div>
      </Panel>
    );
  }

  return (
    <Panel>
      <Button variant="ghost" className="mb-4 px-2" onClick={() => setLab(null)}>
        <ArrowLeft className="size-4" />
        All labs
      </Button>
      <PanelTitle title={active.title} description={active.blurb} />
      {lab === "light" && <LightLab initial={"spectrum" satisfies LightMode} />}
      {lab === "circuit" && <CircuitLab />}
      {lab === "sankey" && (
        <div className="space-y-8">
          <SankeyLab />
          <EnergyTools />
        </div>
      )}
      {lab === "decay" && (
        <div className="space-y-8">
          <DecayLab />
          <HalfLifeTool />
        </div>
      )}
    </Panel>
  );
}
