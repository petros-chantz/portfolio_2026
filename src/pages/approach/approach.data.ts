export type Principle = {
  title: string;
  body: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const PRINCIPLES: readonly Principle[] = [
  { title: "Products are for people", body: "Body copy goes here..." },
  { title: "Design beyond the screen", body: "Body copy goes here..." },
  {
    title: "Comfortable designing for the unknown",
    body: "Body copy goes here...",
  },
  { title: "Intentionality over urgency", body: "Body copy goes here..." },
  { title: "“Show me, don’t tell me”", body: "Body copy goes here..." },
  { title: "First observe, then propose", body: "Body copy goes here..." },
  {
    title: "The design process is inherently messy & goal driven",
    body: "Body copy goes here...",
  },
  { title: "Designing is not a solo project", body: "Body copy goes here..." },
  {
    title: "The tools help, but don’t dictate the process or the outcome",
    body: "Body copy goes here...",
  },
  {
    title: "Storytelling sells the promise; the product must deliver it",
    body: "Body copy goes here...",
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
