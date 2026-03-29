import { describe, expect, it } from "vitest";
import { formatReadTime, estimateReadMinutes } from "./readTime";
import { blocks as operationalTrustBlocks } from "./content/designing-for-operational-trust";

describe("essay read-time estimation", () => {
  it("returns at least one minute", () => {
    expect(estimateReadMinutes([])).toBe(1);
  });

  it("formats in '<n> min read' format", () => {
    expect(formatReadTime(operationalTrustBlocks)).toMatch(/^\d+ min read$/);
  });

  it("counts markdown text content", () => {
    const minutes = estimateReadMinutes([
      {
        type: "text",
        body: "**Bold** text with a [link](https://example.com) and `code`.",
      },
    ]);

    expect(minutes).toBe(1);
  });
});
