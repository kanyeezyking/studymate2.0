import { useState } from "react";

const BANDS = [
  {
    id: "radio",
    label: "Radio",
    color: "bg-[#3b82f6]",
    uses: "Radio, TV, some mobile signals. Longest wavelength; mostly passes through the body.",
  },
  {
    id: "micro",
    label: "Microwave",
    color: "bg-[#22d3ee]",
    uses: "Heating food (water molecules vibrate), radar, satellite beams.",
  },
  {
    id: "ir",
    label: "Infrared",
    color: "bg-[#f97316]",
    uses: "Heat, remotes, thermal cameras, cooking. Hotter objects emit more IR.",
  },
  {
    id: "vis",
    label: "Visible",
    color: "bg-gradient-to-r from-red-500 via-green-400 to-violet-500",
    uses: "The only EM radiation human eyes detect (~390–780 nm). Red next to IR; violet next to UV.",
  },
  {
    id: "uv",
    label: "UV",
    color: "bg-[#a855f7]",
    uses: "Vitamin D, fluorescence, security inks. Overexposure: sunburn, ageing, skin cancer.",
  },
  {
    id: "x",
    label: "X-ray",
    color: "bg-[#e879f9]",
    uses: "Bone and security imaging. Produced in an X-ray tube. Lead shielding for radiographers.",
  },
  {
    id: "gamma",
    label: "Gamma",
    color: "bg-[#f43f5e]",
    uses: "Radioactive sources. Sterilising, tracers, radiotherapy. Shortest λ, highest energy.",
  },
] as const;

export function SpectrumStrip() {
  const [id, setId] = useState<(typeof BANDS)[number]["id"]>("vis");
  const band = BANDS.find((b) => b.id === id)!;
  return (
    <section className="mt-8">
      <h4 className="text-lg font-bold">Interactive spectrum</h4>
      <p className="text-sm text-muted">Tap a band. Energy and hazard increase to the right.</p>
      <div className="mt-3 flex overflow-hidden rounded-[var(--radius-md)] border border-border">
        {BANDS.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => setId(b.id)}
            className={`h-16 min-w-0 flex-1 ${b.color} px-1 text-[10px] font-bold text-white sm:text-xs ${
              id === b.id ? "ring-2 ring-inset ring-white" : ""
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>
      <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wide text-muted">
        <span>Long λ · low f · lower energy</span>
        <span>Short λ · high f · higher energy</span>
      </div>
      <p className="mt-3 rounded-[var(--radius-sm)] border border-border bg-surface p-4 text-sm">{band.uses}</p>
    </section>
  );
}
