import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    heading: "Context",
    body: `A European industrial supplier wanted to move their sales operation online — but the catalogue had over 80,000 SKUs, complex pricing tiers, and ordering rules tied to a decades-old ERP system. Their existing e-commerce attempt had failed: customers abandoned it and called sales reps instead.

The design challenge was not to "make a better website" — it was to understand why customers preferred the phone, and design a digital experience that could actually substitute for that relationship.`,
  },
  {
    type: "collage",
    height: 260,
    images: [
      {
        alt: "Customer journey mapping session",
        bg: "#e8dfd4",
        className: "left-0 top-12 h-36 w-52 rotate-[-4deg]",
      },
      {
        alt: "ERP data structure sketch",
        bg: "#d6c9b8",
        className: "left-44 top-2 h-40 w-60 rotate-[3deg]",
      },
      {
        alt: "Competitor benchmarking printouts",
        bg: "#f0e6d8",
        className: "right-40 top-20 h-32 w-48 rotate-[-2deg]",
      },
      {
        alt: "Whiteboard session photo",
        bg: "#ddd0c0",
        className: "right-0 top-4 h-44 w-52 rotate-[5deg]",
      },
    ],
  },
  {
    type: "text-2col",
    leftHeading: "What we found",
    left: `Customers weren't avoiding the website because it was hard to use — they were avoiding it because it gave them no confidence. Price breaks weren't shown until checkout. Stock availability was wrong. And the ERP's product taxonomy made no sense to someone who thought in application terms, not part numbers.

The phone call wasn't a workaround. It was a trust checkpoint.`,
    rightHeading: "Where design focused",
    right: `We restructured the catalogue around how customers actually searched — by application, material, and environmental condition — while mapping back to ERP part numbers invisibly.

Pricing transparency moved to the product page, with tier breaks shown before any item was added to a basket. Stock was surfaced honestly: "available," "3–5 day lead time," or "order to make" — not a binary in/out.`,
  },
  {
    type: "image",
    image: {
      alt: "Product detail page showing transparent pricing tiers",
      bg: "#e8dfd4",
    },
    caption:
      "Product detail page — pricing tiers and lead times visible before adding to basket.",
  },
  {
    type: "quote",
    text: "When I can see the price breaks and the lead time on the same screen, I don't need to call anyone.",
    attribution: "Procurement manager, usability testing round 2",
  },
  {
    type: "text",
    heading: "Outcome",
    body: `At six months post-launch, direct digital orders had grown from 9% to 41% of total order volume. Inbound sales calls dropped by 28%, with reps reporting that the remaining calls were higher-value conversations rather than catalogue navigation.

The ERP integration constraints that had previously been seen as blockers were reframed through design as a transparency opportunity — the system's complexity became legible rather than hidden.`,
  },
];
