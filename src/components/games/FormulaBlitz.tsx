import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveQuizResults } from "@/lib/science/store";
import { cn } from "@/lib/utils";

type Item = { q: string; a: number; unit: string; hint: string };

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeItem(): Item {
  const kind = rand(0, 3);
  if (kind === 0) {
    const m = rand(2, 12);
    const h = rand(1, 8);
    return {
      q: `A ${m} kg mass is lifted ${h} m. g = 10 N/kg. What is the GPE gained?`,
      a: m * 10 * h,
      unit: "J",
      hint: "Ep = mgh",
    };
  }
  if (kind === 1) {
    const m = rand(2, 10);
    const v = rand(2, 8);
    return {
      q: `A ${m} kg object moves at ${v} m/s. What is its kinetic energy?`,
      a: 0.5 * m * v * v,
      unit: "J",
      hint: "Ek = ½mv²",
    };
  }
  if (kind === 2) {
    const f = rand(5, 20) * 10;
    const s = rand(2, 12);
    return {
      q: `A force of ${f} N moves an object ${s} m in the direction of the force. How much work is done?`,
      a: f * s,
      unit: "J",
      hint: "W = F × s",
    };
  }
  const input = rand(2, 10) * 50;
  const useful = rand(1, 8) * 20;
  const u = Math.min(useful, input);
  return {
    q: `A device takes in ${input} J and usefully transfers ${u} J. What is the efficiency as a percentage?`,
    a: (u / input) * 100,
    unit: "%",
    hint: "efficiency = useful ÷ input × 100",
  };
}

function closeEnough(user: string, answer: number) {
  const n = Number(user);
  if (!Number.isFinite(n)) return false;
  return Math.abs(n - answer) < 0.51 || Math.abs(n - answer) / Math.max(1, Math.abs(answer)) < 0.02;
}

export function FormulaBlitz() {
  const [items, setItems] = useState<Item[]>([]);
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<"ok" | "no" | null>(null);
  const current = items[i];
  const finished = items.length > 0 && i >= items.length;

  function start() {
    setItems(Array.from({ length: 8 }, () => makeItem()));
    setI(0);
    setTyped("");
    setScore(0);
    setFeedback(null);
  }

  function submit() {
    if (!current || feedback) return;
    const ok = closeEnough(typed, current.a);
    setFeedback(ok ? "ok" : "no");
    if (ok) setScore((s) => s + 1);
    saveQuizResults([{ cat: "energy", q: current.q, correct: ok }]);
  }

  function next() {
    setI((n) => n + 1);
    setTyped("");
    setFeedback(null);
  }

  return (
    <div>
      <p className="text-sm text-muted">Eight quick calculations from the energy pack. Units are given — type the number only.</p>
      {items.length === 0 || finished ? (
        <div className="mt-5">
          {finished && (
            <p className="mb-4 rounded-[var(--radius-sm)] border border-border bg-bg px-4 py-3 text-sm">
              Score {score} / {items.length}. {score >= 7 ? "A-range accuracy." : "Redo until the formulas feel automatic."}
            </p>
          )}
          <Button variant="action" onClick={start}>
            Start formula blitz
          </Button>
        </div>
      ) : (
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {i + 1} / {items.length} · {current!.hint}
          </p>
          <p className="mt-2 text-lg font-semibold">{current!.q}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <input
              className="h-11 w-40 rounded-[var(--radius-md)] border border-border bg-bg px-3 font-mono text-sm"
              value={typed}
              inputMode="decimal"
              placeholder="Number"
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") feedback ? next() : submit();
              }}
            />
            <span className="self-center text-sm text-muted">{current!.unit}</span>
            {!feedback ? (
              <Button variant="action" onClick={submit}>
                Check
              </Button>
            ) : (
              <Button variant="action" onClick={next}>
                Next
              </Button>
            )}
          </div>
          {feedback && (
            <p className={cn("mt-3 text-sm font-semibold", feedback === "ok" ? "text-success" : "text-danger")}>
              {feedback === "ok" ? "Correct." : `Answer: ${current!.a} ${current!.unit}`}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
