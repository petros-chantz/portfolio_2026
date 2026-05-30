import { afterEach, describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { TopicTag, TopicTagList } from "./TopicTag";

afterEach(cleanup);

describe("TopicTag", () => {
  it("renders the topic text", () => {
    render(<TopicTag topic="Product Design" />);
    expect(screen.getByText("Product Design")).toBeInTheDocument();
  });

  it("renders as a span element", () => {
    render(<TopicTag topic="UX Research" />);
    const el = screen.getByText("UX Research");
    expect(el.tagName.toLowerCase()).toBe("span");
  });
});

describe("TopicTagList", () => {
  it("renders all provided topics", () => {
    const topics = ["Tag A", "Tag B", "Tag C"];
    render(<TopicTagList topics={topics} />);
    for (const topic of topics) {
      expect(screen.getByText(topic)).toBeInTheDocument();
    }
  });

  it("renders the correct number of tags", () => {
    const topics = ["X", "Y", "Z"];
    const { container } = render(<TopicTagList topics={topics} />);
    const tags = container.querySelectorAll("span");
    expect(tags).toHaveLength(3);
  });

  it("renders no tags for an empty array", () => {
    const { container } = render(<TopicTagList topics={[]} />);
    const tags = container.querySelectorAll("span");
    expect(tags).toHaveLength(0);
  });
});
