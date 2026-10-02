import { useEffect, useMemo, useState } from "react";
import { LightLab } from "@/components/labs/LightLab";
import { CircuitLab } from "@/components/labs/CircuitLab";
import { DecayLab } from "@/components/labs/DecayLab";
import { SankeyLab } from "@/components/labs/SankeyLab";
import { EnergyTools } from "@/components/tools/EnergyTools";
import { HalfLifeTool } from "@/components/tools/HalfLifeTool";
import { Button } from "@/components/ui/button";
import { Panel, PanelTitle } from "@/components/ui/panel";
import { noteSections } from "@/data/notes";
import { loadStats } from "@/lib/science/store";
import { catNames, TOPIC_ORDER } from "@/lib/science/topics";
import type { TopicId } from "@/lib/science/types";
import { cn } from "@/lib/utils";

export function NotesPanel({ onDrill }: { onDrill?: (topic: TopicId | "all") => void }) {
  const [filter, setFilter] = useState<TopicId | "all">("all");
  const [activeId, setActiveId] = useState(noteSections[0]?.id ?? "");
  const [weak, setWeak] = useState<TopicId | null>(null);

  useEffect(() => {
    const stats = loadStats();
    let worst: TopicId | null = null;
    let rate = 2;
    for (const id of TOPIC_ORDER) {
      const s = stats[id];
      if (!s || s.t < 3) continue;
      const r = s.c / s.t;
      if (r < rate) {
        rate = r;
        worst = id;
      }
    }
    setWeak(worst);
  }, []);

  const visible = useMemo(
    () => (filter === "all" ? noteSections : noteSections.filter((s) => s.topic === filter)),
    [filter],
  );
  const active = visible.find((s) => s.id === activeId) ?? visible[0];

  return (
    <Panel>
      <PanelTitle
        kicker="Read"
        title="Study notes"
        description="Each pack matches an uploaded Year 9 file. Open a section, then use the lab at the bottom when it appears."
      />

      {weak && onDrill && (
        <div className="mb-6 flex flex-col gap-3 rounded-[var(--radius-md)] border border-primary/30 bg-bg px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">A-path</p>
            <p className="mt-1 text-sm">
              Lowest accuracy: <strong>{catNames[weak]}</strong>. Ten questions on that pack, then re-read the notes.
            </p>
          </div>
          <Button variant="action" onClick={() => onDrill(weak)}>
            Drill this topic
          </Button>
        </div>
      )}

      <div className="flex gap-2 overflow-x-auto pb-1">
        <FilterChip label="All packs" on={() => setFilter("all")} active={filter === "all"} />
        {TOPIC_ORDER.map((id) => (
          <FilterChip
            key={id}
            label={catNames[id]}
            on={() => {
              setFilter(id);
              const first = noteSections.find((s) => s.topic === id);
              if (first) setActiveId(first.id);
            }}
            active={filter === id}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[240px_1fr]">
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
              <span className="mt-1 block text-xs text-muted">{s.pack}</span>
            </button>
          ))}
        </nav>

        {active && (
          <article className="fade-in min-w-0 rounded-[var(--radius-md)] border border-border bg-bg p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-primary">{catNames[active.topic]}</p>
            <h3 className="mt-1 text-2xl font-bold">{active.title}</h3>
            <p className="mt-3 text-muted">{active.summary}</p>

            {active.blocks.map((block) => (
              <section key={block.heading} className="mt-6">
                <h4 className="text-lg font-bold">{block.heading}</h4>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-foreground/90">
                  {block.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </section>
            ))}

            {active.formulas && active.formulas.length > 0 && (
              <section className="mt-6">
                <h4 className="text-lg font-bold">Formulas</h4>
                <div className="mt-2 grid gap-2">
                  {active.formulas.map((f) => (
                    <div key={f.name} className="rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-muted">{f.name}</p>
                      <p className="font-mono text-base text-primary">{f.formula}</p>
                      {f.note && <p className="mt-1 text-xs text-muted">{f.note}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {active.worked && active.worked.length > 0 && (
              <section className="mt-6">
                <h4 className="text-lg font-bold">Worked examples from the pack</h4>
                <div className="mt-2 space-y-3">
                  {active.worked.map((w) => (
                    <div key={w.q} className="rounded-[var(--radius-sm)] border border-border bg-surface p-4">
                      <p className="text-sm font-semibold">{w.q}</p>
                      <p className="mt-1 text-sm text-secondary">{w.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {active.glossary && (
              <section className="mt-6">
                <h4 className="text-lg font-bold">Glossary</h4>
                <dl className="mt-2 space-y-2">
                  {active.glossary.map((g) => (
                    <div key={g.term}>
                      <dt className="text-sm font-bold text-primary">{g.term}</dt>
                      <dd className="text-sm text-muted">{g.def}</dd>
                    </div>
                  ))}
                </dl>
              </section>
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

            <section className="mt-8 border-t border-border pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">Source files</p>
              <ul className="mt-2 columns-1 gap-6 text-sm text-muted sm:columns-2">
                {active.sources.map((s) => (
                  <li key={s} className="break-inside-avoid py-0.5">
                    {s}
                  </li>
                ))}
              </ul>
            </section>
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
        "h-10 shrink-0 rounded-full border px-4 text-xs font-bold",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-bg text-muted",
      )}
    >
      {label}
    </button>
  );
}
