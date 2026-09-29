import type { TopicId } from "./types";

export const TOPIC_ORDER: TopicId[] = [
  "energy",
  "heat",
  "sound",
  "emspectrum",
  "light",
  "electricity",
  "radioactivity",
  "physics",
  "chemistry",
  "reproduction",
  "body",
  "carbon",
];

export const catNames: Record<TopicId, string> = {
  energy: "Energy & Transformations",
  heat: "Heat Transfer & Insulation",
  sound: "Sound & Waves",
  electricity: "Electricity & Circuits",
  light: "Light: Reflection, Refraction & Colour",
  emspectrum: "Electromagnetic Spectrum",
  radioactivity: "Isotopes & Radioactivity",
  physics: "Physics: Mixed",
  reproduction: "Bio: Reproduction",
  chemistry: "Chem: Atomic Structure & Reactions",
  carbon: "Earth: Carbon Cycle",
  body: "Bio: Body Regulation",
};

export const topicBlurb: Record<TopicId, string> = {
  energy: "Forms of energy, conservation, Sankey diagrams, work, GPE and KE.",
  heat: "Temperature, conduction, convection, radiation and insulation investigations.",
  sound: "Mechanical waves, amplitude, frequency and how sound travels.",
  electricity: "Current, voltage, resistance, series and parallel circuits.",
  light: "Visible light, reflection, refraction, lenses, TIR and colour.",
  emspectrum: "Radio to gamma: order, uses, hazards and wave properties.",
  radioactivity: "Isotopes, decay types, half-life and uses of radioisotopes.",
  physics: "Mixed physics recap across heat, energy, electricity and light.",
  reproduction: "Sexual and asexual strategies, gametes and fertilisation.",
  chemistry: "Atoms, ions, reactions, acids and the 2026 chemistry pack.",
  carbon: "Carbon cycle, photosynthesis, respiration and Earth's spheres.",
  body: "Nervous and endocrine systems, homeostasis and coordination.",
};
