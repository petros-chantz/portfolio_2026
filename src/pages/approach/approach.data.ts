export type Principle = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const PRINCIPLES: readonly Principle[] = [
  {
    title: "Products are for people",
    body: "Products only matter in the lives they enter. Value is measured in lived experience: what becomes possible, understandable, and meaningful in use. The definition of success isn’t bound to stakeholder opinions.",
  },
  {
    title: "Design beyond the screen",
    body: "See the experience as a holistic constellation: policies, operations, data, support, and physical contexts all participate in shaping “the product.” The real craft is weaving them all together.",
  },
  {
    title: "Comfortable designing for the unknown",
    body: "Being able to make and justify design decisions when the unknown feels too fuzzy or intimidating, even before all requirements are clear. The design process informs each next step because it produces clarity through iteration, turning uncertainty into direction.",
  },
  {
    title: "Intentionality over urgency",
    body: "Designing with intentionality means valuing patience and thoughtfulness even when external pressure mounts. The design process shouldn’t be dictated by rushing or poor planning.",
  },
  {
    title: "“Show me, don’t tell me”",
    body: "Great products explain themselves through interaction and behaviour. The narrative should be built into the product and its journey.",
  },
  {
    title: "First observe, then propose",
    body: "Proposing a design without fully understanding the premise of the experience through observation puts ego and a personal point of view into the work. There is no room for ego in the design process.",
  },
  {
    title: "The design process is inherently messy & goal driven",
    body: "Designing is messy, but it is not aimless. Exploration creates possibilities, and progress often comes through loops, detours, and revisiting decisions. The more possibilities you see, the more capable you become at navigating ambiguity, without losing the goal.",
  },
  {
    title: "Designing is not a solo project",
    body: "Great products pass through many hands before taking their final form. The aim shouldn’t be personal authorship, but a shared vision toward new experiences.",
  },
  {
    title: "The tools help, but don’t dictate the process or the outcome",
    body: "Methods and tools are scaffolding, not a substitute for judgement. They support inquiry, decision-making, and communication. The quality of the outcome depends on intent, not the toolkit.",
  },
];

export const FAQS: readonly Faq[] = [
  {
    question: "How do you make hard design decisions?",
    answer:
      "I usually begin by understanding the context around the work, not just the brief itself...",
  },
  {
    question: "How do you create product visions?",
    answer:
      "Tools are important, but they should support judgment rather than replace it...",
  },
  {
    question: "How do you lead a team of designers?",
    answer:
      "Uncertainty is rarely something to eliminate at the start of a project...",
  },
  {
    question: "What is your mentoring style?",
    answer:
      "Most design decisions are shaped through a mix of observation, discussion, and iteration...",
  },
];
