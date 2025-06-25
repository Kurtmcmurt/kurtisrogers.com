import { render, screen } from "@solidjs/testing-library";
import { describe, test, expect } from "vitest";
import CSSFilterPanel from "./index";

describe("CSSFilterPanel Component", () => {
  test("renders children correctly", () => {
    render(() => (
      <CSSFilterPanel variant="blur">
        <div data-testid="test-child">Filter Content</div>
      </CSSFilterPanel>
    ));

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByText("Filter Content")).toBeInTheDocument();
  });

  test("applies blur variant class correctly", () => {
    const { container } = render(() => (
      <CSSFilterPanel variant="blur">
        <div>Content</div>
      </CSSFilterPanel>
    ));

    const filterPanel = container.querySelector("div");
    expect(filterPanel).toHaveClass("filterPanel--blur");
  });

  test("renders as div element", () => {
    const { container } = render(() => (
      <CSSFilterPanel variant="blur">
        <div>Content</div>
      </CSSFilterPanel>
    ));

    const filterPanel = container.firstChild;
    expect(filterPanel.tagName).toBe("DIV");
  });

  test("renders with only the variant class", () => {
    const { container } = render(() => (
      <CSSFilterPanel variant="blur">
        <div>Content</div>
      </CSSFilterPanel>
    ));

    const filterPanel = container.querySelector("div");
    expect(filterPanel.className).toBe("filterPanel--blur");
  });

  test("handles complex children", () => {
    render(() => (
      <CSSFilterPanel variant="blur">
        <div>
          <h1 data-testid="title">Title</h1>
          <p data-testid="paragraph">Description</p>
          <button data-testid="button">Click me</button>
        </div>
      </CSSFilterPanel>
    ));

    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });

  test("handles JSX elements as children", () => {
    const TestComponent = () => <span data-testid="test-component">Test Component</span>;

    render(() => (
      <CSSFilterPanel variant="blur">
        <TestComponent />
      </CSSFilterPanel>
    ));

    expect(screen.getByTestId("test-component")).toBeInTheDocument();
  });

  test("handles text content as children", () => {
    render(() => (
      <CSSFilterPanel variant="blur">
        Simple text content
      </CSSFilterPanel>
    ));

    expect(screen.getByText("Simple text content")).toBeInTheDocument();
  });

  test("maintains structure with nested elements", () => {
    const { container } = render(() => (
      <CSSFilterPanel variant="blur">
        <div data-testid="outer">
          <div data-testid="inner">Nested Content</div>
        </div>
      </CSSFilterPanel>
    ));

    const filterPanel = container.querySelector(".filterPanel--blur");
    const outerDiv = filterPanel.querySelector("[data-testid='outer']");
    const innerDiv = outerDiv.querySelector("[data-testid='inner']");

    expect(filterPanel).toBeInTheDocument();
    expect(outerDiv).toBeInTheDocument();
    expect(innerDiv).toBeInTheDocument();
    expect(innerDiv).toHaveTextContent("Nested Content");
  });

  // Test for future extensibility
  test("component structure supports additional variants", () => {
    // This test documents the expected class naming pattern
    // When new variants are added, similar tests can be written
    const { container } = render(() => (
      <CSSFilterPanel variant="blur">
        <div>Content</div>
      </CSSFilterPanel>
    ));

    const filterPanel = container.querySelector("div");
    expect(filterPanel.className).toMatch(/^filterPanel--\w+$/);
  });
});