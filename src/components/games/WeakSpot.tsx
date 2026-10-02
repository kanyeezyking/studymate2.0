import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { qBank } from "@/lib/science/bank";
import { loadQuestionStats, saveQuizResults } from "@/lib/science/store";
import { catNames } from "@/lib/science/topics";
import type { Question, TopicId } from "@/lib/science/types";
import { answersMatch, shuffle } from "@/lib/utils";

export function WeakSpot() {
  const weak = useMemo(() => {
    const stats = loadQuestionStats();
    const ranked = qBank
      .map((q) => {
        const s = stats[q.q];
        const rate = s && s.t > 0 ? s.c / s.t : null;
        return { q, rate, t: s?.t ?? 0 };
      })
      .filter((x) => x.t > 0 && (x.rate ?? 1) < 0.75)
      .sort((a, b) => (a.rate ?? 0) - (b.rate ?? 0) || b.t - a.t);
    const unseen = qBank.filter((q) => !stats[q.q] || stats[q.q]!.t === 0);
    const pool = [...ranked.map((r) => r.q), ...shuffle(unseen).slice(0, 6)];
    return shuffle(pool).slice(0, 10);
  }, []);

  const [items, setItems] = useState<Question[]>(weak);
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const [choice, setChoice] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const current = items[i];
  const finished = items.length > 0 && i >= items.length;

  function mark(answer: string) {
    if (!current || revealed) return;
    const ok = answersMatch(answer, current.a);
    setRevealed(true);
    if (ok) setScore((s) => s + 1);
    saveQuizResults([{ cat: current.cat as TopicId, q: current.q, correct: ok }]);
  }

  function next() {
    setI((n) => n + 1);
    setTyped("");
    setChoice(null);
    setRevealed(false);
  }

  if (items.length === 0) {
    return (
      <p className="text-sm text-muted">
        No weak spots yet. Sit a quiz or a game first — StudyMate will pull the questions you miss into this drill.
      </p>
    );
  }

  if (finished) {
    return (
      <div>
        <p className="text-sm">
          {score} / {items.length} on your weakest mix.
        </p>
        <Button
          variant="action"
          className="mt-4"
          onClick={() => {
            setItems(shuffle(weak));
            setI(0);
            setScore(0);
            setRevealed(false);
          }}
        >
          Drill again
        </Button>
      </div>
    );
  }

  const accepted = Array.isArray(current!.a) ? current!.a[0] : current!.a;
  const ok = revealed && answersMatch(choice || typed, current!.a);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        {i + 1} / {items.length} · {catNames[current!.cat as TopicId] ?? current!.cat}
      </p>
      <p className="mt-2 text-lg font-semibold">{current!.q}</p>
      {current!.type === "mcq" && current!.options ? (
        <div className="mt-4 grid gap-2">
          {current!.options.map((opt) => (
            <Button
              key={opt}
              className="w-full justify-start"
              variant={revealed && opt === accepted ? "action" : "outline"}
              onClick={() => {
                setChoice(opt);
                mark(opt);
              }}
            >
              {opt}
            </Button>
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-wrap gap-2">
          <input
            className="h-11 min-w-48 flex-1 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            disabled={revealed}
            placeholder="Type the answer"
          />
          <Button variant="action" onClick={() => mark(typed)} disabled={revealed}>
            Check
          </Button>
        </div>
      )}
      {revealed && (
        <div className="mt-4">
          <p className={`text-sm font-semibold ${ok ? "text-success" : "text-danger"}`}>
            {ok ? "Correct" : `Accepted: ${accepted}`}
          </p>
          <Button className="mt-3" variant="action" onClick={next}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
