import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { questionsFor } from "@/lib/science/bank";
import { clearStats, loadQuestionStats, loadStats } from "@/lib/science/store";
import { catNames, TOPIC_ORDER } from "@/lib/science/topics";
import type { CatStats, TopicId } from "@/lib/science/types";
import { cn } from "@/lib/utils";

export function PerformancePanel() {
  const [tick, setTick] = useState(0);
  const [open, setOpen] = useState<TopicId | null>(null);
  const [stats, setStats] = useState<Record<TopicId, CatStats> | null>(null);
  const [qStats, setQStats] = useState<Record<string, CatStats>>({});

  useEffect(() => {
    setStats(loadStats());
    setQStats(loadQuestionStats());
  }, [tick]);

  function reset() {
    if (window.confirm("Reset all progress data?")) {
      clearStats();
      setOpen(null);
      setTick((t) => t + 1);
    }
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-lg md:p-8">
      <h2 className="text-xl font-bold">Performance</h2>
      <p className="mt-2 text-sm text-muted">
        Weak areas show in red or amber. Tap a topic to see every question from that subdivision.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {TOPIC_ORDER.map((key) => {
          const data = stats?.[key] ?? { c: 0, t: 0 };
          const percent = data.t === 0 ? 0 : Math.round((data.c / data.t) * 100);
          let status = "No data yet";
          let tone = "border-border";
          if (data.t > 0 && percent >= 80) {
            status = "Confident";
            tone = "border-success";
          } else if (data.t > 0 && percent >= 50) {
            status = "Getting there";
            tone = "border-warning";
          } else if (data.t > 0) {
            status = "Needs review";
            tone = "border-danger";
          }
          return (
            <button
              key={key}
              type="button"
              onClick={() => setOpen(key)}
              className={cn(
                "rounded-[var(--radius-md)] border-b-4 bg-surface-hover p-4 text-center transition-transform hover:-translate-y-0.5",
                tone,
              )}
            >
              <h3 className="text-sm font-bold">{catNames[key]}</h3>
              <p className="my-1 font-mono text-3xl font-bold">{percent}%</p>
              <p className="text-xs text-muted">
                {data.c} / {data.t} correct
              </p>
              <p className="mt-2 text-xs font-bold">{status}</p>
            </button>
          );
        })}
      </div>

      {open && (
        <div className="mt-8">
          <h3 className="text-lg font-bold">{catNames[open]} — individual questions</h3>
          <p className="text-sm text-muted">Each question keeps its own record.</p>
          <div className="mt-3 space-y-2">
            {questionsFor(open).map((q, i) => {
              const d = qStats[q.q] ?? { c: 0, t: 0 };
              const percent = d.t ? Math.round((d.c / d.t) * 100) : 0;
              return (
                <div key={q.q} className="rounded-[var(--radius-md)] border border-border bg-bg px-4 py-3">
                  <p className="text-sm font-semibold">
                    {i + 1}. {q.q}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {d.t ? `${d.c}/${d.t} correct (${percent}%)` : "Not attempted yet"}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <Button variant="danger" className="mt-8" onClick={reset}>
        Reset progress
      </Button>
    </div>
  );
}
