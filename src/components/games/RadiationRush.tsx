import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveQuizResults } from "@/lib/science/store";
import { cn, shuffle } from "@/lib/utils";

const BANK = [
  { q: "Stopped by a sheet of paper or skin", a: "Alpha" },
  { q: "Helium nucleus (2 protons + 2 neutrons)", a: "Alpha" },
  { q: "Most ionising of the three", a: "Alpha" },
  { q: "Deflected towards a negative plate (positive charge)", a: "Alpha" },
  { q: "Fast electron emitted from the nucleus", a: "Beta" },
  { q: "Stopped by a few millimetres of aluminium", a: "Beta" },
  { q: "Deflected towards a positive plate", a: "Beta" },
  { q: "A neutron changing into a proton produces this", a: "Beta" },
  { q: "Electromagnetic wave from the nucleus", a: "Gamma" },
  { q: "Most penetrating — needs thick lead or concrete", a: "Gamma" },
  { q: "No charge, so not deflected by electric fields", a: "Gamma" },
  { q: "Least ionising of the three", a: "Gamma" },
];

const OPTIONS = ["Alpha", "Beta", "Gamma"] as const;

export function RadiationRush() {
  const [queue, setQueue] = useState<typeof BANK>([]);
  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const current = queue[i];
  const finished = queue.length > 0 && i >= queue.length;

  function start() {
    setQueue(shuffle(BANK));
    setI(0);
    setScore(0);
    setPicked(null);
  }

  function choose(opt: string) {
    if (!current || picked) return;
    const ok = opt === current.a;
    setPicked(opt);
    if (ok) setScore((s) => s + 1);
    saveQuizResults([{ cat: "radioactivity", q: current.q, correct: ok }]);
    window.setTimeout(() => {
      setI((n) => n + 1);
      setPicked(null);
    }, 550);
  }

  return (
    <div>
      <p className="text-sm text-muted">Twelve properties. Tap alpha, beta or gamma as fast as you can without guessing.</p>
      {queue.length === 0 || finished ? (
        <div className="mt-5">
          {finished && (
            <p className="mb-4 rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3 text-sm">
              {score} / {queue.length}. Aim for 11+ before the test.
            </p>
          )}
          <Button variant="action" onClick={start}>
            Start radiation rush
          </Button>
        </div>
      ) : (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {i + 1} / {queue.length} · score {score}
          </p>
          <p className="mt-3 min-h-16 text-lg font-semibold">{current!.q}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {OPTIONS.map((opt) => {
              let tone = "border-border bg-bg";
              if (picked) {
                if (opt === current!.a) tone = "border-success bg-success text-success-foreground";
                else if (opt === picked) tone = "border-danger bg-danger text-danger-foreground";
              }
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => choose(opt)}
                  className={cn("h-12 rounded-[var(--radius-sm)] border text-sm font-bold", tone)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
