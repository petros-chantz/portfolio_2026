import { describe, it, expect } from "vitest";
import {
  PROJECT_LIST,
  getProjectBySlug,
  getProjectSiblings,
  getProjectBlocks,
} from "./projectContent";
import type {
  ContentBlock,
  Image2Block,
  ImageBlock,
  ImageTextBlock,
  TextBlock,
  TextImageBlock,
} from "./blocks";

describe("PROJECT_LIST", () => {
  it("contains the current portfolio projects", () => {
    const slugs = PROJECT_LIST.map((project) => project.slug);
    expect(PROJECT_LIST.length).toBeGreaterThanOrEqual(4);
    expect(slugs).toContain("AgilityCloud-workspaces");
    expect(slugs).toContain("procurement-tool");
    expect(slugs).toContain("ordering-experiences");
    expect(slugs).toContain("APS-allocations");
  });

  it("each project has required fields", () => {
    for (const project of PROJECT_LIST) {
      expect(typeof project.slug).toBe("string");
      expect(project.slug.length).toBeGreaterThan(0);
      expect(typeof project.title).toBe("string");
      expect(project.title.length).toBeGreaterThan(0);
      expect(typeof project.subtitle).toBe("string");
      expect(Array.isArray(project.topics)).toBe(true);
      expect(typeof project.coverBg).toBe("string");
      expect(project.coverBg.length).toBeGreaterThan(0);
      expect(typeof project.summary).toBe("string");
    }
  });

  it("projects are sorted by order field", () => {
    const slugs = PROJECT_LIST.map((p) => p.slug);
    expect(slugs).toEqual([...slugs]);
  });
});

describe("getProjectBySlug", () => {
  it("returns the correct project for a known slug", () => {
    const knownSlug = PROJECT_LIST[0].slug;
    const project = getProjectBySlug(knownSlug);
    expect(project).not.toBeNull();
    expect(project?.slug).toBe(knownSlug);
    expect(typeof project?.title).toBe("string");
  });

  it("returns a project for each slug in PROJECT_LIST", () => {
    for (const { slug } of PROJECT_LIST) {
      expect(getProjectBySlug(slug)).not.toBeNull();
    }
  });

  it("returns null for an unknown slug", () => {
    expect(getProjectBySlug("does-not-exist")).toBeNull();
  });

  it("returns null for an empty string", () => {
    expect(getProjectBySlug("")).toBeNull();
  });
});

describe("getProjectSiblings", () => {
  it("first project has no previous sibling", () => {
    const first = PROJECT_LIST[0];
    const { previous, next } = getProjectSiblings(first.slug);
    expect(previous).toBeNull();
    expect(next).not.toBeNull();
    expect(next?.slug).toBe(PROJECT_LIST[1].slug);
  });

  it("last project has no next sibling", () => {
    const last = PROJECT_LIST[PROJECT_LIST.length - 1];
    const { previous, next } = getProjectSiblings(last.slug);
    expect(next).toBeNull();
    expect(previous).not.toBeNull();
    expect(previous?.slug).toBe(PROJECT_LIST[PROJECT_LIST.length - 2].slug);
  });

  it("middle project has both siblings", () => {
    const middle = PROJECT_LIST[1];
    const { previous, next } = getProjectSiblings(middle.slug);
    expect(previous).not.toBeNull();
    expect(next).not.toBeNull();
    expect(previous?.slug).toBe(PROJECT_LIST[0].slug);
    expect(next?.slug).toBe(PROJECT_LIST[2].slug);
  });

  it("returns both null for an unknown slug", () => {
    const { previous, next } = getProjectSiblings("does-not-exist");
    expect(previous).toBeNull();
    expect(next).toBeNull();
  });
});

describe("getProjectBlocks", () => {
  it("returns an array for a known slug", () => {
    const blocks = getProjectBlocks(PROJECT_LIST[0].slug);
    expect(Array.isArray(blocks)).toBe(true);
  });

  it("returns blocks for every project in PROJECT_LIST", () => {
    for (const { slug } of PROJECT_LIST) {
      const blocks = getProjectBlocks(slug);
      expect(Array.isArray(blocks)).toBe(true);
    }
  });

  it("returns null for an unknown slug", () => {
    expect(getProjectBlocks("does-not-exist")).toBeNull();
  });
});

describe("APS Allocations content", () => {
  function getApsBlocks(): ContentBlock[] {
    const blocks = getProjectBlocks("APS-allocations");
    expect(blocks).not.toBeNull();
    return blocks ?? [];
  }

  it("uses the expected metadata fields", () => {
    const project = getProjectBySlug("APS-allocations");
    expect(project).not.toBeNull();
    expect(project?.title).toBe("APS Allocations");
    expect(project?.client).toBe("Albert Heijn");
    expect(project?.product).toBe("Campaign Allocation Tool");
    expect(project?.users).toBe("Albert Heijn Campaign Managers, Marketing Teams");
    expect(project?.role).toBe("Junior Product Designer");
    expect(project?.timeline).toBe("Oct 2021 - Dec 2023");
    expect(project?.team).toBe("1 Project Manager, 4 Engineers, 1 Designer, Business Analysts");
    expect(project?.scope).toBe("Campaign Workflow Design, Interaction Design, Wireframing, Prototyping");
  });

  it("loads eight blocks from the companion block file", () => {
    expect(getApsBlocks()).toHaveLength(8);
  });

  it("starts with an intro text block without a heading", () => {
    const [firstBlock] = getApsBlocks();
    expect(firstBlock?.type).toBe("text");
    expect((firstBlock as TextBlock).heading).toBeUndefined();
    expect((firstBlock as TextBlock).body.split(/\n\s*\n/)).toHaveLength(3);
  });

  it("includes all APS-specific block variants", () => {
    const types = getApsBlocks().map((block) => block.type);
    expect(types).toContain("image-2");
    expect(types).toContain("text-image");
    expect(types).toContain("image-text");
    expect(types).toContain("image");
  });

  it("adds per-image captions to the side-by-side image block", () => {
    const imagePair = getApsBlocks().find((block) => block.type === "image-2") as Image2Block | undefined;
    expect(imagePair).toBeDefined();
    expect(imagePair?.caption).toBeUndefined();
    expect(imagePair?.images[0].caption).toBe("Campaign planning");
    expect(imagePair?.images[1].caption).toBe("Allocation review");
  });

  it("uses the updated section headings", () => {
    const headings = getApsBlocks()
      .filter((block): block is TextBlock | TextImageBlock | ImageTextBlock => "heading" in block)
      .map((block) => block.heading)
      .filter(Boolean);

    expect(headings).toContain("Campaign creation");
    expect(headings).toContain("Store selection");
    expect(headings).toContain("Allocation Overview");
    expect(headings).toContain("Looking back");
  });

  it("preserves the revised campaign-manager narrative", () => {
    const narrativeBlock = getApsBlocks().find(
      (block): block is TextImageBlock => block.type === "text-image" && !block.heading,
    );

    expect(narrativeBlock).toBeDefined();
    expect(narrativeBlock?.body).toContain("Conversations with Albert Heijn campaign managers");
    expect(narrativeBlock?.body).toContain("the most important numbers visible throughout the entire process");
    expect(narrativeBlock?.caption).toBe("A supporting visual for the allocation validation workflow.");
  });

  it("provides alt text and loading backgrounds for every APS image", () => {
    for (const block of getApsBlocks()) {
      if (block.type === "image-2") {
        for (const image of block.images) {
          expect(image.alt.length).toBeGreaterThan(0);
          expect(image.bg).toBeTruthy();
        }
        continue;
      }

      if (block.type === "image" || block.type === "text-image" || block.type === "image-text") {
        const image = (block as ImageBlock | TextImageBlock | ImageTextBlock).image;
        expect(image.alt.length).toBeGreaterThan(0);
        expect(image.bg).toBeTruthy();
      }
    }
  });
});
