import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { loadTimetable, saveTimetable } from "@/lib/science/store";
import type { TimetableEvent } from "@/lib/science/types";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

function getMonday(date: Date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

function dateKey(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatTime(hour: number, minute = 0) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const display = ((hour + 11) % 12) + 1;
  return `${display}:${String(minute).padStart(2, "0")} ${suffix}`;
}

export function CalendarPanel() {
  const [offset, setOffset] = useState(0);
  const [events, setEvents] = useState<Record<string, TimetableEvent>>({});
  const [modal, setModal] = useState<{ date: string; hour: number; editKey?: string } | null>(null);
  const [range, setRange] = useState(7);
  const [form, setForm] = useState({
    name: "",
    type: "study" as TimetableEvent["type"],
    startHour: 8,
    startMinute: 0,
    endHour: 9,
    endMinute: 0,
  });

  useEffect(() => {
    setEvents(loadTimetable());
  }, []);

  const monday = useMemo(() => {
    const m = getMonday(new Date());
    m.setDate(m.getDate() + offset * 7);
    return m;
  }, [offset]);

  const weekLabel = `${monday.toLocaleDateString(undefined, { day: "numeric", month: "short" })} – ${new Date(
    monday.getTime() + 6 * 86400000,
  ).toLocaleDateString(undefined, { day: "numeric", month: "short" })}`;

  const upcoming = useMemo(() => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + range);
    return Object.entries(events)
      .map(([key, ev]) => ({ ...ev, key, d: new Date(ev.date + "T00:00:00") }))
      .filter((ev) => ev.d >= start && ev.d < end)
      .sort(
        (a, b) =>
          a.d.getTime() - b.d.getTime() ||
          a.startHour - b.startHour ||
          a.startMinute - b.startMinute,
      );
  }, [events, range]);

  function persist(next: Record<string, TimetableEvent>) {
    setEvents(next);
    saveTimetable(next);
  }

  function open(date: string, hour: number, editKey?: string) {
    const existing = editKey ? events[editKey] : undefined;
    setForm({
      name: existing?.name ?? "",
      type: existing?.type ?? "study",
      startHour: existing ? existing.startHour : hour,
      startMinute: existing?.startMinute ?? 0,
      endHour: existing ? existing.endHour : Math.min(hour + 1, 22),
      endMinute: existing?.endMinute ?? 0,
    });
    setModal({ date, hour, editKey });
  }

  function save() {
    if (!modal) return;
    const name = form.name.trim();
    if (!name) return alert("Please enter an event name.");
    if (form.endHour * 60 + form.endMinute <= form.startHour * 60 + form.startMinute) {
      return alert("The end time must be after the start time.");
    }
    const key = modal.editKey || `${modal.date}-${Date.now()}`;
    persist({
      ...events,
      [key]: {
        date: modal.date,
        name,
        type: form.type,
        startHour: form.startHour,
        startMinute: form.startMinute,
        endHour: form.endHour,
        endMinute: form.endMinute,
      },
    });
    setModal(null);
  }

  function remove(key: string) {
    const next = { ...events };
    delete next[key];
    persist(next);
  }

  const minutesPerDay = (22 - 8) * 60;
  const trackHeight = 720;
  const pxPerMinute = trackHeight / minutesPerDay;

  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-4 shadow-lg md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button onClick={() => setOffset((o) => o - 1)}>Previous</Button>
        <h2 className="flex-1 text-center text-lg font-bold">{weekLabel}</h2>
        <Button onClick={() => setOffset((o) => o + 1)}>Next</Button>
      </div>
      <div className="mt-3 flex justify-center">
        <Button onClick={() => setOffset(0)}>This week</Button>
      </div>
      <p className="mt-3 text-sm text-muted">
        Click a day column to add a class, study block or assessment. Everything saves on this device.
      </p>

      <div className="mt-4 rounded-[var(--radius-md)] border border-border bg-bg p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-bold">Upcoming</h3>
            <p className="text-xs text-muted">
              {upcoming.length} event{upcoming.length === 1 ? "" : "s"}
            </p>
          </div>
          <select
            className="h-10 rounded-[var(--radius-md)] border border-border bg-surface px-3 text-sm"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
          >
            <option value={7}>Next 7 days</option>
            <option value={14}>Next 2 weeks</option>
            <option value={30}>Next month</option>
          </select>
        </div>
        {upcoming.length === 0 ? (
          <p className="text-sm text-muted">Nothing scheduled in this range.</p>
        ) : (
          upcoming.map((ev) => (
            <button
              key={ev.key}
              type="button"
              onClick={() => {
                const d = new Date(ev.date + "T00:00:00");
                const diff = Math.round((d.getTime() - monday.getTime()) / 86400000);
                setOffset((o) => o + Math.round(diff / 7));
              }}
              className="mb-2 flex w-full items-center justify-between rounded-[var(--radius-sm)] border-l-4 border-primary bg-surface-hover px-3 py-2 text-left text-sm"
            >
              <strong>{ev.name}</strong>
              <span className="text-xs text-muted">
                {ev.d.toLocaleDateString(undefined, { weekday: "short", day: "numeric", month: "short" })} ·{" "}
                {formatTime(ev.startHour, ev.startMinute)}
              </span>
            </button>
          ))
        )}
      </div>

      <div className="mt-4 overflow-x-auto rounded-[var(--radius-md)] border border-border">
        <div className="relative min-w-[900px]" style={{ height: 44 + trackHeight }}>
          <div className="grid grid-cols-[72px_repeat(7,minmax(0,1fr))]">
            <div className="sticky top-0 z-10 border-b border-r border-border bg-surface px-2 py-3 text-center text-sm font-bold">
              Time
            </div>
            {DAYS.map((day, idx) => {
              const d = new Date(monday);
              d.setDate(d.getDate() + idx);
              return (
                <div
                  key={day}
                  className="sticky top-0 z-10 border-b border-r border-border bg-surface px-2 py-2 text-center text-sm font-bold"
                >
                  {day}
                  <span className="mt-0.5 block text-xs font-normal text-muted">
                    {d.toLocaleDateString(undefined, { day: "numeric", month: "short" })}
                  </span>
                </div>
              );
            })}
          </div>
          {HOURS.map((h) => (
            <div
              key={h}
              className="absolute left-0 w-[72px] border-r border-t border-border bg-surface pr-2 pt-1 text-right text-xs text-muted"
              style={{ top: 44 + (h - 8) * 60 * pxPerMinute, height: 60 }}
            >
              {formatTime(h)}
            </div>
          ))}
          {DAYS.map((day, dIdx) => {
            const d = new Date(monday);
            d.setDate(d.getDate() + dIdx);
            const date = dateKey(d);
            return (
              <div
                key={day}
                className="absolute cursor-pointer border-l border-t border-border hover:bg-primary/5"
                style={{
                  top: 44,
                  left: `calc(72px + ((100% - 72px) / 7) * ${dIdx})`,
                  width: "calc((100% - 72px) / 7)",
                  height: trackHeight,
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0, transparent 59px, var(--color-border) 60px)",
                }}
                onClick={(e) => {
                  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                  const y = Math.max(0, e.clientY - rect.top);
                  const clickedHour = Math.max(8, Math.min(21, 8 + Math.floor(y / pxPerMinute / 60)));
                  open(date, clickedHour);
                }}
              />
            );
          })}
          {Object.entries(events).map(([key, ev]) => {
            const d = new Date(ev.date + "T00:00:00");
            const diff = Math.round((d.getTime() - monday.getTime()) / 86400000);
            if (diff < 0 || diff > 6) return null;
            const startMinutes = Math.max(0, (ev.startHour - 8) * 60 + ev.startMinute);
            const endMinutes = Math.min(minutesPerDay, (ev.endHour - 8) * 60 + ev.endMinute);
            const duration = Math.max(15, endMinutes - startMinutes);
            const color =
              ev.type === "exam" ? "bg-danger text-white" : ev.type === "study" ? "bg-secondary text-white" : "bg-primary text-primary-foreground";
            return (
              <div
                key={key}
                className={`absolute z-10 overflow-hidden rounded-md px-2 py-1 text-xs font-bold ${color}`}
                style={{
                  left: `calc(72px + ((100% - 72px) / 7) * ${diff} + 4px)`,
                  width: "calc((100% - 72px) / 7 - 8px)",
                  top: 44 + startMinutes * pxPerMinute,
                  height: Math.max(24, duration * pxPerMinute - 3),
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  open(ev.date, ev.startHour, key);
                }}
              >
                <span className="block truncate pr-5">{ev.name}</span>
                <button
                  type="button"
                  className="absolute right-1 top-1 rounded bg-black/20 px-1 text-[10px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    remove(key);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-md rounded-[var(--radius-lg)] border border-border bg-surface p-6">
            <h3 className="text-lg font-bold">{modal.editKey ? "Edit event" : "Add event"}</h3>
            <label className="mt-4 block text-xs text-muted">
              Event name
              <input
                className="mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm text-foreground"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <label className="text-xs text-muted">
                Start hour
                <input
                  type="number"
                  min={8}
                  max={22}
                  className="mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm"
                  value={form.startHour}
                  onChange={(e) => setForm({ ...form, startHour: Number(e.target.value) })}
                />
              </label>
              <label className="text-xs text-muted">
                Start minute
                <select
                  className="mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm"
                  value={form.startMinute}
                  onChange={(e) => setForm({ ...form, startMinute: Number(e.target.value) })}
                >
                  <option value={0}>00</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                  <option value={45}>45</option>
                </select>
              </label>
              <label className="text-xs text-muted">
                End hour
                <input
                  type="number"
                  min={8}
                  max={22}
                  className="mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm"
                  value={form.endHour}
                  onChange={(e) => setForm({ ...form, endHour: Number(e.target.value) })}
                />
              </label>
              <label className="text-xs text-muted">
                End minute
                <select
                  className="mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm"
                  value={form.endMinute}
                  onChange={(e) => setForm({ ...form, endMinute: Number(e.target.value) })}
                >
                  <option value={0}>00</option>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                  <option value={45}>45</option>
                </select>
              </label>
            </div>
            <label className="mt-3 block text-xs text-muted">
              Type
              <select
                className="mt-1 h-11 w-full rounded-[var(--radius-md)] border border-border bg-bg px-3 text-sm"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value as TimetableEvent["type"] })}
              >
                <option value="class">School class (blue)</option>
                <option value="study">Study block (green)</option>
                <option value="exam">Assessment / exam (red)</option>
              </select>
            </label>
            <div className="mt-5 flex gap-3">
              <Button variant="action" className="flex-1" onClick={save}>
                Save
              </Button>
              <Button className="flex-1" onClick={() => setModal(null)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
