import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    heading: "Context",
    body: `A mid-sized logistics company had grown rapidly through acquisitions, inheriting three separate operations platforms that had never been reconciled. Dispatchers, warehouse leads, and regional managers were all working from different systems — with data exported into spreadsheets bridging the gaps.

The brief was to design a unified internal platform that could replace all three tools without disrupting live operations during the transition.`,
  },
  {
    type: "image",
    image: {
      alt: "Operations platform overview",
      bg: "#d4ddd2",
    },
    caption:
      "Early mapping of the three legacy systems and their data overlaps.",
  },
  {
    type: "text-2col",
    leftHeading: "The problem",
    left: `The fragmentation wasn't just technical. Each team had built deep workarounds into their daily routines — the spreadsheets were trusted more than the systems. Any new platform had to earn that trust before it could replace those behaviours.

We spent the first three weeks in field research: shadowing dispatchers on night shifts, sitting with warehouse leads during peak hours, and interviewing regional managers about the decisions they made without system support.`,
    rightHeading: "Design principles",
    right: `Three principles emerged from research and shaped every design decision:

**Legibility over completeness.** Surface what's actionable now, not everything that could be shown.

**Continuity over replacement.** Honour existing mental models from legacy tools rather than forcing relearning.

**Accountability without blame.** Make system state visible so teams can coordinate — not report on each other.`,
  },
  {
    type: "quote",
    text: "We don't need more data. We need to know which data matters right now.",
    attribution: "Senior dispatcher, field research interview",
  },
  {
    type: "image-2",
    images: [
      {
        alt: "Dispatcher dashboard wireframe",
        bg: "#c8d4c6",
      },
      {
        alt: "Warehouse lead task view wireframe",
        bg: "#b8ccb6",
      },
    ],
    caption: "Role-specific views — same data model, different entry points.",
  },
  {
    type: "text",
    heading: "Outcome",
    body: `The platform launched in a phased rollout over six months. Legacy System A was decommissioned in month four; the final two followed by month eight. Spreadsheet usage in tracked workflows dropped by 74% within the first quarter post-launch.

More significantly, the cross-team coordination issues that had driven the original brief — missed handoffs, conflicting state between systems — became visible and resolvable within the platform rather than requiring escalation.`,
  },
];
