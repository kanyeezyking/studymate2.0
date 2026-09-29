import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { qBank, questionsFor } from "@/lib/science/bank";
import { saveQuizResults } from "@/lib/science/store";
import { catNames, TOPIC_ORDER } from "@/lib/science/topics";
import type { Question, TopicId } from "@/lib/science/types";
import { answersMatch, shuffle } from "@/lib/utils";

type QuizItem = Question & { userAns?: string; answered?: boolean };

export function QuizPanel() {
  const [topic, setTopic] = useState<TopicId | "all">("all");
  const [length, setLength] = useState(10);
  const [items, setItems] = useState<QuizItem[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const available = useMemo(() => questionsFor(topic).length, [topic]);

  function start() {
    const pool = shuffle(questionsFor(topic));
    const n = Math.min(length, pool.length);
    setItems(pool.slice(0, n).map((q) => ({ ...q, options: q.options ? shuffle(q.options) : q.options })));
    setSubmitted(false);
    setScore(null);
  }

  function setAnswer(i: number, value: string) {
    if (submitted) return;
    setItems((prev) => prev.map((q, idx) => (idx === i ? { ...q, userAns: value, answered: true } : q)));
  }

  function submit() {
    const updates = items
      .filter((q) => q.answered)
      .map((q) => ({
        cat: q.cat as TopicId,
        q: q.q,
        correct: answersMatch(q.userAns || "", q.a),
      }));
    if (updates.length) saveQuizResults(updates);
    setSubmitted(true);
    setScore(updates.filter((u) => u.correct).length);
  }

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-lg md:p-8">
      <h2 className="text-xl font-bold text-foreground">Generate a smart quiz</h2>
      <p className="mt-2 text-sm text-muted">
        {qBank.length} questions from your Year 9 packs. Results save to Performance.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <select
          className="h-11 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm text-foreground"
          value={topic}
          onChange={(e) => setTopic(e.target.value as TopicId | "all")}
          aria-label="Quiz topic"
        >
          <option value="all">Mix all topics ({qBank.length})</option>
          {TOPIC_ORDER.map((id) => (
            <option key={id} value={id}>
              {catNames[id]}
            </option>
          ))}
        </select>
        <select
          className="h-11 rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm text-foreground"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          aria-label="Quiz length"
        >
          <option value={5}>5 questions</option>
          <option value={10}>10 questions</option>
          <option value={20}>20 questions</option>
        </select>
        <Button variant="action" onClick={start} disabled={available === 0}>
          Start quiz
        </Button>
      </div>

      {items.length === 0 ? (
        <p className="mt-8 text-sm text-muted">Choose a topic and start a quiz to begin.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {score !== null && (
            <div className="rounded-[var(--radius-md)] border border-success/40 bg-success/10 px-4 py-3 text-success">
              Saved {score} / {items.filter((q) => q.answered).length} correct. Check Performance for weak spots.
            </div>
          )}
          {items.map((q, i) => {
            const correct = submitted && answersMatch(q.userAns || "", q.a);
            const showAnswer = submitted && q.answered;
            return (
              <article
                key={`${q.q}-${i}`}
                className="rounded-[var(--radius-md)] border border-border bg-bg p-4 md:p-5"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  {catNames[q.cat as TopicId] ?? q.cat}
                </span>
                <p className="mt-2 font-semibold text-foreground">
                  {i + 1}. {q.q}
                </p>
                {q.type === "mcq" && q.options ? (
                  <div className="mt-3 grid gap-2">
                    {q.options.map((opt) => {
                      let cls = "mcq";
                      if (showAnswer && opt === (Array.isArray(q.a) ? q.a[0] : q.a)) cls = "correct";
                      else if (showAnswer && opt === q.userAns && !correct) cls = "incorrect";
                      return (
                        <button
                          key={opt}
                          type="button"
                          disabled={submitted}
                          onClick={() => setAnswer(i, opt)}
                          className={[
                            "w-full rounded-[var(--radius-sm)] border px-4 py-3 text-left text-sm font-semibold transition-colors",
                            cls === "correct"
                              ? "border-success bg-success text-white"
                              : cls === "incorrect"
                                ? "border-danger bg-danger text-white"
                                : q.userAns === opt
                                  ? "border-primary bg-primary/15 text-foreground"
                                  : "border-border bg-surface-hover text-foreground hover:border-primary",
                          ].join(" ")}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <input
                    className="written-input mt-3 h-11 w-full rounded-[var(--radius-md)] border border-border bg-surface px-3 text-sm text-foreground"
                    placeholder="Type your answer"
                    value={q.userAns ?? ""}
                    disabled={submitted}
                    onChange={(e) => setAnswer(i, e.target.value)}
                  />
                )}
                {showAnswer && (
                  <p
                    className={`mt-3 rounded-[var(--radius-sm)] border px-3 py-2 text-sm font-bold ${
                      correct
                        ? "border-success bg-success/15 text-success"
                        : "border-danger bg-danger/15 text-danger"
                    }`}
                  >
                    {correct
                      ? "Correct"
                      : `Incorrect. The accepted answer is: ${Array.isArray(q.a) ? q.a[0] : q.a}`}
                  </p>
                )}
              </article>
            );
          })}
          {!submitted && (
            <Button variant="action" size="full" onClick={submit}>
              Submit answers and save progress
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
