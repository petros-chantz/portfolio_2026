export const ESSAYS = {
  title: "Essays",
  description:
    "Selected essays by Petros Chantzopoulos on product design, systems thinking, and the practice of building digital work that lasts.",
} as const;

export type Essay = {
  slug: string;
  title: string;
  category: string;
  year: string;
  readTime: string;
  summary: string;
  coverBg: string;
};

export const ESSAY_LIST: readonly Essay[] = [
  {
    slug: "designing-for-operational-trust",
    title: "Designing for Operational Trust",
    category: "Systems",
    year: "2026",
    readTime: "6 min read",
    summary:
      "Why enterprise products fail when they optimise for process compliance before they earn trust from the people doing the work.",
    coverBg: "#d7ddd5",
  },
  {
    slug: "what-a-good-brief-actually-does",
    title: "What a Good Brief Actually Does",
    category: "Practice",
    year: "2025",
    readTime: "5 min read",
    summary:
      "A useful brief is not a requirements dump. It is a decision frame that aligns ambition, constraints, and the shape of evidence needed to move.",
    coverBg: "#e8dfd4",
  },
  {
    slug: "against-surface-level-innovation",
    title: "Against Surface-Level Innovation",
    category: "Opinion",
    year: "2025",
    readTime: "7 min read",
    summary:
      "Why novelty without structural change creates impressive launches, weak products, and organisations that confuse motion for progress.",
    coverBg: "#d9d9ea",
  },
] as const;
