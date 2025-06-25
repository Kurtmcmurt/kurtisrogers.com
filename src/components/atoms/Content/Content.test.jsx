import { render, screen } from "@solidjs/testing-library";
import { vi, describe, test, expect, beforeEach } from "vitest";
import Content from ".";

// Mock the colour helper
vi.mock("@/helpers/colours", () => ({
  handleColourClasses: vi.fn((colour, type) => {
    if (colour === "black" && type === "background") return "bg-black";
    if (colour === "white" && type === "background") return "bg-white";
    if (colour === "red" && type === "background") return "bg-red-500";
    return "";
  })
}));

import { handleColourClasses } from "@/helpers/colours";

describe("Content Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders children correctly", () => {
    render(() => (
      <Content firstChild={true}>
        <div data-testid="test-child">Test Content</div>
      </Content>
    ));

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("applies default variant (black) when no variant is provided", () => {
    render(() => (
      <Content firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    expect(handleColourClasses).toHaveBeenCalledWith("black", "background");
  });

  test("applies custom variant when provided", () => {
    render(() => (
      <Content variant="red" firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    expect(handleColourClasses).toHaveBeenCalledWith("red", "background");
  });

  test("applies first-element class when firstChild is true", () => {
    const { container } = render(() => (
      <Content firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    const section = container.querySelector("section");
    expect(section).toHaveClass("first-element");
    expect(section).not.toHaveClass("page-sibling");
  });

  test("applies page-sibling class when firstChild is false", () => {
    const { container } = render(() => (
      <Content firstChild={false}>
        <div>Content</div>
      </Content>
    ));

    const section = container.querySelector("section");
    expect(section).toHaveClass("page-sibling");
    expect(section).not.toHaveClass("first-element");
  });

  test("applies gridLayout class when provided", () => {
    const { container } = render(() => (
      <Content gridLayout="grid-cols-2" firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    const section = container.querySelector("section");
    expect(section).toHaveClass("grid-cols-2");
  });

  test("does not apply gridLayout class when not provided", () => {
    const { container } = render(() => (
      <Content firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    const section = container.querySelector("section");
    expect(section?.className).not.toContain("undefined");
    expect(section?.className).not.toContain("null");
  });

  test("applies all base classes correctly", () => {
    const { container } = render(() => (
      <Content variant="white" gridLayout="grid-cols-3" firstChild={false}>
        <div>Content</div>
      </Content>
    ));

    const section = container.querySelector("section");
    expect(section).toHaveClass("content-grid");
    expect(section).toHaveClass("bg-white");
    expect(section).toHaveClass("grid-cols-3");
    expect(section).toHaveClass("page-sibling");
  });

  test("memoizes colour classes correctly", () => {
    // Render component twice to ensure memo is working
    const { unmount } = render(() => (
      <Content variant="red" firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    // handleColourClasses should be called once
    expect(handleColourClasses).toHaveBeenCalledTimes(1);
    expect(handleColourClasses).toHaveBeenCalledWith("red", "background");

    unmount();

    // Render again with same props
    render(() => (
      <Content variant="red" firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    // Should be called again (new component instance)
    expect(handleColourClasses).toHaveBeenCalledTimes(2);
  });

  test("renders as section element", () => {
    const { container } = render(() => (
      <Content firstChild={true}>
        <div>Content</div>
      </Content>
    ));

    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
