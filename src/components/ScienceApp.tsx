import type { ReactNode } from "react";
import { useState } from "react";
import { BarChart3, BookOpenText, CalendarDays, FlaskConical, Gamepad2, PenLine } from "lucide-react";
import { CalendarPanel } from "@/components/CalendarPanel";
import { GamesPanel } from "@/components/GamesPanel";
import { NotesPanel } from "@/components/NotesPanel";
import { PerformancePanel } from "@/components/PerformancePanel";
import { QuizPanel } from "@/components/QuizPanel";
import { Button } from "@/components/ui/button";
import { qBank } from "@/lib/science/bank";
import { noteSections } from "@/data/notes";
import { cn } from "@/lib/utils";

type MainTab = "science" | "analytics" | "timetable";
type SubTab = "quizzes" | "material" | "games";

export function ScienceApp() {
  const [main, setMain] = useState<MainTab>("science");
  const [sub, setSub] = useState<SubTab>("material");

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
      <header className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Year 9 physical science</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-primary md:text-4xl">
          Year 9 Science Hub
        </h1>
        <p className="mt-2 max-w-2xl text-muted">
          Notes, quizzes and tools built from your uploaded packs — energy, light, electricity, radioactivity and the rest of the course.
        </p>
        <p className="mt-3 text-sm text-muted">
          {noteSections.length} note sections · {qBank.length} quiz questions
        </p>
      </header>

      <nav className="mb-6 flex gap-3 overflow-x-auto rounded-[var(--radius-lg)] border border-border bg-surface p-3 shadow-lg">
        <NavBtn
          active={main === "science"}
          onClick={() => setMain("science")}
          icon={<FlaskConical className="size-4" />}
          label="Science revision"
        />
        <NavBtn
          active={main === "analytics"}
          onClick={() => setMain("analytics")}
          icon={<BarChart3 className="size-4" />}
          label="My performance"
        />
        <NavBtn
          active={main === "timetable"}
          onClick={() => setMain("timetable")}
          icon={<CalendarDays className="size-4" />}
          label="Calendar"
        />
      </nav>

      {main === "science" && (
        <div className="fade-in">
          <div className="mb-5 flex flex-wrap gap-2">
            <NavBtn
              active={sub === "material"}
              onClick={() => setSub("material")}
              icon={<BookOpenText className="size-4" />}
              label="Study notes"
              compact
            />
            <NavBtn
              active={sub === "quizzes"}
              onClick={() => setSub("quizzes")}
              icon={<PenLine className="size-4" />}
              label="Dynamic quizzes"
              compact
            />
            <NavBtn
              active={sub === "games"}
              onClick={() => setSub("games")}
              icon={<Gamepad2 className="size-4" />}
              label="Study games"
              compact
            />
          </div>
          {sub === "material" && <NotesPanel />}
          {sub === "quizzes" && <QuizPanel />}
          {sub === "games" && <GamesPanel />}
        </div>
      )}
      {main === "analytics" && (
        <div className="fade-in">
          <PerformancePanel />
        </div>
      )}
      {main === "timetable" && (
        <div className="fade-in">
          <CalendarPanel />
        </div>
      )}
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
    <Button
      variant={active ? "default" : "outline"}
      size={compact ? "sm" : "default"}
      onClick={onClick}
      className={cn("shrink-0", compact && "h-10")}
    >
      {icon}
      {label}
    </Button>
  );
}
