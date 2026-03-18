export type Principle = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const APPROACH = {
  title: "Design approach",
  intro: [
    "Designers today are compelled to design for contexts shaped by competing constraints, shifting meanings, and inevitable uncertainty. Within organisations, designers also face the reality that design as a discipline is too often threatened and diluted into mere visual or graphic storytelling.",
    "I strive to design, lead, and mentor through a set of core values and principles that underpin every action and decision I make.",
  ],
} as const;

export const PRINCIPLES: readonly Principle[] = [
  {
    title: "Products are for people",
    body: "Products matter when they touch human lives. Value is measured in lived experience: what becomes possible, understandable, and meaningful in use through the product.",
  },
  {
    title: "Design beyond the screen",
    body: "The experience is a holistic constellation: policies, operations, data, support, and service lines all participate in shaping “the product”. The real craft is weaving them all together.",
  },
  {
    title: "Comfortable designing for the unknown",
    body: "Being able to make design decisions when the unknown feels too fuzzy or intimidating. The design process informs each next step because it produces clarity through iteration, turning uncertainty into direction.",
  },
  {
    title: "“Show me, don’t tell me”",
    body: "Great products explain themselves through interaction and behaviour. The narrative should be built into the product capabilities and its journeys.",
  },
  {
    title: "First observe, then propose",
    body: "Proposing without fully understanding the premise of the problem, puts ego and a personal point of view into the work. There is no room for ego in the design process.",
  },
  {
    title: "The design process is inherently messy & goal driven",
    body: "Designing is messy practice, but it's not aimless. Exploration creates possibilities. The more possibilities you see, the more capable you become at navigating ambiguity, without losing the goal.",
  },
  {
    title: "Designing is not a solo project",
    body: "Great products pass through many hands before taking their final form. The aim shouldn’t be personal authorship, but a shared vision we can all contribute.",
  },
  {
    title: "The tools help, but don’t dictate the process or the outcome",
    body: "Start by asking what needs to be done, then choose the tools to get it done. Putting tools first is like saying you can only build what your tool allows.",
  },
];

export const FAQS: readonly Faq[] = [
  {
    question: "How do you make hard design decisions?",
    answer:
      "I start with the context the decision sits within: are we blocked by unknowns, time pressure, or team dynamics? Then we name what we don’t know, reflect in action, and take the next step that produces the most clarity from where we are today.",
  },
  {
    question: "How do you create product visions?",
    answer:
      "The future is unknown and plural, but organisations still need to commit and deliver under uncertainty. Designing a product vision means questioning inherited assumptions and aligning across the product ecosystem on a path that is meaningful in use and viable in practice.",
  },
  {
    question: "How do you lead a team of designers?",
    answer:
      "I lead through a shared path: carving direction and communicating it deliberately: what it is, where it leads, and how the team contributes. The goal is coherence across the work, while giving each designer space to contribute through their skills, interests, and motivation.",
  },
  {
    question: "What is your mentoring style?",
    answer:
      "Designers without direction are at risk of becoming designers without purpose. I mentor through listening, challenge, and direction. I help designers strengthen their judgement and articulate decisions clearly and confidently. I hold weekly 1:1s focusing on progress, motivation, and specific areas for growth.",
  },
];
