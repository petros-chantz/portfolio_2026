import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    body: [
      "One of the core services APS Group provides to its clients is the ability to set up fully configurable marketing commerce webshops. Over the years, these webshops became an important part of the business and were adopted by dozens of enterprise clients across different industries. As the platform evolved, it grew around business requirements and client-specific customisations, but very little attention had been given to the overall user experience or consistency of the product.",
      "Over time, the platform became increasingly difficult to evolve. New features were often introduced on top of existing functionality, and many client-specific customisations had to be implemented and maintained separately for each webshop. At the same time, recurring feedback from users and business stakeholders highlighted that everyday tasks such as placing orders and managing previous purchases had become unnecessarily complex.",
"My role was to understand the existing platform, document the current experience and map the many customisations that had accumulated across different client implementations. Working closely with the Product Manager, we defined which parts of the experience should become part of the shared product and which should remain configurable for individual clients. As part of that work, I redesigned the ordering and order management experience, focusing on the journeys customers used most frequently.",
    ].join("\n\n"),
  },
  {
    type: "image-2",
    images: [
      { alt: "Ordering flow overview placeholder", bg: "#d8eaf7", caption: "Ordering flow" },
      { alt: "Order summary placeholder", bg: "#cfe2f0", caption: "Order summary" },
    ],
  },
  {
    type: "text-image",
    heading: "Checkout and review",
    body: [
      "Placeholder content: describe how users review quantities, pricing, and delivery constraints before confirming the order.",
      "Placeholder content: explain how validation and error prevention were integrated into the flow.",
    ].join("\n\n"),
    image: {
      alt: "Checkout and review placeholder",
      bg: "#d8e4ef",
    },
    caption: "Placeholder supporting visual for checkout and review.",
  },
  {
    type: "image-text",
    heading: "Order management",
    body: [
      "Placeholder content: describe how submitted orders are tracked and updated across statuses.",
      "Placeholder content: explain how this experience supports both B2B account users and internal teams.",
    ].join("\n\n"),
    image: {
      alt: "Order management placeholder",
      bg: "#d3deea",
    },
    caption: "Placeholder supporting visual for order management.",
  },
  {
    type: "text",
    heading: "Outcome and next iteration",
    body: [
      "Placeholder content: summarize impact once metrics and rollout outcomes are finalized.",
      "Placeholder content: note what was learned and what should be improved in the next release cycle.",
    ].join("\n\n"),
  },
];