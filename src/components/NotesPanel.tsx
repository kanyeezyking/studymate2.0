import { useMemo, useState } from "react";
import { noteSections } from "@/data/notes";
import { catNames, TOPIC_ORDER } from "@/lib/science/topics";
import type { TopicId } from "@/lib/science/types";
import { cn } from "@/lib/utils";
import { SpectrumStrip } from "@/components/tools/SpectrumStrip";
import { EnergyTools } from "@/components/tools/EnergyTools";
import { HalfLifeTool } from "@/components/tools/HalfLifeTool";

export function NotesPanel() {
  const [filter, setFilter] = useState<TopicId | "all">("all");
  const [activeId, setActiveId] = useState(noteSections[0]?.id ?? "");

  const visible = useMemo(
    () => (filter === "all" ? noteSections : noteSections.filter((s) => s.topic === filter)),
    [filter],
  );
  const active = visible.find((s) => s.id === activeId) ?? visible[0];

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-lg md:p-8">
      <h2 className="text-xl font-bold">Study notes by pack</h2>
      <p className="mt-2 text-sm text-muted">
        Each section matches an uploaded Year 9 file set. Open a pack, then use the tools at the bottom when they appear.
      </p>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
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

      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <nav className="flex flex-col gap-2" aria-label="Note sections">
          {visible.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              className={cn(
                "rounded-[var(--radius-md)] border px-4 py-3 text-left transition-colors",
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

            {active.id === "em-spectrum" && <SpectrumStrip />}
            {active.id === "energy-work" && <EnergyTools />}
            {active.id === "energy-sankey" && <EnergyTools mode="efficiency" />}
            {active.id === "radio-halflife" && <HalfLifeTool />}

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
    </div>
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
