import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    heading: "A brief is a decision frame",
    body: `Many briefs collapse into one of two failures. Either they are thin aspiration documents with no operational meaning, or they are bloated requirement lists that pretend certainty exists where it does not. Neither helps a team make better work.

A good brief narrows ambiguity in the right places. It gives a team enough structure to move without mistaking planning for clarity.`,
  },
  {
    type: "collage",
    caption:
      "Research notes, constraints, and questions arranged before the work becomes a plan.",
    images: [
      {
        alt: "Annotated assumptions and open questions",
        bg: "#e8dfd4",
      },
      {
        alt: "Constraint mapping on paper cards",
        bg: "#d8ccb9",
      },
      {
        alt: "Priority framing workshop notes",
        bg: "#f0e6d8",
      },
      {
        alt: "Success criteria written as decisions",
        bg: "#ddd0c0",
      },
    ],
  },
  {
    type: "text-2col",
    leftHeading: "What it should contain",
    left: `A brief should state the problem in a way that can survive contact with execution. That means naming the real constraint, the stakes, the user group that matters most, and the evidence that would count as progress.

It should also say what is **not** being solved. Scope clarity is not defensive. It is what makes a team decisive.`,
    rightHeading: "What it should avoid",
    right: `Briefs become weak when they confuse solution language with problem language. If the document starts by prescribing screens, features, or deliverables, the team inherits direction without understanding.

The job of a brief is not to predict the answer. It is to create a reliable frame for finding one.`,
  },
  {
    type: "quote",
    text: "A team does not need every answer on day one. It needs the right questions protected from noise.",
    attribution: "A note from my own project practice",
  },
  {
    type: "text",
    heading: "The standard worth holding",
    body: `If a brief cannot help someone decide between two competing directions, it is probably not finished. Strong briefs improve judgment. They shape conversation, not just documentation.

When they do that well, they become part of the product process itself: a stable reference point teams can return to when deadlines, stakeholder opinions, and implementation detail start pulling the work apart.`,
  },
];
