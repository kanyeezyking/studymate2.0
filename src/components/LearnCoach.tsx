import { useState } from "react";
import { MATHS_LEARN } from "@/data/math-learn";
import type { Formula } from "@/lib/science/types";
import { Button } from "@/components/ui/button";

export function LearnCoach({ divId }: { divId: string }) {
  const pack = MATHS_LEARN[divId];
  if (!pack) return null;

  return (
    <section className="mt-6">
      <h4 className="text-lg font-bold">Learn this part</h4>
      <p className="mt-1 text-sm text-muted">
        The method stays open. Uncover the walkthrough one move at a time, then fix the mistake. None of this is scored.
      </p>
      <div className="mt-3 rounded-[var(--radius-sm)] border border-border bg-surface p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-primary">Method</p>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-foreground/90">
          {pack.method.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
      <Walkthrough prompt={pack.prompt} steps={pack.steps} answer={pack.answer} />
      <Mistake wrong={pack.wrong} fix={pack.fix} />
    </section>
  );
}

function Walkthrough({ prompt, steps, answer }: { prompt: string; steps: string[]; answer: string }) {
  const [shown, setShown] = useState(0);
  const done = shown >= steps.length;
  const answered = shown > steps.length;

  return (
    <div className="mt-3 rounded-[var(--radius-sm)] border border-border bg-bg p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-primary">Walkthrough</p>
      <p className="mt-2 text-sm font-semibold">{prompt}</p>
      {shown > 0 && (
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm">
          {steps.slice(0, shown).map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      )}
      {answered && <p className="mt-3 text-sm text-secondary">{answer}</p>}
      <div className="mt-3 flex flex-wrap gap-2">
        {!answered && (
          <Button
            variant="action"
            onClick={() => setShown((n) => n + 1)}
          >
            {shown === 0 ? "Show the first move" : done ? "Show the answer" : "Show the next move"}
          </Button>
        )}
        {shown > 0 && (
          <Button variant="ghost" onClick={() => setShown(0)}>
            Cover it again
          </Button>
        )}
      </div>
    </div>
  );
}

function Mistake({ wrong, fix }: { wrong: string; fix: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 rounded-[var(--radius-sm)] border border-border bg-bg p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-primary">Spot the mistake</p>
      <p className="mt-2 text-sm font-semibold">{wrong}</p>
      {open ? (
        <p className="mt-3 text-sm text-secondary">{fix}</p>
      ) : (
        <Button variant="outline" className="mt-3" onClick={() => setOpen(true)}>
          Show the fix
        </Button>
      )}
      {open && (
        <Button variant="ghost" className="mt-2" onClick={() => setOpen(false)}>
          Cover it again
        </Button>
      )}
    </div>
  );
}

export function FormulaRecall({ formulas }: { formulas: Formula[] }) {
  const [covered, setCovered] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h4 className="text-lg font-bold">Formulas</h4>
        <Button
            variant="outline"
            onClick={() => {
              setCovered((value) => !value);
              setOpen(null);
            }}
          >
          {covered ? "Show the formulas" : "Cover and recall"}
        </Button>
      </div>
      <div className="mt-2 grid gap-2">
        {formulas.map((formula) => {
          const visible = !covered || open === formula.name;
          const body = (
            <>
              <p className="text-xs font-bold uppercase tracking-wide text-muted">{formula.name}</p>
              {visible ? (
                <p className="font-mono text-base text-primary">{formula.formula}</p>
              ) : (
                <p className="text-sm text-muted">Covered. Tap to reveal.</p>
              )}
              {formula.note && visible && <p className="mt-1 text-xs text-muted">{formula.note}</p>}
            </>
          );
          const className = "rounded-[var(--radius-sm)] border border-border bg-surface px-4 py-3 text-left";
          if (!covered) {
            return (
              <div key={formula.name} className={className}>
                {body}
              </div>
            );
          }
          return (
            <button
              key={formula.name}
              type="button"
              onClick={() => setOpen(open === formula.name ? null : formula.name)}
              className={className}
            >
              {body}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function WorkedRecall({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="mt-6">
      <h4 className="text-lg font-bold">Worked examples</h4>
      <p className="mt-1 text-sm text-muted">Try it before you open the working.</p>
      <div className="mt-2 space-y-3">
        {items.map((item) => (
          <WorkedCard key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}

function WorkedCard({ q, a }: { q: string; a: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-[var(--radius-sm)] border border-border bg-surface p-4">
      <p className="text-sm font-semibold">{q}</p>
      {show ? (
        <p className="mt-2 text-sm text-secondary">{a}</p>
      ) : (
        <Button variant="outline" className="mt-3" onClick={() => setShow(true)}>
          Show the working
        </Button>
      )}
    </div>
  );
}
