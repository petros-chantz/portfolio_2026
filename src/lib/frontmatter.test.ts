import { describe, it, expect } from "vitest";
import { parseFrontmatter } from "./frontmatter";

describe("parseFrontmatter", () => {
  it("returns empty data and raw string when no frontmatter delimiter", () => {
    const raw = "hello world";
    const { data, content } = parseFrontmatter(raw);
    expect(data).toEqual({});
    expect(content).toBe("hello world");
  });

  it("parses simple key: value pairs", () => {
    const raw = `---
title: My Project
slug: my-project
---
Content here`;
    const { data, content } = parseFrontmatter(raw);
    expect(data.title).toBe("My Project");
    expect(data.slug).toBe("my-project");
    expect(content).toBe("Content here");
  });

  it("strips double-quoted values", () => {
    const raw = `---
title: "Quoted Title"
---
`;
    const { data } = parseFrontmatter(raw);
    expect(data.title).toBe("Quoted Title");
  });

  it("strips single-quoted values", () => {
    const raw = `---
title: 'Single Quoted'
---
`;
    const { data } = parseFrontmatter(raw);
    expect(data.title).toBe("Single Quoted");
  });

  it("handles values containing colons (only first colon is separator)", () => {
    const raw = `---
description: Hello: World
---
`;
    const { data } = parseFrontmatter(raw);
    expect(data.description).toBe("Hello: World");
  });

  it("ignores comment lines starting with #", () => {
    const raw = `---
# This is a comment
title: Test
---
Content`;
    const { data } = parseFrontmatter(raw);
    expect(data.title).toBe("Test");
    expect(Object.keys(data)).toHaveLength(1);
  });

  it("returns empty data and raw string when frontmatter block is unclosed", () => {
    const raw = `---
title: Unclosed
No closing delimiter`;
    const { data, content } = parseFrontmatter(raw);
    expect(data).toEqual({});
    expect(content).toBe(raw);
  });

  it("trims leading and trailing whitespace from keys and values", () => {
    const raw = `---
  title  :   Spaced Title   
---
`;
    const { data } = parseFrontmatter(raw);
    expect(data.title).toBe("Spaced Title");
  });

  it("returns empty content string when no body after frontmatter", () => {
    const raw = `---
title: Only Frontmatter
---`;
    const { content } = parseFrontmatter(raw);
    expect(content).toBe("");
  });

  it("does not include empty lines as keys", () => {
    const raw = `---
title: Test

coverBg: "#fff"
---
Body`;
    const { data } = parseFrontmatter(raw);
    expect(data.title).toBe("Test");
    expect(data.coverBg).toBe("#fff");
  });
});
