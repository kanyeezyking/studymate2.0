import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { questionsFor } from "@/lib/science/bank";
import { catNames, TOPIC_ORDER } from "@/lib/science/topics";
import type { Question, TopicId } from "@/lib/science/types";
import { shuffle } from "@/lib/utils";

export function GamesPanel() {
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-5 shadow-lg md:p-8">
      <h2 className="text-xl font-bold">Study games</h2>
      <p className="mt-2 text-sm text-muted">
        Flashcards and a 60-second sprint using the same question bank as the quizzes.
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Flashcards />
        <SpeedRound />
      </div>
    </div>
  );
}

function Flashcards() {
  const [topic, setTopic] = useState<TopicId | "all">("all");
  const [cards, setCards] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);

  function start() {
    const pool = shuffle(questionsFor(topic)).slice(0, 15);
    setCards(pool);
    setI(0);
    setShow(false);
  }

  const card = cards[i];
  const answer = card ? (Array.isArray(card.a) ? card.a[0] : card.a) : "";

  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-bg p-5">
      <h3 className="font-bold">Flashcard trainer</h3>
      <p className="mt-1 text-sm text-muted">Think of the answer, then reveal it.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <select
          className="h-11 flex-1 rounded-[var(--radius-md)] border border-border bg-surface px-3 text-sm"
          value={topic}
          onChange={(e) => setTopic(e.target.value as TopicId | "all")}
        >
          <option value="all">All topics</option>
          {TOPIC_ORDER.map((id) => (
            <option key={id} value={id}>
              {catNames[id]}
            </option>
          ))}
        </select>
        <Button variant="action" onClick={start}>
          Start
        </Button>
      </div>
      {card ? (
        <>
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="mt-4 flex min-h-[200px] w-full flex-col items-center justify-center rounded-[var(--radius-lg)] border border-border bg-surface px-6 py-8 text-center"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              {show ? "Answer" : "Question"} · {i + 1}/{cards.length}
            </span>
            <span className="mt-3 text-lg font-bold">{show ? answer : card.q}</span>
            <span className="mt-3 text-sm text-secondary">{show ? "Click to hide" : "Click to reveal"}</span>
          </button>
          <div className="mt-3 flex gap-2">
            <Button onClick={() => { setI((i - 1 + cards.length) % cards.length); setShow(false); }}>
              Previous
            </Button>
            <Button variant="action" onClick={() => setShow((s) => !s)}>
              Reveal / hide
            </Button>
            <Button className="ml-auto" onClick={() => { setI((i + 1) % cards.length); setShow(false); }}>
              Next
            </Button>
          </div>
        </>
      ) : (
        <p className="mt-6 text-sm text-muted">Press start to deal a pack of up to 15 cards.</p>
      )}
    </div>
  );
}

function SpeedRound() {
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [active, setActive] = useState(false);
  const [pool, setPool] = useState<Question[]>([]);
  const [current, setCurrent] = useState<Question | null>(null);

  useEffect(() => {
    if (!active) return;
    const id = window.setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          setActive(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [active]);

  function deal(from: Question[]) {
    const next = from[from.length - 1];
    const rest = from.slice(0, -1);
    setCurrent(next ?? null);
    setPool(rest.length ? rest : shuffle(questionsFor("all").filter((q) => q.type === "mcq")));
  }

  function start() {
    const nextPool = shuffle(questionsFor("all").filter((q) => q.type === "mcq"));
    setTime(60);
    setScore(0);
    setStreak(0);
    setActive(true);
    deal(nextPool);
  }

  function answer(opt: string) {
    if (!active || !current) return;
    const right = opt === (Array.isArray(current.a) ? current.a[0] : current.a);
    if (right) {
      setScore((s) => s + 1);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
    window.setTimeout(() => deal(pool), 160);
  }

  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-bg p-5">
      <h3 className="font-bold">60-second science sprint</h3>
      <p className="mt-1 text-sm text-muted">Answer as many multiple-choice questions as you can.</p>
      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <Stat label="Time" value={String(time)} />
        <Stat label="Score" value={String(score)} />
        <Stat label="Streak" value={String(streak)} />
      </div>
      <Button variant="action" className="mt-4" onClick={start}>
        Start 60-second round
      </Button>
      <div className="mt-4">
        {active && current ? (
          <>
            <p className="min-h-16 text-base font-bold">{current.q}</p>
            <div className="mt-3 grid gap-2">
              {(current.options ?? []).map((opt) => (
                <Button key={opt} className="w-full justify-start" onClick={() => answer(opt)}>
                  {opt}
                </Button>
              ))}
            </div>
          </>
        ) : !active && time === 0 ? (
          <p className="rounded-[var(--radius-sm)] border border-success bg-success/15 p-3 text-success">
            Time. Final score: <strong>{score}</strong>
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-[var(--radius-sm)] bg-surface-hover px-3 py-2">
      <span className="text-muted">{label}</span>
      <strong className="font-mono">{value}</strong>
    </div>
  );
}
