import { useState } from "react";
import { Button } from "@/components/ui/button";
import { saveQuizResults } from "@/lib/science/store";
import { cn, shuffle } from "@/lib/utils";

const ORDER = ["Radio", "Microwave", "Infrared", "Visible", "Ultraviolet", "X-ray", "Gamma"] as const;

export function SpectrumSort() {
  const [items, setItems] = useState<string[]>(() => shuffle([...ORDER]));
  const [checked, setChecked] = useState(false);
  const correct = items.every((v, i) => v === ORDER[i]);

  function move(i: number, dir: -1 | 1) {
    if (checked) return;
    const j = i + dir;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    const a = next[i]!;
    next[i] = next[j]!;
    next[j] = a;
    setItems(next);
  }

  function mark() {
    setChecked(true);
    saveQuizResults([
      {
        cat: "emspectrum",
        q: "Order the EM spectrum from longest wavelength to shortest",
        correct,
      },
    ]);
  }

  return (
    <div>
      <p className="text-sm text-muted">
        Longest wavelength at the top (radio), shortest at the bottom (gamma). Energy increases as you go down.
      </p>
      <ol className="mt-4 grid gap-2">
        {items.map((name, i) => {
          const right = checked && name === ORDER[i];
          const bad = checked && name !== ORDER[i];
          return (
            <li
              key={name}
              className={cn(
                "flex items-center gap-2 rounded-[var(--radius-sm)] border bg-bg px-3 py-2",
                right && "border-success",
                bad && "border-danger",
                !checked && "border-border",
              )}
            >
              <span className="w-6 font-mono text-xs text-muted">{i + 1}</span>
              <span className="flex-1 text-sm font-semibold">{name}</span>
              <Button size="sm" disabled={checked || i === 0} onClick={() => move(i, -1)}>
                Up
              </Button>
              <Button size="sm" disabled={checked || i === items.length - 1} onClick={() => move(i, 1)}>
                Down
              </Button>
            </li>
          );
        })}
      </ol>
      <div className="mt-4 flex flex-wrap gap-2">
        {!checked ? (
          <Button variant="action" onClick={mark}>
            Check order
          </Button>
        ) : (
          <>
            <p className={cn("self-center text-sm font-semibold", correct ? "text-success" : "text-danger")}>
              {correct ? "Perfect — that is the exam order." : "Not yet. Radio → microwave → IR → visible → UV → X-ray → gamma."}
            </p>
            <Button
              onClick={() => {
                setItems(shuffle([...ORDER]));
                setChecked(false);
              }}
            >
              Shuffle again
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
