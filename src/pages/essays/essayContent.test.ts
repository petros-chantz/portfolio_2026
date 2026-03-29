import { describe, expect, it } from "vitest";
import { ESSAY_LIST } from "./Essays.data";
import { getEssayBlocks } from "./essayContent";
import { formatReadTime } from "./readTime";

describe("essay content integrity", () => {
  it("has unique slugs", () => {
    const slugs = ESSAY_LIST.map((essay) => essay.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("resolves blocks for every essay", async () => {
    for (const essay of ESSAY_LIST) {
      const blocks = await getEssayBlocks(essay.slug);
      expect(blocks).not.toBeNull();
      expect((blocks ?? []).length).toBeGreaterThan(0);
    }
  });

  it("uses computed read time for every essay", async () => {
    for (const essay of ESSAY_LIST) {
      const blocks = await getEssayBlocks(essay.slug);
      expect(blocks).not.toBeNull();
      if (blocks) {
        expect(essay.readTime).toBe(formatReadTime(blocks));
      }
    }
  });
});
