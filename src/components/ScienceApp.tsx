import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  Atom,
  BarChart3,
  BookOpenText,
  CalendarDays,
  Gamepad2,
  PenLine,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { CalendarPanel } from "@/components/CalendarPanel";
import { GamesPanel } from "@/components/GamesPanel";
import { LabsPanel } from "@/components/LabsPanel";
import { NotesPanel } from "@/components/NotesPanel";
import { PerformancePanel } from "@/components/PerformancePanel";
import { QuizPanel } from "@/components/QuizPanel";
import { qBank } from "@/lib/science/bank";
import { noteSections } from "@/data/notes";
import { cn } from "@/lib/utils";

type Tab = "notes" | "quizzes" | "labs" | "games" | "stats" | "calendar";

const TABS: { id: Tab; label: string; icon: typeof BookOpenText }[] = [
  { id: "notes", label: "Notes", icon: BookOpenText },
  { id: "quizzes", label: "Quizzes", icon: PenLine },
  { id: "labs", label: "Labs", icon: Atom },
  { id: "games", label: "Games", icon: Gamepad2 },
  { id: "stats", label: "Progress", icon: BarChart3 },
  { id: "calendar", label: "Planner", icon: CalendarDays },
];

export function ScienceApp() {
  const [tab, setTab] = useState<Tab>("notes");
  const [quizTopic, setQuizTopic] = useState<"all" | string>("all");
  const counts = useMemo(
    () => ({ notes: noteSections.length, questions: qBank.length }),
    [],
  );

  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-border px-5 py-8 lg:flex">
        <Wordmark />
        <p className="mt-3 text-xs leading-relaxed text-muted">
          Year 9 science companion. Notes, labs and drills from your class packs.
        </p>
        <nav className="mt-8 flex flex-col gap-1" aria-label="StudyMate">
          {TABS.map((item) => (
            <NavBtn
              key={item.id}
              active={tab === item.id}
              onClick={() => setTab(item.id)}
              icon={<item.icon className="size-4" />}
              label={item.label}
            />
          ))}
        </nav>
        <p className="mt-auto pt-8 text-xs text-muted">
          {counts.notes} note packs · {counts.questions} questions
        </p>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-20 border-b border-border bg-bg/90 px-4 py-3 backdrop-blur-md lg:hidden">
          <Wordmark />
          <nav className="-mx-1 mt-3 flex gap-1 overflow-x-auto pb-1" aria-label="StudyMate">
            {TABS.map((item) => (
              <NavBtn
                key={item.id}
                active={tab === item.id}
                onClick={() => setTab(item.id)}
                icon={<item.icon className="size-4" />}
                label={item.label}
                compact
              />
            ))}
          </nav>
        </header>

        <div className="px-4 py-6 md:px-8 md:py-8">
          <div className="fade-in" key={tab}>
            {tab === "notes" && (
              <NotesPanel
                onDrill={(topic) => {
                  setQuizTopic(topic);
                  setTab("quizzes");
                }}
              />
            )}
            {tab === "quizzes" && <QuizPanel initialTopic={quizTopic} />}
            {tab === "labs" && <LabsPanel />}
            {tab === "games" && <GamesPanel />}
            {tab === "stats" && <PerformancePanel />}
            {tab === "calendar" && <CalendarPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <BrandMark />
      <div>
        <p className="font-display text-xl font-bold leading-none tracking-tight">
          Study<span className="text-primary">Mate</span>
        </p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">Year 9 science</p>
      </div>
    </div>
  );
}

function NavBtn({
  active,
  onClick,
  icon,
  label,
  compact,
}: {
  active: boolean;
  onClick: () => void;
  icon: ReactNode;
  label: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-sm)] border text-sm font-semibold transition-colors",
        compact ? "h-10 px-3" : "h-11 w-full px-3",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-transparent text-muted hover:border-border hover:bg-surface-hover hover:text-foreground",
      )}
    >
      {icon}
      {label}
    </button>
  );
}
