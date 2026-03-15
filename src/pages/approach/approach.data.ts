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
    body: "Products matter when they touch human lives. Value is measured in lived experience: what becomes possible, understandable, and meaningful in use through the product. A successful product is a multi-faceted one.",
  },
  {
    title: "Design beyond the screen",
    body: "The experience is a holistic constellation: policies, operations, data, support, and physical contexts all participate in shaping “the product”. The real craft is weaving them all together.",
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
    body: "Great products explain themselves through interaction and behaviour. The narrative should be built into the product and its journeys.",
  },
  {
    title: "First observe, then propose",
    body: "Proposing a design without fully understanding the premise of the experience through observation, puts ego and a personal point of view into the work. There is no room for ego in the design process.",
  },
  {
    title: "The design process is inherently messy & goal driven",
    body: "Designing is messy practice, but it is not aimless. Exploration creates possibilities, and progress often comes through loops, detours, reflecting and revisiting decisions. The more possibilities you see, the more capable you become at navigating ambiguity, without losing the goal.",
  },
  {
    title: "Designing is not a solo project",
    body: "Great products pass through many hands before taking their final form. The aim shouldn’t be personal authorship, but a shared vision toward new experiences.",
  },
  {
    title: "The tools help, but don’t dictate the process or the outcome",
    body: "Methods and tools are scaffolding, not a substitute for judgement. They support inquiry, decision making and communication. The quality of the outcome depends on intent, not the toolkit.",
  },
];

export const FAQS: readonly Faq[] = [
  {
    question: "How do you make hard design decisions?",
    answer:
      "I always look at the context and narrative the decision sits within. Is it hard because the unknowns obscure the outcome and make the fidelity difficult to judge? Is it hard because planning is poor and the logistical side is under pressure? Or is there an individual or team dynamic that makes the decision harder? In the end, I base decisions on the unknowns we can name. I very often and deliberately reflect in action, and I ask my team to do the same. I ask: what step can we take now that will yield the most clarity from where we are today?",
  },
  {
    question: "How do you create product visions?",
    answer:
      "Designing a product that can withstand the passage of time is not an easy task. The future is plural, yet within companies and organisations we are compelled to design within that uncertainty. I employ a set of design practices and methodologies, and I borrow knowledge from disciplines such as anthropology, ethnography, and business management to inform my proposed futures. In the end, I believe designing new visions of the future is an act of radically questioning, critiquing, and reflecting on the past, the present, and the future. I don’t copy past ideas simply because it is easy to do so; I question them. Lastly, product vision is a team effort and a shared one. We all need to be able to understand and articulate why we want to take that path, and what outcomes we expect to find.",
  },
  {
    question: "How do you lead a team of designers?",
    answer:
      "I strive to lead my team through a common visionary path. My job is to carve that path, then articulate and communicate it deliberately: what it is, where it leads, and how the team can contribute to it. Part of the role is bringing out the best version of each person within that direction. How can you contribute through your own skills, interests, and motivation toward this goal? A useful analogy is being a maestro of an orchestra. The interpretation of the score is mine to shape, but I need each musician to play their part in time with the whole. Sometimes they drift from the direction and I need to bring them back. Other times I need to let each soloist play their solo. In the end, the complete orchestra makes the music. I’m there to guide them to become the best version of themselves.",
  },
  {
    question: "What is your mentoring style?",
    answer:
      "I take mentoring very seriously. I’m a firm believer that young designers without direction are at risk of becoming designers without purpose. My role is to listen, to guide them toward directions they haven’t considered, to challenge their preconceptions, and to question their choices—not for the sake of questioning, but to help them articulate their design decisions more clearly, and to become visionary designers with a reason to design technology. I hold weekly 1:1 sessions where we talk about development and progress, motivations, and areas for growth.",
  },
];
