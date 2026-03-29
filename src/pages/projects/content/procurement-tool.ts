import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    heading: "Context",
    body: `A professional services firm had a procurement tool — but no one used it. Employees raised purchase requests through a mix of emails, Teams messages, and one-to-one conversations with the finance team. The official system had been live for two years and had a 12% adoption rate.

The brief was to "fix the UX." The real problem was more fundamental: the system had been designed around the finance team's approval workflow, not around the person making the request. It created anxiety rather than confidence.`,
  },
  {
    type: "image-2",
    images: [
      {
        alt: "Adoption data and drop-off analysis",
        bg: "#d9d9ea",
      },
      {
        alt: "Shadow IT audit — Teams messages and email chains",
        bg: "#c8c8e0",
      },
    ],
    caption:
      "12% adoption. The rest was shadow IT — documented through a two-week audit.",
  },
  {
    type: "text-2col",
    leftHeading: "Root cause",
    left: `Three patterns emerged from interviews and system log analysis:

**Uncertainty about outcome.** People had no visibility into whether their request would be approved, how long it would take, or what happened if it was rejected.

**Fear of getting it wrong.** The form required cost centre codes, GL account numbers, and a supplier ID — information most employees didn't have and had no way to find.

**No feedback loop.** Approved or rejected, the system sent a single email. Employees learned nothing that would help them next time.`,
    rightHeading: "Design response",
    right: `The redesign addressed each pattern directly:

**Visible process.** A status tracker showed exactly where a request was in the approval chain — with names, not just stages.

**Guided input.** Cost centre and GL code fields became smart selectors tied to the employee's department, with sensible defaults and contextual help.

**Closed loops.** Rejection emails were replaced with in-tool conversations — finance could ask a clarifying question, the requester could respond, and both sides had a record.`,
  },
  {
    type: "image",
    image: {
      alt: "Redesigned procurement request form with status tracker",
      bg: "#d9d9ea",
    },
    caption:
      "Status tracker and guided input — the two highest-impact changes from research.",
  },
  {
    type: "quote",
    text: "I actually understand what's happening now. Before, I just sent an email and hoped.",
    attribution: "Operations coordinator, post-launch interview",
  },
  {
    type: "divider",
  },
  {
    type: "text",
    heading: "Outcome",
    body: `Adoption reached 68% within the first quarter after relaunch — a 5.6× increase. Finance reported a 40% reduction in procurement-related support queries.

More importantly, the pattern of change proved replicable: the design principles that rebuilt trust in this tool became a reference model for two other internal systems undergoing redesign in the same organisation.`,
  },
];
