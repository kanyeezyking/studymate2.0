import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const N = 64;

function seedAtoms() {
  return Array.from({ length: N }, () => true);
}

export function DecayLab() {
  const [atoms, setAtoms] = useState<boolean[]>(() => seedAtoms());
  const [steps, setSteps] = useState(0);
  const [half, setHalf] = useState(5730);
  const remaining = atoms.filter(Boolean).length;
  const expected = useMemo(() => N * Math.pow(0.5, steps), [steps]);

  function step() {
    setAtoms((prev) => prev.map((alive) => (alive ? Math.random() >= 0.5 : false)));
    setSteps((s) => s + 1);
  }

  return (
    <section>
      <p className="text-sm text-muted">
        Each nucleus has a 50% chance of decaying each half-life. You cannot predict which atom, only the fraction left.
      </p>
      <div className="mt-4 grid grid-cols-8 gap-1.5 rounded-[var(--radius-md)] border border-border bg-bg p-3">
        {atoms.map((alive, i) => (
          <span
            key={i}
            className={`aspect-square rounded-full ${alive ? "bg-primary" : "bg-surface-hover"}`}
            title={alive ? "Undecayed" : "Decayed"}
          />
        ))}
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <Fact label="Half-lives passed" value={String(steps)} />
        <Fact label="Nuclei left" value={`${remaining} / ${N}`} />
        <Fact label="Expected remaining" value={expected.toFixed(1)} />
      </div>
      <label className="mt-4 block text-xs font-semibold text-muted">
        Half-life (years, carbon-14 is 5730)
        <input
          className="mt-1 h-11 w-full rounded-[var(--radius-sm)] border border-border bg-bg px-3 text-sm sm:max-w-xs"
          value={half}
          onChange={(e) => setHalf(Number(e.target.value) || 0)}
        />
      </label>
      <p className="mt-2 text-sm text-muted">
        Elapsed time ≈ {steps * half} years. Remaining ≈ initial × (1/2)<sup>n</sup>.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="action" onClick={step}>
          Advance one half-life
        </Button>
        <Button
          onClick={() => {
            setAtoms(seedAtoms());
            setSteps(0);
          }}
        >
          Reset sample
        </Button>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-border bg-bg px-3 py-3">
      <p className="text-[11px] uppercase tracking-wide text-muted">{label}</p>
      <p className="font-mono text-lg font-bold tabular-nums text-primary">{value}</p>
    </div>
  );
}
