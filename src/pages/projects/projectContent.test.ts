import { describe, it, expect } from "vitest";
import {
  PROJECT_LIST,
  getProjectBySlug,
  getProjectSiblings,
  getProjectBlocks,
} from "./projectContent";

describe("PROJECT_LIST", () => {
  it("contains exactly 3 projects", () => {
    expect(PROJECT_LIST).toHaveLength(3);
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
    const project = getProjectBySlug("internal-ops-platform");
    expect(project).not.toBeNull();
    expect(project?.slug).toBe("internal-ops-platform");
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
    const blocks = getProjectBlocks("internal-ops-platform");
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
