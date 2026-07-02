import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { ProjectBlocks } from "./ProjectBlocks";
import type { ContentBlock } from "../blocks";

afterEach(cleanup);

describe("ProjectBlocks", () => {
  it("renders a text-image block with heading, prose, and caption", () => {
    const blocks: ContentBlock[] = [
      {
        type: "text-image",
        heading: "Campaigns",
        body: "A compact explanation of the allocation workflow.",
        image: { src: "/demo-a.png", alt: "Campaign workflow", bg: "#ddeaf4" },
        caption: "Workflow view",
      },
    ];

    render(<ProjectBlocks blocks={blocks} />);

    expect(screen.getByRole("heading", { name: "Campaigns", level: 3 })).toBeInTheDocument();
    expect(screen.getByText("A compact explanation of the allocation workflow.")).toBeInTheDocument();
    expect(screen.getByAltText("Campaign workflow")).toBeInTheDocument();
    expect(screen.getByText("Workflow view")).toBeInTheDocument();
  });

  it("renders an image-text block with the image and its caption", () => {
    const blocks: ContentBlock[] = [
      {
        type: "image-text",
        heading: "Stores",
        body: "Store-level constraints become visible at the right moment.",
        image: { src: "/demo-b.png", alt: "Store constraints", bg: "#deebf5" },
        caption: "Store review",
      },
    ];

    render(<ProjectBlocks blocks={blocks} />);

    expect(screen.getByAltText("Store constraints")).toBeInTheDocument();
    expect(screen.getByText("Store review")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Stores", level: 3 })).toBeInTheDocument();
  });

  it("renders individual captions for each image in an image-2 block", () => {
    const blocks: ContentBlock[] = [
      {
        type: "image-2",
        images: [
          { src: "/demo-c.png", alt: "Campaign planning screen", bg: "#dbe8f2", caption: "Campaign planning" },
          { src: "/demo-d.png", alt: "Allocation review screen", bg: "#e6eef5", caption: "Allocation review" },
        ],
      },
    ];

    render(<ProjectBlocks blocks={blocks} />);

    expect(screen.getByAltText("Campaign planning screen")).toBeInTheDocument();
    expect(screen.getByAltText("Allocation review screen")).toBeInTheDocument();
    expect(screen.getByText("Campaign planning")).toBeInTheDocument();
    expect(screen.getByText("Allocation review")).toBeInTheDocument();
  });

  it("uses the shared 56px vertical block spacing wrapper", () => {
    const blocks: ContentBlock[] = [
      { type: "text", body: "First block" },
      { type: "text", body: "Second block" },
    ];

    const { container } = render(<ProjectBlocks blocks={blocks} />);

    expect(container.firstElementChild).toHaveClass("space-y-14");
  });
});