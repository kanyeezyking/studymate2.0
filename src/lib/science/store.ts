import type { CatStats, TimetableEvent, TopicId } from "./types";
import { TOPIC_ORDER } from "./topics";

const STATS_KEY = "year9-sciStats";
const QSTATS_KEY = "year9-sciQuestionStats";
const TT_KEY = "year9-sciTimetable";

function emptyStats(): Record<TopicId, CatStats> {
  return Object.fromEntries(TOPIC_ORDER.map((cat) => [cat, { c: 0, t: 0 }])) as Record<
    TopicId,
    CatStats
  >;
}

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function loadStats(): Record<TopicId, CatStats> {
  const stored = readJson<Partial<Record<TopicId, CatStats>>>(STATS_KEY, {});
  const base = emptyStats();
  for (const cat of TOPIC_ORDER) {
    if (stored[cat]) base[cat] = stored[cat]!;
  }
  return base;
}

export function loadQuestionStats(): Record<string, CatStats> {
  return readJson(QSTATS_KEY, {});
}

export function saveQuizResults(
  updates: { cat: TopicId; q: string; correct: boolean }[],
) {
  const stats = loadStats();
  const qStats = loadQuestionStats();
  for (const u of updates) {
    if (!stats[u.cat]) stats[u.cat] = { c: 0, t: 0 };
    stats[u.cat].t += 1;
    if (u.correct) stats[u.cat].c += 1;
    if (!qStats[u.q]) qStats[u.q] = { c: 0, t: 0 };
    qStats[u.q].t += 1;
    if (u.correct) qStats[u.q].c += 1;
  }
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  localStorage.setItem(QSTATS_KEY, JSON.stringify(qStats));
}

export function clearStats() {
  localStorage.removeItem(STATS_KEY);
  localStorage.removeItem(QSTATS_KEY);
}

export function loadTimetable(): Record<string, TimetableEvent> {
  return readJson(TT_KEY, {});
}

export function saveTimetable(events: Record<string, TimetableEvent>) {
  localStorage.setItem(TT_KEY, JSON.stringify(events));
}
