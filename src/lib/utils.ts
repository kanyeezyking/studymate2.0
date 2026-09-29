import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

export function normaliseAnswer(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ");
}

export function answersMatch(user: string, accepted: string | string[]) {
  const options = Array.isArray(accepted) ? accepted : [accepted];
  const userNorm = normaliseAnswer(user);
  const singular = (word: string) => (word.endsWith("s") ? word.slice(0, -1) : word);
  return options.some((opt) => {
    const answer = normaliseAnswer(opt);
    return userNorm === answer || singular(userNorm) === singular(answer);
  });
}
