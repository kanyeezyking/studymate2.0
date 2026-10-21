import type { NoteSection } from "@/lib/science/types";

export const mathNotes: NoteSection[] = [
  {
    id: "quadratics",
    topic: "quadraticformula",
    title: "Quadratics",
    pack: "Maths",
    sources: [
      "Lesson 1 Theory Notes.pdf",
      "Lesson 3 - Theory Notes.pdf",
      "Lesson 4 - Intro to Factor Form.pdf",
      "Lesson 6 - Theory Notes Homework.pdf",
      "Lesson 7 - Theory notes.pdf",
      "Lesson 8 - Theory Notes.pdf",
      "Lesson 9 - Theory Notes Homework.pdf",
      "Lesson 13 - Theory Notes.pdf",
      "Lesson 14 - Theory Notes.pdf",
      "Lesson 15 - Theory Notes.pdf",
      "Lesson 16 - Theory Notes.pdf",
      "Lesson 17 - Theory Notes.pdf",
    ],
    summary:
      "One unit. Three forms of the same parabola. The grid at the top is the whole exam trick: ask which feature you need, then use the form that already shows it.",
    blocks: [
      {
        heading: "The three forms",
        body: [
          "Turning point form: y = a(x − h)² + k. Built to show the vertex (h, k) and the axis x = h.",
          "Factor form: y = a(x − p)(x − q). Built to show the x-intercepts x = p and x = q.",
          "General form: y = ax² + bx + c. Built to show the y-intercept (0, c) and to feed the quadratic formula.",
          "Do not expand first out of panic. After changing form, expand back and check the three coefficients match.",
        ],
      },
      {
        heading: "Turning point form",
        body: [
          "The bracket is (x − h), so h is the opposite of the number you see: (x + 1) means h = −1. k is added outside the square. The turning point is (h, k). The axis is x = h.",
          "If a is negative the parabola opens down (maximum). If a is positive it opens up (minimum).",
          "|a| > 1 is narrower than y = x². |a| < 1 is wider. Changing a never moves the turning point — it only stretches, compresses, or flips.",
          "Infinitely many parabolas share a turning point. To pin a unique rule you need one extra point, then solve for a.",
        ],
      },
      {
        heading: "Crossing the axes",
        body: [
          "Y-intercept: substitute x = 0. You are evaluating, not solving.",
          "X-intercepts from TP form: set y = 0, isolate the square, then take ±. (x − 5)² = 16 means x − 5 = 4 or x − 5 = −4.",
          "Two signs unless the right-hand side is 0 (touches) or negative (no real x-intercepts).",
          "The two roots average to the axis. That is what symmetry means.",
        ],
      },
      {
        heading: "Factor form and the null factor law",
        body: [
          "If two numbers multiply to give zero, at least one of them is zero. So a(x − p)(x − q) = 0 means x = p or x = q. The constant a ≠ 0 does not make a new root.",
          "Axis: x = (p + q) / 2. Turning point: sit on that x, then find y. Y-intercept: put x = 0 to get apq.",
          "y = (x − 1)(x − 7) and y = −(x − 1)(x − 7) share intercepts. The minus flips max/min.",
          "Repeated root y = a(x − r)²: one x-intercept, graph touches, turning point sits on the x-axis.",
        ],
      },
      {
        heading: "Expanding to general form",
        body: [
          "A 2×2 box (or FOIL) accounts for every product, then collect like terms.",
          "(x + k)² = x² + 2kx + k². The middle term is never missing. (x + k)(x − k) = x² − k² — no x term.",
          "A common error: (x − 2)(x − 5) = x² − 7x − 10. The last term is +10 because (−2)(−5) = +10.",
          "You cannot slide a multiplier inside a square: 2(x + 3)² is not (2x + 6)². And y = −2(x − 4)² + 7 is not y = −2[(x − 4)² + 7].",
        ],
      },
      {
        heading: "Factorising",
        body: [
          "For x² + bx + c, find two numbers that multiply to c and add to b. Then y = (x + m)(x + n). Always expand to check.",
          "DOTS: x² − k² = (x − k)(x + k). The sign must be subtraction. x² + 16 is never DOTS — no real x-intercepts.",
          "Perfect square: x² ± 2kx + k² = (x ± k)². The middle term must be exactly the signed double product.",
          "Non-monic ax² + bx + c: compute ac, find a pair with product ac and sum b, split the middle, fill the box. Pull out any HCF first — a constant factor never changes the roots.",
        ],
      },
      {
        heading: "Completing the square",
        body: [
          "Rewrite general form as turning-point form without changing the graph. Add zero: insert (b/2)² and subtract it again.",
          "x² + 8x + 12 = x² + 8x + 16 − 16 + 12 = (x + 4)² − 4. Minimum (−4, −4).",
          "If a is not 1, factor a out of the x terms first. Keep the brackets until the correction has been multiplied — sign errors here lose marks.",
          "If the turning point is above the x-axis and the graph opens up, there are no real x-intercepts. You do not need the formula to know that.",
        ],
      },
      {
        heading: "General form and the quadratic formula",
        body: [
          "y = ax² + bx + c. Y-intercept is (0, c). Axis x = −b / 2a. Substitute that x to get the turning point.",
          "x = (−b ± √(b² − 4ac)) / 2a. Δ = b² − 4ac.",
          "Δ > 0: two distinct real intercepts. Δ = 0: one (touches). Δ < 0: none.",
          "Nice factors? Factorise. Want the vertex? Complete the square or use −b/2a. Messy numbers? Formula.",
        ],
      },
    ],
    formulas: [
      { name: "Turning point form", formula: "y = a(x − h)² + k", note: "Vertex (h, k), axis x = h" },
      { name: "Factor form", formula: "y = a(x − p)(x − q)", note: "Roots p and q, axis (p + q)/2" },
      { name: "General form", formula: "y = ax² + bx + c", note: "Y-intercept (0, c), axis −b/2a" },
      { name: "Quadratic formula", formula: "x = (−b ± √(b² − 4ac)) / 2a" },
      { name: "Discriminant", formula: "Δ = b² − 4ac" },
    ],
    glossary: [
      { term: "Turning point / vertex", def: "The highest or lowest point on the parabola." },
      { term: "Axis of symmetry", def: "Vertical line through the turning point. Mirrors the two arms." },
      { term: "Null factor law", def: "If AB = 0 then A = 0 or B = 0." },
      { term: "Discriminant Δ", def: "b² − 4ac. Positive: two real roots. Zero: one (touch). Negative: none." },
    ],
    worked: [
      {
        q: "Which form is fastest for the turning point of y = (x − 1)(x − 5)?",
        a: "Factor form: midpoint of 1 and 5 is x = 3, then y = (2)(−2) = −4, so (3, −4).",
      },
      {
        q: "Which form is fastest for the y-intercept of y = x² − 6x + 8?",
        a: "General form: (0, 8).",
      },
      {
        q: "Describe y = −2(x + 1)² + 5 compared with y = x².",
        a: "h = −1, k = 5. Turning point (−1, 5), maximum. |a| = 2 so narrower. Axis x = −1.",
      },
      {
        q: "Find TP, y-intercept and x-intercepts of y = (x − 3)² − 16.",
        a: "TP (3, −16) min. y-int (0, −7). (x − 3)² = 16 → x = 7 or x = −1.",
      },
      {
        q: "Complete the square: y = x² + 10x + 31.",
        a: "y = (x + 5)² + 6. Minimum (−5, 6), above the axis, so no x-intercepts.",
      },
    ],
  },
  {
    id: "probability",
    topic: "probability",
    title: "Probability",
    pack: "Maths",
    sources: [
      "Lesson 1 - Venn Diagrams - Homework Theory.pdf",
      "Lesson 2 - Two Way Tables - Homework Theory.pdf",
      "Lesson 3 - Two Step Experiments - Tables - Homework Theory.pdf",
      "Lesson 4 - Tree Diagrams - Homework Theory.pdf",
      "Lesson 5 - Homework Theory.pdf",
      "Lesson 6 -  Homework Theory.pdf",
    ],
    summary:
      "One unit. Venn diagrams, two-way tables, two-step experiments, trees, the addition rule, and conditional probability. The formulas below do not change — learn them, then use the lab to see the counts move.",
    blocks: [
      {
        heading: "Set notation and Venn diagrams",
        body: [
          "ξ is the universal set. For probability it is the sample space. n(A) is how many outcomes sit in A. If they are equally likely, P(A) = n(A) / n(ξ).",
          "A ∩ B is and: only the overlap. A ∪ B is or: everything in either circle, including the overlap. A′ is not A: everything in the box outside circle A.",
          "“Only” is not a symbol. A only = A ∩ B′. B only = B ∩ A′. The four regions always add to n(ξ). Use that as a check.",
          "n(A ∪ B) = n(A) + n(B) − n(A ∩ B), because the overlap was counted twice. Complementing swaps the symbol: (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.",
          "n(A) + n(A′) = n(ξ), so P(A) + P(A′) = 1.",
        ],
      },
      {
        heading: "Two-way tables",
        body: [
          "A two-way table is the same picture as a Venn diagram. Rows are A and A′. Columns are B and B′. The middle four cells are the four regions.",
          "Row totals, column totals and the grand total must agree. The grand total is n(ξ).",
          "Fill what you know, then subtract. If you know n(A ∩ B) and n(B), B only is n(B) − n(A ∩ B). Neither is n(ξ) minus the union.",
          "P(A′ ∩ B′) = n(neither) / n(ξ), and that is the same as 1 − P(A ∪ B).",
        ],
      },
      {
        heading: "Two-step experiments",
        body: [
          "List ordered pairs when you can tell the stages apart. A table is the sample space. Coin then die: 2 × 6 = 12 outcomes. Two 4-sided spinners: 4 × 4 = 16.",
          "Without replacement, strike the diagonal. Two letters from a 5-letter word: 5 × 4 = 20 ordered outcomes, not 25.",
          "Multiply when the stages are separate. Add when more than one cell fits the description.",
          "“Given” shrinks the sample space. If you are told the spinner sum is at least 6, the denominator is the number of those cells, not 16.",
          "One letter from RAIN and one from TRAIN are separate draws. Add the ways the letters can match. Do not treat them as one word.",
        ],
      },
      {
        heading: "Tree diagrams",
        body: [
          "With replacement, the second branches copy the first. Without replacement, the denominator drops by 1, and the numerator drops only if that colour was taken.",
          "Multiply along a branch. Add across branches when more than one path fits. The path probabilities add to 1.",
          "Bag of 4 red and 3 blue, without replacement: P(both red) = 4/7 × 3/6 = 2/7. P(exactly one red) = 4/7.",
          "If you choose a box first, then a counter, do not pool the counters. The boxes may be different sizes, and each box was equally likely — a counter in the small box was not.",
          "A second-stage probability can be a conditional one. Given the first was red, use only the branches that start with red.",
        ],
      },
      {
        heading: "The addition rule",
        body: [
          "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Subtract the overlap once, because it sat inside both probabilities.",
          "Mutually exclusive events cannot happen together, so P(A ∩ B) = 0 and the union is just the sum. Hearts or clubs on a card is this case. Hearts or kings is not — the king of hearts is in both.",
          "P(neither) = P((A ∪ B)′) = 1 − P(A ∪ B).",
          "If P(A) + P(B) is already more than 1, the events cannot be mutually exclusive. The smallest possible overlap is P(A) + P(B) − 1. The largest is the smaller of the two probabilities.",
        ],
      },
      {
        heading: "Conditional probability and independence",
        body: [
          "P(A | B) = n(A ∩ B) / n(B) = P(A ∩ B) / P(B). The numerator is the overlap both times. The denominator is the group you have been told you are inside.",
          "Independent means the condition does not move the probability: P(A | B) = P(A). That is the same statement as P(A ∩ B) = P(A) P(B).",
          "Two fair coin tosses are independent, so P(two heads) = 1/2 × 1/2 = 1/4. Draws without replacement are not independent — the second probability changed.",
          "Mutually exclusive events with non-zero probability cannot also be independent. P(A | B) would be 0, which is not P(A).",
          "If one event sits inside the other, P(A | B) can be 1 while P(A) is smaller. That is dependence, not independence.",
        ],
      },
    ],
    formulas: [
      { name: "Theoretical probability", formula: "P(A) = n(A) / n(ξ)", note: "Equally likely outcomes" },
      { name: "Complement", formula: "P(A′) = 1 − P(A)" },
      { name: "Union count", formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)" },
      { name: "Addition rule", formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)" },
      { name: "Mutually exclusive", formula: "P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)" },
      { name: "De Morgan", formula: "(A ∪ B)′ = A′ ∩ B′    and    (A ∩ B)′ = A′ ∪ B′" },
      { name: "Conditional", formula: "P(A | B) = P(A ∩ B) / P(B) = n(A ∩ B) / n(B)" },
      { name: "Independent", formula: "P(A | B) = P(A)    and    P(A ∩ B) = P(A) P(B)" },
      { name: "Along a branch", formula: "Multiply. Across branches that fit: add.", note: "Without replacement, the second denominator drops by 1" },
    ],
    glossary: [
      { term: "Sample space ξ", def: "Everything under consideration. The box around the Venn diagram." },
      { term: "Intersection ∩", def: "And. Only the overlap of the two circles." },
      { term: "Union ∪", def: "Or. Either circle, including the overlap." },
      { term: "Complement ′", def: "Not. Everything in ξ outside the set." },
      { term: "Mutually exclusive", def: "Cannot happen together. The intersection is empty, so just add." },
      { term: "Conditional P(A | B)", def: "Probability of A once you already know B happened." },
      { term: "Independent", def: "Knowing B does not change P(A). The intersection is the product." },
    ],
    worked: [
      {
        q: "ξ = {1…10}, A = evens, B = factors of 10. List the overlap, the union and the outside.",
        a: "A ∩ B = {2, 10}. A ∪ B = {1, 2, 4, 5, 6, 8, 10}. (A ∪ B)′ = {3, 7, 9}. Regions 3 + 2 + 2 + 3 = 10.",
      },
      {
        q: "25 students: 14 bike, 12 skateboard, 5 both. Find P(bike and not skateboard).",
        a: "Bike only = 9, skateboard only = 7, neither = 4. P(B ∩ S′) = 9/25.",
      },
      {
        q: "40 people: 23 coffee, 19 tea, 7 neither. Find P(coffee and not tea).",
        a: "Union = 33, both = 9, coffee only = 14. P = 14/40 = 7/20.",
      },
      {
        q: "Two letters from BOOK without replacement. P(both O) and P(exactly one O).",
        a: "12 outcomes. Both O: 2/12 = 1/6. Exactly one O: 8/12 = 2/3.",
      },
      {
        q: "4 red and 3 blue, two draws without replacement. P(both red) and P(exactly one red).",
        a: "P(RR) = 4/7 × 3/6 = 2/7. Exactly one red adds the two mixed branches: 4/7.",
      },
      {
        q: "Box A: 1 red, 3 white. Box B: 3 red, 2 white. A box is chosen at random, then one counter. P(red).",
        a: "1/2 × 1/4 + 1/2 × 3/5 = 1/8 + 3/10 = 17/40. Pooling to 4/9 is wrong.",
      },
      {
        q: "24 people: 15 coffee, 11 tea, 6 both. Find P(coffee or tea) and P(neither).",
        a: "15/24 + 11/24 − 6/24 = 20/24 = 5/6. Neither = 1 − 5/6 = 1/6.",
      },
      {
        q: "24 students: 15 netball, 13 hockey, 7 both. Are the sports independent?",
        a: "P(H | N) = 7/15. P(H) = 13/24. They are not equal, so no.",
      },
    ],
  },
  {
    id: "measurement",
    topic: "measurement",
    title: "Measurement",
    pack: "Maths",
    sources: [
      "Composite shapes — Lesson 2",
      "Surface area of prisms and cylinders — Lesson 3",
      "Cones and pyramids — Lesson 4",
      "Volume of prisms and cylinders — Lesson 5",
      "Volume of pyramids and cones — Lesson 6",
      "Spheres — Lesson 7",
      "Limits of accuracy — Lesson 8",
    ],
    summary:
      "One unit. Area of composite shapes, then surface area and volume of the standard solids, then how far a rounded measurement can be wrong.",
    blocks: [
      {
        heading: "Composite area and perimeter",
        body: [
          "Split the picture into shapes you already know. Add areas that are there. Subtract holes and cut-outs.",
          "Rectangle: A = lw. Triangle: A = ½bh. Trapezium: A = (a + b)/2 × h. Circle: A = πr². Semicircle: half of that.",
          "A semicircle on the short side of a rectangle only fits if the diameter equals that side. Radius is half the side.",
          "Perimeter is the outside boundary only. A join where two shapes meet is inside, so it is not part of the perimeter.",
          "Adding one semicircle and removing an identical one does not change the area. It does change the perimeter, because both curves are on the boundary.",
          "A three-quarter circle: area is ¾πr². Perimeter is ¾ of the circumference plus the two straight radii.",
        ],
      },
      {
        heading: "Surface area of prisms and cylinders",
        body: [
          "Cube: 6a². Rectangular prism: 2(lw + lh + wh).",
          "Cylinder: two circles plus the curved side. SA = 2πr² + 2πrh. Lying on its side does not change the formula. The length of the tank is h.",
          "A prism: two copies of the cross-section, plus a rectangle for each side of that cross-section. For a right triangle, the third side is the hypotenuse.",
          "Open top: leave that face out. An open tank is the base plus four walls, not six faces.",
          "Stacked solids: do not count a face that is glued to another face. The ring of the larger top that is still showing does count.",
        ],
      },
      {
        heading: "Cones and pyramids",
        body: [
          "Cone slant from the vertical height: l = √(r² + h²). Do this before the surface area if you are only given the height.",
          "Curved surface of a cone is πrl. Total surface area is πr² + πrl.",
          "Square pyramid: base a², plus four triangles. The height of each triangle is the face slant to the middle of a side, ℓ = √(h² + (a/2)²), not the corner edge.",
          "Lateral area of that pyramid is 2aℓ. Total surface area is a² + 2aℓ.",
        ],
      },
      {
        heading: "Volume of prisms, cylinders, pyramids and cones",
        body: [
          "Prism or cylinder: area of the cross-section times the length. Cylinder: V = πr²h.",
          "Pyramid or cone: one third of the prism with the same base and height. V = ⅓Ah. For a cone, A = πr².",
          "1 cm³ = 1 mL. 1 m³ = 1000 L. Convert the lengths into the same unit before you multiply.",
          "Recasting with no metal lost means the volumes are equal. For a cube, the edge is the cube root of that volume.",
          "A smaller cone similar to a larger one: the volume scale is the cube of the length scale. Half the volume means the depth is ∛(1/2) of the full height.",
        ],
      },
      {
        heading: "Spheres and hemispheres",
        body: [
          "Sphere: SA = 4πr² and V = ⁴⁄₃πr³. Diameter is twice the radius. Use the radius in both formulas.",
          "Hemisphere volume is half a sphere: ²⁄₃πr³.",
          "Curved surface of a hemisphere is 2πr². A solid hemisphere also has the flat circle, so total SA = 3πr².",
          "Where a hemisphere sits on a cone, the circular join is hidden. Add the dome to the cone’s curved surface, and do not add the two circles.",
        ],
      },
      {
        heading: "Limits of accuracy and percentage error",
        body: [
          "Percentage error = |measured − actual| / actual × 100. The actual value is the denominator.",
          "The sheet’s accuracy percentage is 100 minus that error. A 1% error is 99% accuracy.",
          "Measured to the nearest unit: the true value sits within half a unit of the recording. 14 cm to the nearest centimetre is from 13.5 cm to 14.5 cm.",
          "For a rectangle, the lower perimeter uses both lower limits. The upper area uses both upper limits. Do not mix a lower length with an upper width if you want the extreme area.",
          "Round once, at the end. Rounding a length early, then squaring it, moves the area.",
        ],
      },
    ],
    formulas: [
      { name: "Rectangle", formula: "A = lw" },
      { name: "Triangle", formula: "A = ½bh" },
      { name: "Trapezium", formula: "A = (a + b)/2 × h" },
      { name: "Circle and semicircle", formula: "A = πr², half of that for a semicircle" },
      { name: "Cube", formula: "SA = 6a², V = a³" },
      { name: "Rectangular prism", formula: "SA = 2(lw + lh + wh), V = lwh" },
      { name: "Cylinder", formula: "SA = 2πr² + 2πrh, V = πr²h" },
      { name: "Cone", formula: "l = √(r² + h²), SA = πr² + πrl, V = ⅓πr²h" },
      { name: "Square pyramid", formula: "ℓ = √(h² + (a/2)²), SA = a² + 2aℓ, V = ⅓a²h" },
      { name: "Sphere", formula: "SA = 4πr², V = ⁴⁄₃πr³" },
      { name: "Solid hemisphere", formula: "V = ²⁄₃πr³, SA = 3πr²" },
      { name: "Percentage error", formula: "|measured − actual| / actual × 100" },
      { name: "Limits of accuracy", formula: "recorded ± half the rounding unit" },
    ],
    glossary: [
      { term: "Composite shape", def: "A shape built by joining or cutting simpler shapes." },
      { term: "Slant height", def: "The diagonal on the surface, from the base up to the apex. Not the vertical height." },
      { term: "Cross-section", def: "The face you would see if you sliced the solid across its length." },
      { term: "Limits of accuracy", def: "The lowest and highest values a rounded measurement could really be." },
    ],
    worked: [
      {
        q: "Lawn: 10 m by 15 m, plus a semicircle of radius 5 m.",
        a: "150 + ½π(25) = 150 + 12.5π ≈ 189.27 m².",
      },
      {
        q: "Cube side 5 cm, and a 6 by 4 by 3 prism.",
        a: "Cube SA = 6 × 25 = 150 cm². Prism SA = 2(24 + 18 + 12) = 108 cm².",
      },
      {
        q: "Cone radius 8 cm, vertical height 15 cm. Total surface area.",
        a: "l = √(64 + 225) = 17. SA = π(64) + π(8)(17) = 200π ≈ 628.32 cm².",
      },
      {
        q: "Square pyramid base 9 cm, height 8 cm. Volume.",
        a: "V = ⅓ × 81 × 8 = 216 cm³.",
      },
      {
        q: "Sphere radius 4 cm.",
        a: "SA = 4π(16) = 64π ≈ 201.06 cm². V = ⁴⁄₃π(64) ≈ 268.08 cm³.",
      },
      {
        q: "220 g poured when 200 g was needed. And 14 cm to the nearest centimetre.",
        a: "Error = 20/200 × 100 = 10%. Limits: 13.5 cm to 14.5 cm.",
      },
    ],
  },
];

