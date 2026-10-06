import { existingQuestions } from "@/data/existing-questions";
import { extraQuestions } from "@/data/extra-questions";
import { mathQuestions } from "@/data/math-questions";
import { catNames, topicsFor, TOPIC_ORDER } from "./topics";
import type { Question, SubjectId, TopicId } from "./types";

export const qBank: Question[] = [...existingQuestions, ...extraQuestions, ...mathQuestions];

export function questionsFor(topic: TopicId | "all", subject?: SubjectId): Question[] {
  const cats = subject ? topicsFor(subject) : TOPIC_ORDER;
  const pool = qBank.filter((q) => cats.includes(q.cat as TopicId));
  if (topic === "all") return pool;
  return pool.filter((q) => q.cat === topic);
}

export function topicCounts(subject?: SubjectId) {
  const counts: Partial<Record<TopicId, number>> = {};
  for (const q of qBank) {
    const cat = q.cat as TopicId;
    counts[cat] = (counts[cat] ?? 0) + 1;
  }
  return topicsFor(subject ?? "science").map((id) => ({
    id,
    name: catNames[id],
    count: counts[id] ?? 0,
  }));
}
