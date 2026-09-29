import type { NoteSection } from "@/lib/science/types";

export const noteSections: NoteSection[] = [
  {
    id: "energy-forms",
    topic: "energy",
    title: "Energy forms and transformations",
    pack: "Energy transfers and transformations",
    sources: [
      "1. Energy_.pptx",
      "1. Energy_NAn.pptx",
      "1a. Energy Forms & Changes (PhET).docx",
      "1b. Energy Skate Park Basics (PhET).docx",
    ],
    summary:
      "Energy is the capacity to do work, measured in joules. It cannot be created or destroyed — only transferred or transformed.",
    blocks: [
      {
        heading: "What energy is",
        body: [
          "Energy is the capacity to do work. Work means a force causing movement through a distance.",
          "Energy is measured in joules (J).",
          "Most energy on Earth can be traced back to the Sun: plants store light as chemical energy, animals eat plants, and fossil fuels formed from ancient living things.",
        ],
      },
      {
        heading: "Kinetic versus potential",
        body: [
          "Kinetic-type energies involve particles or objects moving: kinetic, thermal (heat), light, electrical and sound.",
          "Potential energies can be stored: gravitational, chemical, elastic and nuclear.",
          "Kinetic energy is the energy of movement: Ek = ½mv².",
          "Gravitational potential energy is due to position in a gravitational field: Ep = mgh.",
          "Elastic potential energy is stored when an object is stretched or compressed.",
          "Chemical energy is stored in chemical bonds (food, fuel, batteries).",
          "Light energy is given out by luminous objects such as the Sun, flames and globes.",
        ],
      },
      {
        heading: "Conservation of energy",
        body: [
          "1st law of thermodynamics: the total energy of the universe is constant. Energy cannot be created or destroyed; it can only change place or form.",
          "A student in class: chemical energy (food) → kinetic + heat + sound.",
          "A fan: electrical → kinetic (+ heat + sound).",
          "A light globe: electrical → light (+ heat).",
          "A bow: kinetic → elastic potential → kinetic (+ heat + sound).",
        ],
      },
      {
        heading: "From the PhET lessons",
        body: [
          "Energy Forms & Changes: turning on Energy Symbols lets you see energy flow from source → generator → output.",
          "Faucet, kettle steam or a cyclist can spin a turbine; sunlight drives solar panels.",
          "A fluorescent bulb wastes less heat than an incandescent bulb — that is why it is more efficient.",
          "Energy Skate Park: on a frictionless track, PE + KE stays constant. PE is highest at the top; KE is highest at the bottom.",
          "Friction turns some mechanical energy into thermal energy, so the skater gradually loses height.",
        ],
      },
    ],
    formulas: [
      { name: "Kinetic energy", formula: "Ek = ½mv²", note: "m in kg, v in m/s, Ek in J" },
      { name: "Gravitational potential energy", formula: "Ep = mgh", note: "g ≈ 9.81 N/kg on Earth (worksheets often use 10)" },
    ],
    glossary: [
      { term: "Energy transformation", def: "Energy changing from one form into another." },
      { term: "Energy transfer", def: "Energy moving from one place or object to another." },
      { term: "Mechanical energy", def: "Emech = Ek + Ep" },
    ],
  },
  {
    id: "energy-sankey",
    topic: "energy",
    title: "Sankey diagrams and efficiency",
    pack: "Sankey Energy Diagrams",
    sources: [
      "2. Sankey Energy Diagrams.pptx",
      "2. Sankey Energy Diagrams KP.pptx",
      "2. Sankey Energy Diagrams Worksheet.docx",
    ],
    summary:
      "Sankey diagrams show how input energy splits into useful and wasted outputs. Arrow width is proportional to energy, because energy is conserved.",
    blocks: [
      {
        heading: "Reading a Sankey diagram",
        body: [
          "The input arrow on the left is the energy going in (often electrical or chemical).",
          "Arrows continuing to the right are useful energy. Arrows bending down are wasted energy (usually heat and sometimes sound).",
          "The thickness of the input arrow equals the total thickness of the output arrows — law of conservation of energy.",
        ],
      },
      {
        heading: "Efficiency",
        body: [
          "Efficiency = (useful energy ÷ input energy) × 100. It is given as a percentage.",
          "Wasted energy = input energy − useful energy.",
          "A filament lamp: 100 J electrical in, 10 J light out, 90 J heat wasted → 10% efficient.",
          "From the class examples: TV ≈ 51%, hairdryer ≈ 67%, vacuum cleaner ≈ 30%.",
          "More stars on an appliance energy label means it wastes less energy, so it usually costs less to run.",
        ],
      },
    ],
    formulas: [
      { name: "Efficiency", formula: "η = (useful / input) × 100%" },
      { name: "Wasted energy", formula: "Ewasted = Einput − Euseful" },
    ],
    worked: [
      {
        q: "A torch uses 100 J of electrical energy to make 10 J of light and 90 J of heat. Sketch the Sankey idea and find efficiency.",
        a: "Input 100 J; useful 10 J light; wasted 90 J heat. Efficiency = 10/100 × 100 = 10%.",
      },
      {
        q: "A vacuum takes 1440 kJ in and produces 430 kJ motion and 100 kJ sound. Find heating waste and efficiency if motion is useful.",
        a: "Heating = 1440 − 430 − 100 = 910 kJ. Efficiency = 430/1440 × 100 ≈ 30%.",
      },
    ],
  },
  {
    id: "energy-work",
    topic: "energy",
    title: "Work, GPE and KE",
    pack: "Mechanical energy and work",
    sources: [
      "3. Work, GPE & KE (Formulas).pptx",
      "3. Work, GPE & KE_(questions).docx",
    ],
    summary:
      "Work is force times displacement in the direction of the force. Doing work stores or transfers energy, including GPE and KE.",
    blocks: [
      {
        heading: "When is work done?",
        body: [
          "Work is done when a force acts on an object and causes a displacement in the direction of that force. W = F × s.",
          "Units: joules (J) or newton-metres (N m).",
          "Pushing a wall until you are exhausted is not work on the wall — the wall does not move.",
          "A book falling is work: gravity displaces it downwards.",
          "Carrying a tray at constant height across a room is not work on the tray: the upward force is perpendicular to the displacement.",
        ],
      },
      {
        heading: "GPE and KE",
        body: [
          "Ep = mgh. Worksheets often take g = 10 N/kg; the formula slides use 9.81 N/kg.",
          "A 250 g tin lifted 2 m: Ep = 0.250 × 9.81 × 2 ≈ 4.9 J.",
          "Ek = ½mv². Doubling speed quadruples kinetic energy because v is squared.",
          "If air resistance is ignored, GPE lost = KE gained for a falling object.",
        ],
      },
    ],
    formulas: [
      { name: "Work", formula: "W = F × s" },
      { name: "GPE", formula: "Ep = mgh" },
      { name: "KE", formula: "Ek = ½mv²" },
      { name: "Rearrange mass from KE", formula: "m = 2Ek / v²" },
      { name: "Rearrange speed from KE", formula: "v = √(2Ek / m)" },
    ],
    worked: [
      { q: "Robert pushes a car 50 m with 1000 N. Work?", a: "W = 1000 × 50 = 50 000 J." },
      { q: "5 kg cat lifted 2 m (g = 10). GPE?", a: "Ep = 5 × 10 × 2 = 100 J." },
      { q: "3 kg cat running at 4 m/s. KE?", a: "Ek = ½ × 3 × 16 = 24 J." },
      {
        q: "50 kg goat, 450 m cliff, g = 10. Speed just before the ground, ignoring air resistance?",
        a: "Ep = 50 × 10 × 450 = 225 000 J = KE. v = √(2 × 225000 / 50) = √9000 ≈ 95 m/s.",
      },
    ],
  },
  {
    id: "heat-conduction",
    topic: "heat",
    title: "Heat, temperature and conduction",
    pack: "Heat transfer",
    sources: ["Heat, Temperature and Conduction (existing hub notes)"],
    summary:
      "Temperature is linked to the average kinetic energy of particles. Heat flows from hotter to cooler matter.",
    blocks: [
      {
        heading: "Particle model",
        body: [
          "Matter is modelled as tiny particles. Particle motion is linked to kinetic energy.",
          "Changing state changes how particles are arranged and how they move.",
          "Temperature is linked to the average kinetic energy of particles.",
          "Heat (thermal energy transfer) occurs when there is a temperature difference, from hotter to cooler.",
        ],
      },
      {
        heading: "Conduction",
        body: [
          "Conduction transfers thermal energy through direct contact between particles.",
          "Metals conduct well because outer electrons are free to move and transfer energy — the 'sea of electrons'.",
          "Insulators are poor conductors. Trapped air is useful because air is a poor conductor.",
        ],
      },
    ],
  },
  {
    id: "heat-convection",
    topic: "heat",
    title: "Convection, radiation and insulation",
    pack: "Heat transfer",
    sources: ["Convection + 2026 Insulation Investigation", "Heat Transfer: Radiation"],
    summary:
      "Convection moves heated fluids; radiation uses electromagnetic waves and can travel through a vacuum.",
    blocks: [
      {
        heading: "Convection",
        body: [
          "Convection occurs in liquids and gases as the heated substance moves.",
          "Warm fluid becomes less dense and rises; cooler, denser fluid sinks, creating convection currents.",
        ],
      },
      {
        heading: "Radiation",
        body: [
          "Radiation transfers heat using electromagnetic waves (infrared).",
          "Infrared can travel through a vacuum — that is how energy travels from the Sun to Earth.",
          "Dark surfaces are good absorbers and emitters. Shiny surfaces tend to reflect more infrared.",
        ],
      },
      {
        heading: "Insulation investigation",
        body: [
          "The 2026 investigation asks how insulation changes heat transfer to ice.",
          "Plan variables, controls, repeat trials, averages, graphs and a conclusion.",
        ],
      },
    ],
  },
  {
    id: "sound-waves",
    topic: "sound",
    title: "Sound and waves",
    pack: "Sound",
    sources: ["Introduction to Sound", "Sound & Particles"],
    summary: "Sound is a mechanical longitudinal wave that needs a medium.",
    blocks: [
      {
        heading: "Key ideas",
        body: [
          "Sound starts with a vibration and travels through a medium.",
          "It is a mechanical longitudinal wave: compressions (crowded) and rarefactions (spread out).",
          "Amplitude is linked to loudness; frequency is linked to pitch.",
          "Sound travels faster through solids than gases because particles are closer together.",
          "Sound cannot travel through a vacuum; light can, because light is electromagnetic.",
        ],
      },
    ],
  },
  {
    id: "em-spectrum",
    topic: "emspectrum",
    title: "The electromagnetic spectrum",
    pack: "The Electromagnetic Spectrum",
    sources: [
      "1. The Electromagnetic Spectrum.pptx",
      "EM Spectrum_worksheet.pptx",
      "Light Booklet- Year 9 (2025).docx",
    ],
    summary:
      "EM waves are transverse, travel at 3 × 10⁸ m/s in vacuum, and obey v = fλ. Shorter wavelength means higher frequency, energy and hazard.",
    blocks: [
      {
        heading: "Shared properties of all EM waves",
        body: [
          "They transfer energy, are transverse, can be reflected, and can travel through a vacuum.",
          "They all travel at the speed of light in vacuum: 300 000 000 m/s (3.00 × 10⁸ m/s).",
          "They obey v = f × λ. Shorter wavelength ↔ higher frequency ↔ more energy ↔ more dangerous.",
          "Order of increasing frequency / decreasing wavelength: radio → microwave → infrared → visible → ultraviolet → X-ray → gamma.",
          "Red sits next to infrared; violet sits next to ultraviolet.",
        ],
      },
      {
        heading: "Radio and microwaves",
        body: [
          "Radio waves have the longest wavelengths. Uses: radio, television, some mobile signals.",
          "They mostly pass through the body and are not strongly absorbed.",
          "Microwaves: longer ones heat food by vibrating water molecules; shorter ones are used in radar and satellite links.",
          "Space waves / microwaves can be sent in a thin beam to a satellite because they diffract very little.",
        ],
      },
      {
        heading: "Infrared and visible",
        body: [
          "Infrared lies between microwaves and visible light. All objects emit IR; hotter objects emit more.",
          "Uses: heating, cooking, remotes, optical fibres, thermal cameras, ear thermometers, burglar sensors.",
          "Too much high-energy IR burns skin (the same heating you feel from a grill).",
          "Visible light is the only EM radiation the human eye detects (about 390–780 nm).",
        ],
      },
      {
        heading: "Ultraviolet, X-rays and gamma",
        body: [
          "UV is emitted by very hot objects (the Sun), sparks, arc welding, tanning beds and black lights.",
          "Uses: tanning, fluorescent security inks and high-visibility clothing, banknote checks, vitamin D production.",
          "Hazards: sunburn, premature ageing, skin cancer, eye inflammation and cataracts. Cover up, hat, sunglasses, sunscreen.",
          "X-rays: produced when high-energy electrons hit a tungsten target in an X-ray tube. Used for medical and security imaging, cancer treatment and crystallography.",
          "Bones absorb more X-rays than soft tissue, so they appear white on film. Radiographers use lead shielding.",
          "Gamma rays have the shortest wavelength and highest energy. Emitted by radioactive materials. Used for medical imaging (tracers + gamma camera), industrial inspection, sterilising equipment and radiotherapy.",
        ],
      },
    ],
    formulas: [{ name: "Wave equation", formula: "v = fλ", note: "For all EM waves in vacuum, v = 3.00 × 10⁸ m/s" }],
    glossary: [
      { term: "Ionizing radiation", def: "High-energy waves (short UV, X-rays, gamma) that can ionize atoms and damage DNA." },
      { term: "Fluorescence", def: "Absorbing UV and re-emitting lower-energy visible light." },
    ],
  },
  {
    id: "visible-light",
    topic: "light",
    title: "Visible light",
    pack: "Visible Light",
    sources: ["2. Visible Light_.pptx", "Light Booklet- Year 9 (2025).docx"],
    summary:
      "Light travels in straight lines, carries energy, and is the only EM radiation we can see. We see because light enters our eyes.",
    blocks: [
      {
        heading: "Seeing",
        body: [
          "Light from a candle can travel just as far as light from the Sun — it does not stop just because it is daytime.",
          "We see because light travels from an object (emitted or reflected) into our eyes, not the other way around.",
          "Luminous objects give out light (Sun, globes). Non-luminous objects such as the Moon are seen by reflected light.",
          "Transparent materials transmit light clearly; translucent materials transmit some light but blur detail; opaque materials absorb or reflect, so you cannot see through them.",
        ],
      },
      {
        heading: "Day and night",
        body: [
          "As Earth rotates, the side facing the Sun is in daylight.",
          "Light travels in straight lines and Earth is opaque, so the far side is in shadow — night.",
        ],
      },
      {
        heading: "A model for light",
        body: [
          "Light is rectilinear: it travels in straight lines, which is why shadows form and we cannot see around corners.",
          "Ray diagrams model a narrow beam as a straight line with an arrow. Always use a sharp pencil and ruler.",
          "Scientists treat light as having a dual nature: wave and particle (photon).",
        ],
      },
    ],
  },
  {
    id: "reflection",
    topic: "light",
    title: "Reflection",
    pack: "Reflection",
    sources: ["3. Reflection.pptx", "Light Booklet- Year 9 (2025).docx"],
    summary: "Angle of incidence equals angle of reflection. Smooth surfaces give clear images; rough surfaces scatter light.",
    blocks: [
      {
        heading: "Law of reflection",
        body: [
          "The normal is a line at 90° to the surface at the point of incidence.",
          "Incident ray travels towards the surface; reflected ray travels away.",
          "Law of reflection: i = r. This applies to all waves, including EM waves.",
          "Angles are always measured between the ray and the normal, not the mirror.",
        ],
      },
      {
        heading: "Specular vs diffuse",
        body: [
          "Smooth, shiny surfaces (mirrors, still water) give clear / specular reflection — ordered rays, a clear image.",
          "Rough, dull surfaces give diffuse reflection — light scatters, so you do not see a mirror image. The law i = r still holds for each tiny bit of surface.",
        ],
      },
      {
        heading: "Curved mirrors",
        body: [
          "A curved mirror can be thought of as many tiny plane mirrors.",
          "Concave (caves in): parallel rays meet at a real focal point. Uses: makeup mirrors, headlights, some telescopes.",
          "Convex (bulges out): rays diverge and appear to come from a focal point behind the mirror. Uses: shop security, car side mirrors — wide field of view.",
          "A tighter curve moves the focal point.",
        ],
      },
    ],
    glossary: [
      { term: "Incident ray", def: "The incoming ray that hits the surface." },
      { term: "Reflected ray", def: "The ray that bounces off the surface." },
      { term: "Normal", def: "A construction line at 90° to the surface." },
      { term: "Focal point", def: "Where reflected (or refracted) rays meet, or appear to meet." },
    ],
  },
  {
    id: "refraction",
    topic: "light",
    title: "Refraction, TIR and lenses",
    pack: "Refraction",
    sources: ["4. Refraction.pptx", "Light Booklet- Year 9 (2025).docx"],
    summary:
      "Light bends when its speed changes. Denser medium: slower, towards the normal. Less dense: faster, away from the normal.",
    blocks: [
      {
        heading: "Why light bends",
        body: [
          "Refraction is the bending of light as it moves between different substances because its speed changes.",
          "Car-on-sand analogy: the first wheel slows in the sand so the car turns.",
          "Air → glass: light slows and bends towards the normal.",
          "Glass → air: light speeds up and bends away from the normal.",
          "This is why a pencil looks bent in water, a stone looks closer than it is, and a fish is not where it appears when speared from a boat.",
        ],
      },
      {
        heading: "Total internal reflection",
        body: [
          "When light goes from more dense to less dense, the angle of refraction is larger than i.",
          "If i increases, r can reach 90°. That incidence angle is the critical angle ic.",
          "If i ≥ ic, the light does not leave — it reflects inside with i = r. That is total internal reflection.",
          "TIR is used in optical fibres and some prisms (for example periscopes).",
        ],
      },
      {
        heading: "Lenses",
        body: [
          "Convex (converging) lenses are thicker in the middle and can bring rays to a focus. They can form a real image on a screen.",
          "Concave (diverging) lenses are thinner in the middle and spread rays out. Images are usually upright, diminished and virtual.",
          "A thicker convex lens has a shorter focal length.",
        ],
      },
    ],
    glossary: [
      { term: "Critical angle", def: "The angle of incidence (denser → less dense) that gives a 90° refracted ray." },
      { term: "Total internal reflection", def: "All light reflects inside a denser medium when i ≥ ic." },
    ],
  },
  {
    id: "colour",
    topic: "light",
    title: "Colour, dispersion and mixing",
    pack: "Colour and rainbows",
    sources: ["5. Colour Powerpoint.pptx", "Light Booklet- Year 9 (2025).docx"],
    summary:
      "White light is a mixture of colours. A prism disperses it because different wavelengths slow by different amounts.",
    blocks: [
      {
        heading: "Dispersion and rainbows",
        body: [
          "White light is made of many colours with different wavelengths.",
          "In a prism the colours slow by different amounts, so white light splits. This is dispersion.",
          "Order is always ROYGBIV: red, orange, yellow, green, blue, indigo, violet.",
          "Red has the longest visible wavelength and is bent least; violet is bent most.",
          "A rainbow is refraction (and reflection) in raindrops, not reflection only, and not because light speeds up in a prism.",
          "A second prism can recombine the spectrum into white light.",
        ],
      },
      {
        heading: "Mixing coloured light",
        body: [
          "Primary colours of light are red, green and blue (additive mixing — different from paint).",
          "Red + green = yellow; blue + green = cyan; red + blue = magenta.",
          "Red + green + blue = white. No light = black.",
          "Yellow is complementary to blue; cyan to red; magenta to green.",
          "A colour television builds all colours from tiny red, green and blue dots.",
          "A red object mainly reflects red and absorbs other colours. White reflects all; black absorbs most.",
        ],
      },
    ],
  },
  {
    id: "electricity-intro",
    topic: "electricity",
    title: "Electricity: current, voltage and materials",
    pack: "Year 9 Electricity 2025",
    sources: [
      "4. Introduction to Electricity 2025.pptx",
      "4. Year 9 Electricity 2025.pptx",
      "7. Circuit Inquiry.docx",
    ],
    summary:
      "Current is the flow of electrons, pushed by voltage. Metals conduct because they have a sea of free electrons.",
    blocks: [
      {
        heading: "Key quantities",
        body: [
          "Current (I) is the flow of electrons around a connected circuit, measured in amps (A) with an ammeter.",
          "Voltage (V) is the push on electrons from the cell/battery, measured in volts (V) with a voltmeter.",
          "Resistance (R) measures how much a material tries to stop the flow, measured in ohms (Ω).",
          "A battery converts chemical energy into electrical energy. A bulb converts electrical energy into light (and heat).",
          "Electrons leave the negative terminal and are attracted to the positive terminal. The switch must be closed (complete circuit).",
        ],
      },
      {
        heading: "Conductors and insulators",
        body: [
          "Conductors (metals, graphite) allow charge to flow. Insulators (wood, plastic, rubber) do not.",
          "Metal atoms have outer electrons that can drift. This sea of electrons also explains why metals conduct heat.",
          "If voltage is constant, increasing resistance decreases current.",
        ],
      },
    ],
    glossary: [
      { term: "Series", def: "Components in one continuous loop." },
      { term: "Parallel", def: "Two or more separate loops off the same source." },
    ],
  },
  {
    id: "electricity-circuits",
    topic: "electricity",
    title: "Series and parallel circuits",
    pack: "Current in series and parallel",
    sources: [
      "v5. 2025 Current in Series and Parallel circuits_.pptx",
      "2. PHET Electric Circuit Design Challenge.docx",
    ],
    summary:
      "Series: current same everywhere, voltage shared. Parallel: voltage same across branches, current splits.",
    blocks: [
      {
        heading: "How to measure",
        body: [
          "Ammeter: always in series (in the same loop) as the component.",
          "Voltmeter: always in parallel (across) the component.",
        ],
      },
      {
        heading: "Series rules",
        body: [
          "Current is the same at every point.",
          "Supply voltage is shared between the components.",
          "Adding a battery increases current (greater push). Adding a bulb decreases current (greater resistance).",
        ],
      },
      {
        heading: "Parallel rules",
        body: [
          "The source voltage is the same across each branch.",
          "Current splits between branches (equal split if the bulbs are the same).",
          "Advantages: extra appliances can be added without dimming the others; if one breaks the others still work. That is why homes use parallel lighting circuits.",
        ],
      },
      {
        heading: "Design challenge reminders",
        body: [
          "Three bulbs equally bright → same current through each, so a parallel arrangement.",
          "A switch that controls only some bulbs sits on those branches only.",
          "Kitchen lights that must switch together can share a branch; living room and bedroom stay independent.",
        ],
      },
    ],
  },
  {
    id: "radio-isotopes",
    topic: "radioactivity",
    title: "Isotopes and atomic notation",
    pack: "Isotopes and Radioactivity booklet",
    sources: [
      "0. Year 9 Radioactivity Booklet 2020 SS (2).docx",
      "6. Radioactivity.pptx",
    ],
    summary:
      "Isotopes are atoms of the same element (same protons) with different numbers of neutrons.",
    blocks: [
      {
        heading: "Atomic structure recap",
        body: [
          "Atomic number Z = number of protons. In a neutral atom, electrons = protons.",
          "Mass number A = protons + neutrons. Neutron number N = A − Z.",
          "Notation: ᴬZX, sometimes with N written as well.",
          "Almost all of the mass of an atom is in the nucleus.",
        ],
      },
      {
        heading: "Isotopes",
        body: [
          "Carbon-12 and carbon-14 both have 6 protons; C-14 has two extra neutrons.",
          "Chlorine-35 has 18 neutrons; chlorine-37 has 20 neutrons (Z = 17).",
          "Lithium-6 has 3 protons and 3 neutrons; lithium-7 has 3 protons and 4 neutrons.",
          "A stable isotope has a nucleus that is unlikely to break apart. Unstable isotopes are radioactive.",
          "Unstable if: too many neutrons for the protons, too many protons for the neutrons, or the nucleus is too heavy.",
        ],
      },
      {
        heading: "Relative atomic mass",
        body: [
          "RAM (Ar) is the average mass of all naturally occurring isotopes, weighted by abundance, on a scale where ¹²C is exactly 12.",
          "RAM = Σ (mass number × % abundance) / 100.",
          "Example: 20% mass 10 and 80% mass 11 → RAM = (10×20 + 11×80)/100 = 10.8.",
        ],
      },
    ],
    formulas: [
      { name: "Neutron number", formula: "N = A − Z" },
      { name: "Relative atomic mass", formula: "Ar = Σ(A × % abundance) / 100" },
    ],
    worked: [
      { q: "Uranium-235 (Z = 92). Protons, electrons, neutrons?", a: "92 protons, 92 electrons (neutral), 235 − 92 = 143 neutrons." },
    ],
  },
  {
    id: "radio-decay",
    topic: "radioactivity",
    title: "Radioactive decay: alpha, beta, gamma",
    pack: "Isotopes and Radioactivity booklet",
    sources: ["0. Year 9 Radioactivity Booklet 2020 SS (2).docx", "6. Radioactivity.pptx"],
    summary:
      "Unstable nuclei emit radiation to become more stable. Alpha, beta and gamma differ in what they are, how they change the nucleus, and how far they travel.",
    blocks: [
      {
        heading: "Alpha (α)",
        body: [
          "An alpha particle is a helium nucleus: 2 protons and 2 neutrons (⁴₂He / ⁴₂α).",
          "Mass number decreases by 4; atomic number decreases by 2. The new element is two places lower in the periodic table.",
          "Stopped by paper or skin. Highly ionising, so very damaging if the source is inside the body.",
        ],
      },
      {
        heading: "Beta (β)",
        body: [
          "A neutron changes into a proton plus an electron. The proton stays; the electron is fired out as a beta particle.",
          "Mass number stays the same; atomic number increases by 1.",
          "Stopped by thin aluminium. Less ionising than alpha.",
        ],
      },
      {
        heading: "Gamma (γ)",
        body: [
          "A high-energy electromagnetic photon. A and Z do not change — the nucleus just loses energy.",
          "Reduced by thick lead or concrete. Least ionising but most penetrating, so most dangerous from outside the body.",
        ],
      },
      {
        heading: "Ionising versus penetrating",
        body: [
          "Inside the body: alpha does the most damage.",
          "Outside the body: gamma is the main concern because alpha is stopped by skin.",
          "A Geiger counter clicks randomly because each decay is unpredictable.",
          "Background radiation is always there (rocks, Sun). Compare count rates with and without a source.",
        ],
      },
    ],
  },
  {
    id: "radio-halflife",
    topic: "radioactivity",
    title: "Half-life",
    pack: "Isotopes and Radioactivity booklet",
    sources: ["0. Year 9 Radioactivity Booklet 2020 SS (2).docx", "6. Radioactivity.pptx"],
    summary:
      "Half-life is the time for the number of radioactive nuclei, or the count rate, to fall by 50%. It is different for every isotope.",
    blocks: [
      {
        heading: "What half-life means",
        body: [
          "After 1 half-life: 50% left (1/2). After 2: 25% (1/4). After 3: 12.5% (1/8). After 4: 6.25% (1/16).",
          "Activity is measured in becquerels: 1 Bq = 1 decay per second.",
          "The M&M lab models this: face-up sweets are undecayed parent nuclei; each shake is a half-life. It is random for each sweet, but the group follows a curve.",
          "Carbon-14 half-life is about 5730 years. Living things take in C-14; after death it decays, which is the basis of radiocarbon dating (useful to ~50 000 years).",
        ],
      },
    ],
    formulas: [
      { name: "Remaining fraction", formula: "remaining = (1/2)^n", note: "n = number of half-lives" },
    ],
    worked: [
      { q: "Half-life 14 days, start 1080 Bq, after 4 weeks?", a: "4 weeks = 2 half-lives. 1080 → 540 → 270 Bq." },
      { q: "Half-life 5000 years. Fraction remaining after 20 000 years?", a: "n = 4, remaining = 1/16." },
      { q: "4000 Bq, half-life 12 h, down to 500 Bq?", a: "4000 → 2000 → 1000 → 500 is 3 half-lives = 36 hours." },
      { q: "100 g of radon-222, half-life 3.8 days, after 15.2 days?", a: "n = 4, remaining = 100 / 16 = 6.25 g." },
      { q: "C-14 half-life 5730 y. 70 mg after 17 190 y?", a: "n = 3, remaining = 70 / 8 = 8.75 mg." },
    ],
  },
  {
    id: "radio-uses",
    topic: "radioactivity",
    title: "Uses of radioisotopes (SHE task)",
    pack: "Radioactivity — Science as a Human Endeavour",
    sources: [
      "Radioactivity SHE Task 2025.docx",
      "Student Activity_ Radioactivity – Good or Bad_.docx",
      "0. Year 9 Radioactivity Booklet 2020 SS (2).docx",
    ],
    summary:
      "Nuclear technology has real benefits and real risks. The 2025 SHE task is a short group presentation with advantages, disadvantages and a bibliography.",
    blocks: [
      {
        heading: "The task",
        body: [
          "Radiation is around us (Sun, rocks). Cells can repair some damage, but stronger radiation and longer exposure increase risk — including cancer.",
          "Choose one use: nuclear medicine, nuclear power, radiocarbon dating, food irradiation, industrial testing, smoke detectors, and so on. Nuclear weapons are excluded.",
          "Presentation: introduce why it matters, how it works, advantages, disadvantages/risks, summary opinion, and a formatted bibliography (3–5+ sources).",
        ],
      },
      {
        heading: "How common uses work",
        body: [
          "Medical tracers: a radioisotope replaces a non-radioactive isotope in a compound; its path is tracked (gamma camera). Choose a short half-life so activity falls quickly after the test.",
          "Radiotherapy: focused gamma or X-rays kill cancer cells. Dose is split and the beam is rotated to spare healthy tissue.",
          "Smoke detectors: americium-241 (alpha, half-life ~460 years). Smoke blocks some alpha particles and triggers the alarm.",
          "Thickness control: beta through paper; count rate tells the mill whether to move the rollers. Need a long half-life so the source stays steady.",
          "Carbon dating: remaining C-14 in once-living material. Used on charcoal, bone and shell, including Australian sites such as Lake Mungo.",
          "Food irradiation and sterilising equipment: penetrating gamma kills microbes.",
        ],
      },
      {
        heading: "Risks to weigh",
        body: [
          "Ionizing radiation can kill cells or damage DNA. Waste storage, accidents, and unequal access are ethical issues for power and medicine.",
          "Manage risk with shielding, distance, time, and matching the isotope (type + half-life) to the job.",
        ],
      },
    ],
  },
  {
    id: "chemistry-atoms",
    topic: "chemistry",
    title: "Atomic structure and reactions",
    pack: "2026 Chemistry source pack",
    sources: [
      "1. Structure of Atoms.pptx",
      "2. Electron Configuration and Ions.pptx",
      "3. Intro to chemical reactions.pptx",
      "4. Acid reactions.pptx",
      "5. Combustion & corrosion reactions.pptx",
      "Year 9 Chemistry Checklist 2026",
    ],
    summary:
      "Keep using the chemistry quiz bank from the hub. This section is a map of the 2026 pack so you can revise the same headings your class used.",
    blocks: [
      {
        heading: "Checklist of ideas",
        body: [
          "Structure of atoms: protons, neutrons, electrons, electron configuration.",
          "Ions and ionic compounds: metals lose electrons, non-metals gain electrons.",
          "Chemical reactions: reactants → products, conservation of atoms, balancing equations.",
          "Acid reactions, combustion and corrosion, endothermic vs exothermic labs, tests for common ions.",
        ],
      },
    ],
  },
  {
    id: "reproduction",
    topic: "reproduction",
    title: "Reproduction",
    pack: "September 2026 reproduction pack",
    sources: [
      "Year 9 Science Practice Test: Reproduction",
      "Reproduction Recap",
      "Reproductive Strategies",
    ],
    summary: "Sexual reproduction mixes genes; asexual reproduction copies the parent quickly.",
    blocks: [
      {
        heading: "Key comparisons",
        body: [
          "Sexual reproduction uses gametes and fertilisation, producing genetically varied offspring.",
          "Asexual reproduction does not use sex cells; offspring are genetically identical unless a mutation occurs.",
          "Gametes are haploid. Human body cells have 46 chromosomes; gametes have 23. Fertilisation forms a zygote.",
          "Internal fertilisation happens inside the body; external is common in water.",
          "Viviparous: live young. Oviparous: eggs. Ovoviviparous: eggs hatch inside the parent.",
          "Asexual strategies: binary fission, budding, fragmentation, vegetative propagation, spore formation, parthenogenesis.",
        ],
      },
    ],
  },
  {
    id: "body-regulation",
    topic: "body",
    title: "Body regulation",
    pack: "Nervous and endocrine systems",
    sources: [
      "2025 NS and Endocrine Revision Checklist.docx",
      "2025 The Nervous System.pptx",
      "2025 Endocrine system.pptx",
      "2025 Nervous System Booklet_.docx",
    ],
    summary: "Homeostasis is keeping a constant internal environment, using nervous and hormonal control.",
    blocks: [
      {
        heading: "From the 2025 pack",
        body: [
          "The nervous system uses electrical impulses along neurones and chemical messengers (neurotransmitters) at synapses.",
          "Myelin is the fatty insulation around an axon.",
          "The endocrine system uses hormones in the blood — slower but longer lasting.",
          "Negative feedback reverses a change (for example sweating to cool you down). Positive feedback increases a change.",
        ],
      },
    ],
  },
  {
    id: "carbon-cycle",
    topic: "carbon",
    title: "Carbon cycle and Earth's spheres",
    pack: "Carbon cycle source pack",
    sources: [
      "4. Carbon Cycle Processes.pptx",
      "1. Earths Spheres 2026.pptx",
      "2. Carbon Basics Worksheet.docx",
      "Photosynthesis and respiration quiz / worksheets",
    ],
    summary: "Carbon moves between atmosphere, biosphere, hydrosphere and geosphere by photosynthesis, respiration, combustion and decomposition.",
    blocks: [
      {
        heading: "Processes",
        body: [
          "Photosynthesis: carbon dioxide + water → glucose + oxygen (endothermic).",
          "Cellular respiration: glucose + oxygen → carbon dioxide + water + energy (exothermic).",
          "Incomplete combustion can make carbon monoxide and soot.",
          "Lithification turns sediment into sedimentary rock. Decomposition breaks down dead organisms.",
        ],
      },
    ],
  },
];
