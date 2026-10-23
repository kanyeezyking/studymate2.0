import { useEffect, useMemo, useState } from "react";
import { LightLab } from "@/components/labs/LightLab";
import { CircuitLab } from "@/components/labs/CircuitLab";
import { DecayLab } from "@/components/labs/DecayLab";
import { SankeyLab } from "@/components/labs/SankeyLab";
import { FeaturesGrid } from "@/components/labs/FeaturesGrid";
import { SkateLab } from "@/components/labs/SkateLab";
import { EnergyTools } from "@/components/tools/EnergyTools";
import { HalfLifeTool } from "@/components/tools/HalfLifeTool";
import { Button } from "@/components/ui/button";
import { Panel, PanelTitle } from "@/components/ui/panel";
import { FormulaRecall, LearnCoach, WorkedRecall } from "@/components/LearnCoach";
import { mathNotes } from "@/data/math-notes";
import { noteSections } from "@/data/notes";
import { loadQuestionStats, loadStats } from "@/lib/science/store";
import { useSubject } from "@/lib/science/subject";
import { catNames, topicsFor } from "@/lib/science/topics";
import type { TopicId } from "@/lib/science/types";
import {
  MATHS_UNITS,
  questionsForScope,
  scoreDivision,
  sourcesForDivision,
  unitForNote,
} from "@/lib/science/units";
import { cn } from "@/lib/utils";

export function NotesPanel({ onDrill }: { onDrill?: (topic: string) => void }) {
  const subject = useSubject();
  const catalog = subject === "maths" ? mathNotes : noteSections;
  const order = topicsFor(subject);
  const [filter, setFilter] = useState<TopicId | "all">("all");
  const [activeId, setActiveId] = useState(catalog[0]?.id ?? "");
  const [divId, setDivId] = useState("all");
  const [weakLabel, setWeakLabel] = useState<string | null>(null);
  const [weakScope, setWeakScope] = useState<string | null>(null);
  const single = catalog.length === 1;

  useEffect(() => {
    setFilter("all");
    setActiveId(catalog[0]?.id ?? "");
    setDivId("all");
  }, [subject, catalog]);

  useEffect(() => {
    setDivId("all");
  }, [activeId]);

  useEffect(() => {
    if (subject === "maths") {
      const qStats = loadQuestionStats();
      const catStats = loadStats();
      let worst: { label: string; scope: string; rate: number } | null = null;
      for (const unit of MATHS_UNITS) {
        for (const div of unit.divisions) {
          if (div.cats.length === 0) continue;
          const stat = scoreDivision(div, qStats, catStats);
          if (stat.t < 3) continue;
          const rate = stat.c / stat.t;
          if (!worst || rate < worst.rate) {
            worst = { label: `${div.short} (${unit.title})`, scope: `div:${div.id}`, rate };
          }
        }
      }
      setWeakLabel(worst?.label ?? null);
      setWeakScope(worst?.scope ?? null);
      return;
    }

    const stats = loadStats();
    let worst: TopicId | null = null;
    let rate = 2;
    for (const id of order) {
      const s = stats[id];
      if (!s || s.t < 3) continue;
      const r = s.c / s.t;
      if (r < rate) {
        rate = r;
        worst = id;
      }
    }
    setWeakLabel(worst ? catNames[worst] : null);
    setWeakScope(worst);
  }, [order, subject]);

  const visible = useMemo(
    () => (filter === "all" ? catalog : catalog.filter((s) => s.topic === filter)),
    [filter, catalog],
  );
  const active = visible.find((s) => s.id === activeId) ?? visible[0];
  const unit = subject === "maths" ? unitForNote(active?.id) : undefined;
  const division = unit?.divisions.find((item) => item.id === divId) ?? null;
  const partIndex = division ? unit!.divisions.findIndex((item) => item.id === division.id) : -1;
  const formulaList = (division ? active?.formulas?.filter((item) => item.div === division.id) : active?.formulas) ?? [];
  const workedList = (division ? active?.worked?.filter((item) => item.div === division.id) : active?.worked) ?? [];

  return (
    <Panel>
      <PanelTitle
        kicker="Read"
        title={subject === "maths" ? "Maths notes" : "Study notes"}
        description={
          subject === "maths"
            ? "Three units. Pick a part for the method, a walkthrough and a mistake to fix. The quiz can wait until that sticks. Quadratics keeps the features grid."
            : "Each pack matches an uploaded file. Cover the formulas to recall them, and open the working only after you have tried it."
        }
      />

      {weakLabel && weakScope && onDrill && (
        <div className="mb-6 flex flex-col gap-3 rounded-[var(--radius-md)] border border-primary/30 bg-bg px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">A-path</p>
            <p className="mt-1 text-sm">
              Lowest accuracy: <strong>{weakLabel}</strong>. Quiz that, then re-read the part.
            </p>
          </div>
          <Button variant="action" onClick={() => onDrill(weakScope)}>
            Drill this
          </Button>
        </div>
      )}

      {subject !== "maths" && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterChip label="All packs" on={() => setFilter("all")} active={filter === "all"} />
          {order.map((id) => (
            <FilterChip
              key={id}
              label={catNames[id]}
              on={() => {
                setFilter(id);
                const first = catalog.find((s) => s.topic === id);
                if (first) setActiveId(first.id);
              }}
              active={filter === id}
            />
          ))}
        </div>
      )}

      <div className={cn("mt-6 grid gap-6", single ? "" : "lg:grid-cols-[240px_1fr]")}>
        {!single && (
          <nav className="flex flex-col gap-2" aria-label="Note sections">
            {visible.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                className={cn(
                  "rounded-[var(--radius-sm)] border px-4 py-3 text-left transition-colors",
                  active?.id === s.id
                    ? "border-primary bg-primary/15 text-foreground"
                    : "border-border bg-bg text-muted hover:text-foreground",
                )}
              >
                <span className="block text-sm font-bold text-foreground">{s.title}</span>
                <span className="mt-1 block text-xs text-muted">
                  {subject === "maths" ? `${unitForNote(s.id)?.divisions.length ?? 0} parts` : s.pack}
                </span>
              </button>
            ))}
          </nav>
        )}

        {active && (
          <article className="fade-in min-w-0 rounded-[var(--radius-md)] border border-border bg-bg p-5 md:p-6">
            {subject !== "maths" && (
              <p className="text-xs font-bold uppercase tracking-wider text-primary">{catNames[active.topic]}</p>
            )}
            <h3 className="text-2xl font-bold">{active.title}</h3>
            <p className="mt-3 text-muted">{active.summary}</p>

            {unit && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label={`${active.title} parts`}>
                  <FilterChip label="Whole unit" on={() => setDivId("all")} active={!division} />
                  {unit.divisions.map((item) => (
                    <FilterChip
                      key={item.id}
                      label={item.short}
                      on={() => setDivId(item.id)}
                      active={division?.id === item.id}
                    />
                  ))}
                </div>
            )}

            {division && (
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">
                Part {partIndex + 1} of {unit?.divisions.length} · {division.label}
              </p>
            )}

            {active.id === "quadratics" && (!division || division.id === "forms") && <FeaturesGrid />}
            {active.id === "energy-forms" && (
              <div className="mt-6">
                <SkateLab />
              </div>
            )}

            {(division ? active.blocks.filter((block) => block.div === division.id) : active.blocks).map((block) => (
              <section key={block.heading} className="mt-6">
                <h4 className="text-lg font-bold">{block.heading}</h4>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-foreground/90">
                  {block.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>
            ))}

            {division && <LearnCoach key={`learn-${division.id}`} divId={division.id} />}

            {formulaList.length > 0 && <FormulaRecall key={`formulas-${division?.id ?? "all"}`} formulas={formulaList} />}

            {workedList.length > 0 && <WorkedRecall key={`worked-${division?.id ?? "all"}`} items={workedList} />}

            {(division ? active.glossary?.filter((g) => g.div === division.id) : active.glossary)?.length ? (
              <section className="mt-6">
                <h4 className="text-lg font-bold">Glossary</h4>
                <dl className="mt-2 space-y-2">
                  {(division ? active.glossary?.filter((g) => g.div === division.id) : active.glossary)?.map((g) => (
                    <div key={g.term}>
                      <dt className="text-sm font-bold text-primary">{g.term}</dt>
                      <dd className="text-sm text-muted">{g.def}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}

            {unit && onDrill && (
              <PartQuiz
                label={division ? division.short : active.title}
                count={questionsForScope(division ? `div:${division.id}` : `unit:${unit.id}`, "maths").length}
                onClick={() => onDrill(division ? `div:${division.id}` : `unit:${unit.id}`)}
              />
            )}

            {active.id === "em-spectrum" && <LightLab initial="spectrum" />}
            {active.id === "visible-light" && <LightLab initial="spectrum" />}
            {active.id === "reflection" && <LightLab initial="reflection" />}
            {active.id === "refraction" && <LightLab initial="refraction" />}
            {active.id === "colour" && <LightLab initial="colour" />}
            {active.id === "energy-work" && <EnergyTools />}
            {active.id === "energy-sankey" && (
              <div className="mt-8 space-y-8">
                <SankeyLab />
                <EnergyTools mode="efficiency" />
              </div>
            )}
            {active.id === "radio-halflife" && (
              <div className="mt-8 space-y-8">
                <DecayLab />
                <HalfLifeTool />
              </div>
            )}
            {(active.id === "electricity-intro" || active.id === "electricity-circuits") && (
              <div className="mt-8">
                <CircuitLab />
              </div>
            )}

            {sourcesForDivision(active.sources, division).length > 0 && (
              <section className="mt-8 border-t border-border pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted">Source files</p>
                <ul className="mt-2 columns-1 gap-6 text-sm text-muted sm:columns-2">
                  {sourcesForDivision(active.sources, division).map((s) => (
                    <li key={s} className="break-inside-avoid py-0.5">
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>
        )}
      </div>
    </Panel>
  );
}

function FilterChip({ label, active, on }: { label: string; active: boolean; on: () => void }) {
  return (
    <button
      type="button"
      onClick={on}
      className={cn(
        "h-11 shrink-0 rounded-full border px-4 text-xs font-bold",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg text-muted",
      )}
    >
      {label}
    </button>
  );
}

function PartQuiz({ label, count, onClick }: { label: string; count: number; onClick: () => void }) {
  if (count === 0) return null;
  return (
    <div className="mt-8 flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted">When the method feels familiar, quiz this part.</p>
      <Button variant="action" onClick={onClick}>
        Quiz {label} ({count})
      </Button>
    </div>
  );
}
