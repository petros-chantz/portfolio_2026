type AboutPart = { text: string; bold?: boolean };
type AboutParagraph = readonly AboutPart[];

export const HOME = {
  name: "Petros Chantzopoulos",
  role: "Strategic Digital Product Designer",
  description:
    "Strategic digital product designer balancing systems thinking and craft. Portfolio, approach, and essays by Petros Chantzopoulos.",
  canonical: "https://petros.work/",
  ogImage: "https://petros.work/og.png",
  contact: {
    emailUser: "petros.chantz",
    emailDomain: "gmail.com",
    linkedin: "https://www.linkedin.com/in/petroschantz/",
  },
  about: [
    [
      {
        text: "I design intentional, strategic digital products for organisations navigating change.",
      },
    ],

    [
      { text: "With " },
      { text: "5+ years", bold: true },
      {
        text: " in B2B product design, I’ve shipped internal tools, large platforms, and B2B e-commerce experiences. I’ve also designed new products shaped by legacy ERP constraints, adoption challenges, shadow IT, and low trust in systems.",
      },
    ],

    [
      {
        text: "I treat research as an integral part of the design process. I frame decisions, test assumptions, and challenge stakeholder preconceptions while still shipping through iterative releases.",
      },
    ],

    [
      {
        text: "I see design not only as problem-solving or interface-making, but as inquiry into what could be and what should be. I see data experiences and AI-driven behaviours as things that should add value and be designed with intention so they make sense to people.",
      },
    ],

    [
      { text: "Currently, I’m a " },
      { text: "Sr Product Designer @ APS Group", bold: true },
      {
        text: ", leading strategic initiatives in data-heavy marketing operations tech. I also contribute to design ops, research and prototyping, mentor designers, and run an internship programme.",
      },
    ],
  ] as const satisfies readonly AboutParagraph[],
  note: "Most of my work is confidential and can’t be shared publicly. I’m happy to share my portfolio privately on request.",
} as const;
