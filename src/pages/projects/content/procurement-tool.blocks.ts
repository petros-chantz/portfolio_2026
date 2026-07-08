import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    body: [
      "A professional services firm had an official procurement tool with only 12% adoption. Most requests still happened through email and chat, creating fragmented records and manual follow-up.",
      "The official workflow was optimized around finance approvals, not requester confidence. People lacked visibility, feared entering incorrect internal codes, and received little feedback when requests were rejected.",
      "I owned end-to-end product design, from root-cause analysis and flow definition through UI delivery and rollout support with finance and operations.",
    ].join("\n\n"),
  },
  {
    type: "image-2",
    images: [
      { alt: "Adoption data and drop-off analysis", bg: "#d9d9ea", caption: "Adoption baseline" },
      { alt: "Shadow IT audit in messaging channels", bg: "#c8c8e0", caption: "Shadow process mapping" },
    ],
  },
  {
    type: "text",
    heading: "Process and decisions",
    body: [
      "Interview and log-analysis synthesis surfaced three recurring failure modes:",
      "- Unclear outcome and timing\n- Fear of entering the wrong cost and GL data\n- Missing feedback loop after approval outcomes",
    ].join("\n\n"),
  },
  {
    type: "text-image",
    heading: "Solution",
    body: "We introduced a named status tracker, guided input defaults by department, and an in-tool clarification thread replacing one-way rejection emails.",
    image: {
      alt: "Redesigned procurement request form with status tracker",
      bg: "#d9d9ea",
    },
    caption: "Status visibility and guided inputs delivered the largest usability lift.",
  },
  {
    type: "quote",
    text: "I actually understand what's happening now. Before, I just sent an email and hoped.",
    attribution: "Operations coordinator, post-launch interview",
  },
  {
    type: "text",
    heading: "Outcome and impact",
    body: [
      "Adoption reached 68% in the first quarter post-launch, and procurement-related support queries dropped by 40%.",
      "The breakthrough was reframing the tool from a control surface for approvers to a confidence-building flow for requesters. When uncertainty dropped, adoption followed.",
    ].join("\n\n"),
  },
  {
    type: "divider",
  },
];