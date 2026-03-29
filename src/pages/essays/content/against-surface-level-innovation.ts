import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    heading: "Innovation is not the same as change",
    body: `A great deal of product innovation is performative. It changes the visible layer of an experience while leaving the underlying system intact. New launches look bold, language becomes more ambitious, and teams feel momentum. Then the same bottlenecks, incentives, and structural weaknesses reassert themselves.

This is why so many organisations ship impressive artefacts without producing durable improvement.`,
  },
  {
    type: "image-2",
    images: [
      {
        alt: "A polished launch layer over a fragmented system",
        bg: "#d9d9ea",
      },
      {
        alt: "Backstage process dependencies that remain unchanged",
        bg: "#cacade",
      },
    ],
    caption:
      "Visible novelty on one side. Operational continuity on the other.",
  },
  {
    type: "text-2col",
    leftHeading: "The surface trap",
    left: `Surface-level innovation is attractive because it is legible. It produces something stakeholders can point at. It photographs well. It launches cleanly. But it often avoids the slow, political, and less glamorous work of changing incentives, workflows, and ownership structures.

The result is a product that looks like change without carrying the cost of actual transformation.`,
    rightHeading: "What real change involves",
    right: `Real change usually means reworking service boundaries, removing duplicated steps, making tradeoffs explicit, or redesigning the way teams coordinate. It is rarely a single feature. More often, it is the cumulative effect of structural decisions that allow a product to behave differently over time.

That work is harder to sell, but it is the only kind that compounds.`,
  },
  {
    type: "image",
    image: {
      alt: "A system map showing where product decisions hit organisational constraints",
      bg: "#d9d9ea",
    },
    caption:
      "Where innovation narratives usually stop is often where the serious work begins.",
  },
  {
    type: "quote",
    text: "If the organisation cannot behave differently after the launch, the product is mostly theatre.",
    attribution: "An uncomfortable but useful test",
  },
  {
    type: "divider",
    label: "Closing note",
  },
  {
    type: "text",
    heading: "A better standard",
    body: `Ask whether the work changes capability, not just appearance. Ask whether teams can make better decisions, whether users can complete critical tasks more reliably, and whether the product reduces dependency on heroic effort behind the scenes.

That is a harder standard than novelty. It is also the one that matters.`,
  },
];
