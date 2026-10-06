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
];
