import { useState } from "react";
import { ArrowLeft, Atom, GitBranch, Lightbulb, PersonStanding, Ruler, Spline, Zap } from "lucide-react";
import { CircuitLab } from "@/components/labs/CircuitLab";
import { DecayLab } from "@/components/labs/DecayLab";
import { LightLab, type LightMode } from "@/components/labs/LightLab";
import { MeasureLab } from "@/components/labs/MeasureLab";
import { ParabolaLab } from "@/components/labs/ParabolaLab";
import { ProbabilityLab } from "@/components/labs/ProbabilityLab";
import { SankeyLab } from "@/components/labs/SankeyLab";
import { SkateLab } from "@/components/labs/SkateLab";
import { EnergyTools } from "@/components/tools/EnergyTools";
import { HalfLifeTool } from "@/components/tools/HalfLifeTool";
import { Button } from "@/components/ui/button";
import { Panel, PanelTitle } from "@/components/ui/panel";
import { useSubject } from "@/lib/science/subject";

export type LabId = "light" | "circuit" | "sankey" | "skate" | "decay";
type MathsLabId = "parabola" | "probability" | "measurement";

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
    id: "skate",
    title: "Skate park",
    blurb: "Drop the skater. Watch potential, kinetic and thermal trade places, with and without friction.",
    icon: PersonStanding,
  },
  {
    id: "decay",
    title: "Half-life sample",
    blurb: "Watch 64 nuclei decay. Compare the random sample to the (1/2)^n model.",
    icon: Atom,
  },
];

const MATHS_LABS: { id: MathsLabId; title: string; blurb: string; icon: typeof Spline }[] = [
  {
    id: "parabola",
    title: "Parabola lab",
    blurb: "Drag a, h and k (or the roots) and watch the parabola move. The formula grid stays in Notes.",
    icon: Spline,
  },
  {
    id: "probability",
    title: "Probability lab",
    blurb: "Fill a Venn diagram, match it to a two-way table, then walk a tree without replacement.",
    icon: GitBranch,
  },
  {
    id: "measurement",
    title: "Measurement lab",
    blurb: "Composite area, the solid formulas, and limits of accuracy. The formulas do not change.",
    icon: Ruler,
  },
];

export function LabsPanel({ initialLab = null }: { initialLab?: LabId | null }) {
  const subject = useSubject();
  const [lab, setLab] = useState<LabId | null>(initialLab);
  const [mathsLab, setMathsLab] = useState<MathsLabId | null>(null);

  if (subject === "maths") {
    const active = MATHS_LABS.find((item) => item.id === mathsLab);
    if (!active) {
      return (
        <Panel>
          <PanelTitle
            kicker="Interactive"
            title="Maths labs"
            description="One lab for each unit. The notes and quizzes split that unit into parts."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {MATHS_LABS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMathsLab(item.id)}
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
        <Button variant="ghost" className="mb-4 px-2" onClick={() => setMathsLab(null)}>
          <ArrowLeft className="size-4" />
          All labs
        </Button>
        <PanelTitle title={active.title} description={active.blurb} />
        {mathsLab === "parabola" && <ParabolaLab />}
        {mathsLab === "probability" && <ProbabilityLab />}
        {mathsLab === "measurement" && <MeasureLab />}
      </Panel>
    );
  }

  const active = LABS.find((l) => l.id === lab);

  if (!active) {
    return (
      <Panel>
        <PanelTitle
          kicker="Interactive"
          title="Labs"
          description="Build the picture in your head before the test. Start with the light bench — then circuits, energy, the skate park and decay."
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
      {lab === "skate" && <SkateLab />}
      {lab === "decay" && (
        <div className="space-y-8">
          <DecayLab />
          <HalfLifeTool />
        </div>
      )}
    </Panel>
  );
}
