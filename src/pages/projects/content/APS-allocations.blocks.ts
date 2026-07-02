import type { ContentBlock } from "../blocks";

export const blocks: ContentBlock[] = [
  {
    type: "text",
    body: [
      "Albert Heijn's in-store marketing campaigns are a key part of promoting products and seasonal offers. Every poster, shelf sign and display has to be planned across hundreds of physical stores, each with different layouts, carrier types and installation constraints. At the time, much of this planning was managed through spreadsheets, PDFs and manual coordination between internal campaign managers.",
      "APS Allocations was built to replace that workflow with a planning tool that automatically matched campaign materials to compatible carrier locations across participating stores. Instead of manually calculating placements, campaign planners selected the stores and campaign materials they wanted to run, reviewed and validated the generated allocation, and approved it before it was sent to production.",
      "As part of the Allocation domain team, I worked on designing the campaign planning and allocation experience. The challenge was not just simplifying an already complex workflow, but also improving compliance with allocation rules and reducing allocation errors caused by mismatches between store layouts, carrier types and campaign materials. The goal was to make it easier for planners to validate the generated allocation with confidence while preventing invalid allocations before they reached production.",
    ].join("\n\n"),
  },
  {
    type: "image-2",
    images: [
      { alt: "APS Allocations campaign planning screen", bg: "#dbe8f2", caption: "Campaign planning" },
      { alt: "APS Allocations allocation review screen", bg: "#e6eef5", caption: "Allocation review" },
    ],
  },
  {
    type: "text-image",
    body: [
      "Conversations with Albert Heijn campaign managers highlighted that their biggest challenge when allocating marketing campaigns was the fear of getting the numbers wrong. Not every store carries the same quantity of materials or carrier types, which means planners often had to create their own formulas and repeatedly recalculate allocations to validate their accuracy. Another major part of the process was managing the campaign budget. Their goal was always to allocate as many materials as possible across as many stores as possible without exceeding the available budget.",
      "With this in mind, I designed a workflow that kept the most important numbers visible throughout the entire process, making it clear what needed to happen next while giving planners confidence that the generated allocation was valid.",
    ].join("\n\n"),
    image: {
      alt: "APS Allocations validation workflow screen",
      bg: "#ddeaf4",
      
    },
    caption: "A supporting visual for the allocation validation workflow.",
  },
  {
    type: "image-text",
    heading: "Campaign creation",
    body: [
        "Before APS Allocations, campaign information was managed through Excel spreadsheets that were shared every week between campaign managers, production teams and APS account managers. While this worked for tracking campaigns, production details and campaign materials lived in separate spreadsheets, making the planning process difficult to manage as campaigns progressed.",
        "We decided to make campaign creation the first step of the workflow, bringing together all the information needed for production, including ownership, budget and production references. Once that information was in place, the allocation process could begin."
    ].join("\n\n"),
    image: {
      alt: "APS Allocations review summary screen",
      bg: "#d9e7f3",
    },
    caption: "A paired visual showing how review information can sit alongside supporting explanation.",
  },
  {
    type: "text-image",
    heading: "Store selection",
    body: [
        "With more than 2,600 stores across the Netherlands and Belgium, selecting the right stores was one of the most error-prone parts of the process. A dedicated store selection step allowed campaign planners to browse the latest store information, define the campaign scope and validate participating stores before generating the allocation.",
        "In later iterations, we realised that campaign planners also wanted the ability to check the stores independently of the allocation process. As a result, we included a separate Stores page where they could browse the stores and filter them based on location, status and other criteria.",
    ].join("\n\n"),
    image: {
      alt: "APS Allocations constraint handling screen",
      bg: "#deebf5",
    },
    caption: "A supporting visual for the allocation review and validation flow.",
  },
  {
    type: "text",
    heading: "Allocation Overview",
    body: [
        "What always made campaign managers lose sleep was the allocation calculation. Before APS Allocations, they relied on custom made Excel formulas that were highly error prone and couldn’t account for small but important nuances. For example, two stores could both be classified as AH To Go, yet still differ in size, which directly affected the number of materials that could be allocated. This meant campaign planners often had to go back, manually adjust the numbers and recalculate the estimated production costs. In the worst case scenario, a store would receive the wrong set of campaign materials, leaving the manager unable to fully run the campaign.",
        "From the beginning, our objective was to reduce allocation errors and shorten the time it took to generate, review and approve an allocation. At the same time, the system needed to calculate enough campaign materials to cover every participating store before production started. The Allocation Overview became the result of the allocation engine, automatically matching campaign materials with compatible carrier locations across the selected stores. Instead of checking calculations manually, planners could review the generated allocation, validate costs and approve it with confidence. This also gave them more time to focus on campaign decisions, such as increasing campaign coverage or making better use of the available budget.",
    ].join("\n\n"),
  },
  {
    type: "image",
    image: {
      alt: "APS Allocations full-width approval overview screen",
      bg: "#dce9f4",
    },
    caption: "A full-width supporting visual representing the final approval experience.",
  },
  {
    type: "text",
    heading: "Looking back",
    body: "Designing APS Allocations highlighted how much confidence in internal tools depends on visibility rather than simplification alone. By making rules, constraints, and system decisions easier to understand inside the workflow, the experience helped campaign planners move through a complex operational task with greater speed, clarity, and trust.",
  },
];
