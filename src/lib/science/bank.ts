import { existingQuestions } from "@/data/existing-questions";
import { extraQuestions } from "@/data/extra-questions";
import { catNames, TOPIC_ORDER } from "./topics";
import type { Question, TopicId } from "./types";

export const qBank: Question[] = [...existingQuestions, ...extraQuestions];

export function questionsFor(topic: TopicId | "all"): Question[] {
  if (topic === "all") return qBank;
  return qBank.filter((q) => q.cat === topic);
}

export function topicCounts() {
  const counts: Partial<Record<TopicId, number>> = {};
  for (const q of qBank) {
    const cat = q.cat as TopicId;
    counts[cat] = (counts[cat] ?? 0) + 1;
  }
  return TOPIC_ORDER.map((id) => ({
    id,
    name: catNames[id],
    count: counts[id] ?? 0,
  }));
}
