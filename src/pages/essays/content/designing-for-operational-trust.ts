import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    heading: "Trust is a product requirement",
    body: `Operational software often fails for the same reason large organisations fail to adopt new process: the system asks for obedience before it has earned credibility. Teams are told the new workflow is cleaner, more scalable, or more measurable. What they actually experience is uncertainty. They do not know whether the tool understands the realities of their work, and they do not know what will happen when the tool is wrong.

That gap matters more than polish. In high-friction environments, people do not adopt systems because they are elegant. They adopt them because the system proves it can be trusted under pressure.`,
  },
  {
    type: "image",
    image: {
      alt: "A dense decision environment mapped across teams",
      bg: "#d7ddd5",
    },
    caption: "Mapping the points where trust is either reinforced or broken.",
  },
  {
    type: "text-2col",
    leftHeading: "Where trust breaks",
    left: `Trust erodes when a system hides state, asks users for information they do not have, or responds with bureaucratic language when something goes wrong. In enterprise settings, that usually means people create side channels: spreadsheets, calls, instant messages, and unofficial trackers.

Those side channels are not resistance to change. They are evidence that the product has left an operational gap open.`,
    rightHeading: "What design must do",
    right: `Design has to make that gap visible and then close it deliberately. That means showing status clearly, making constraints legible, and helping users predict outcomes before they commit to an action.

Good operational products reduce interpretive work. They let people understand not just **what** the system says, but **why** it says it and what they can do next.`,
  },
  {
    type: "quote",
    text: "If a tool becomes a guessing game, people go back to whoever answers the phone.",
    attribution: "From a field interview with an operations lead",
  },
  {
    type: "image-2",
    images: [
      {
        alt: "A status tracker replacing ambiguous approvals",
        bg: "#cad4cb",
      },
      {
        alt: "Guided input reducing user anxiety",
        bg: "#bcc8be",
      },
    ],
    caption:
      "Visibility and guided input are often higher leverage than additional features.",
  },
  {
    type: "text",
    heading: "The practical takeaway",
    body: `If adoption is weak, start by asking where the product is forcing people to trust it blindly. That is usually where the redesign work should begin.

Products that support real operations do not just automate process. They make judgment safer. They allow people to move with confidence because the system behaves like a credible partner, not an opaque gatekeeper.`,
  },
];
