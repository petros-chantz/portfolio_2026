export const PROJECTS = {
  title: "Projects",
  description:
    "Selected projects by Petros Chantzopoulos — strategic digital product design work across platforms, tools, and systems.",
} as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  coverBg: string;
};

export const PROJECT_LIST: readonly Project[] = [
  {
    slug: "internal-ops-platform",
    title: "Internal Ops Platform",
    category: "Product Design",
    year: "2024",
    summary:
      "End-to-end redesign of a multi-tenant internal operations platform for a logistics company navigating rapid organisational growth.",
    coverBg: "#d4ddd2",
  },
  {
    slug: "b2b-ecommerce-redesign",
    title: "B2B E-Commerce Redesign",
    category: "Platform",
    year: "2023",
    summary:
      "Rethinking the purchasing experience for a complex B2B catalogue with deep ERP integration and high-stakes procurement constraints.",
    coverBg: "#e8dfd4",
  },
  {
    slug: "procurement-tool",
    title: "ERP-Integrated Procurement",
    category: "Enterprise Tool",
    year: "2024",
    summary:
      "Designing a procurement workflow tool that reduced shadow IT adoption and rebuilt trust in a fragmented internal system.",
    coverBg: "#d9d9ea",
  },
] as const;
