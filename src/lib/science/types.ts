export type QuestionType = "mcq" | "text";

export type SubjectId = "science" | "maths";

export type Question = {
  cat: string;
  type: QuestionType;
  q: string;
  options?: string[];
  a: string | string[];
  source?: string;
};

export type TopicId =
  | "energy"
  | "heat"
  | "sound"
  | "electricity"
  | "light"
  | "emspectrum"
  | "radioactivity"
  | "physics"
  | "reproduction"
  | "chemistry"
  | "carbon"
  | "body"
  | "tpform"
  | "intercepts"
  | "factorform"
  | "expanding"
  | "factorising"
  | "completedsquare"
  | "quadraticformula";

export type CatStats = { c: number; t: number };

export type TimetableEvent = {
  date: string;
  name: string;
  type: "class" | "study" | "exam";
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
};

export type NoteBlock = {
  heading: string;
  body: string[];
};

export type Formula = {
  name: string;
  formula: string;
  note?: string;
};

export type GlossaryItem = {
  term: string;
  def: string;
};

export type NoteSection = {
  id: string;
  topic: TopicId;
  title: string;
  pack: string;
  sources: string[];
  summary: string;
  blocks: NoteBlock[];
  formulas?: Formula[];
  glossary?: GlossaryItem[];
  worked?: { q: string; a: string }[];
};
