import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    body: [
      "A mid-sized logistics company had grown rapidly through acquisitions, inheriting three separate operations platforms that had never been reconciled. Dispatchers, warehouse leads, and regional managers were all working from different systems with spreadsheets bridging critical gaps.",
      "The brief was to design a unified internal platform that could replace all three tools without disrupting live operations. The problem was not only technical fragmentation, but confidence fragmentation. Teams trusted their workarounds more than the existing products.",
      "I led the design work across discovery and delivery, facilitating field research, mapping operational handoffs, and aligning a phased rollout with product and engineering constraints.",
    ].join("\n\n"),
  },
  {
    type: "image",
    image: {
      alt: "Early mapping of the three legacy systems and their data overlaps",
      bg: "#d4ddd2",
    },
    caption: "Legacy system overlap map used to define migration boundaries.",
  },
  {
    type: "text",
    heading: "Process and decisions",
    body: [
      "We spent the first three weeks in contextual research, shadowing dispatchers on night shifts and warehouse leads during peak traffic windows.",
      "From this, we anchored decisions on three principles:",
      "- Legibility over completeness\n- Continuity over replacement\n- Accountability without blame",
    ].join("\n\n"),
  },
  {
    type: "quote",
    text: "We don't need more data. We need to know which data matters right now.",
    attribution: "Senior dispatcher, field research interview",
  },
  {
    type: "text",
    heading: "Solution",
    body: "The platform introduced role-specific entry points over a shared state model, so teams could keep familiar mental models while coordinating from one source of truth.",
  },
  {
    type: "image-2",
    images: [
      { alt: "Dispatcher dashboard wireframe", bg: "#c8d4c6" },
      { alt: "Warehouse lead task view wireframe", bg: "#b8ccb6" },
    ],
    caption: "Shared data model, role-specific workflows.",
  },
  {
    type: "text",
    heading: "Outcome and impact",
    body: [
      "The platform launched in a phased rollout over six months. Legacy System A was decommissioned in month four, with the final two retired by month eight. Spreadsheet usage in tracked workflows dropped by 74% in the first quarter post-launch.",
      "The strongest design move was not introducing a new interaction model. It was making trust visible, step by step, while preserving continuity with how people already worked under pressure.",
    ].join("\n\n"),
  },
];