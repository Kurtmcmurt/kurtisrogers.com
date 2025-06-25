import { render, screen } from "@solidjs/testing-library";
import { vi, describe, test, expect, beforeEach } from "vitest";
import Icon from "./index";

// Mock the SVG parser helper
vi.mock("@/helpers/parsers", () => ({
  handleSVGString: vi.fn((icondata) => {
    if (icondata === "test-path") return `<path d="M10 10 L20 20"></path>`;
    if (icondata === "circle-data") return `<circle cx="12" cy="12" r="10"></circle>`;
    if (icondata === null || icondata === undefined) return "";
    return "<path d='M0 0'/>";
  })
}));

import { handleSVGString } from "@/helpers/parsers";

describe("Icon Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders SVG element with default props", () => {
    const { container } = render(() => <Icon />);

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("icon");
    expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });

  test("applies default width and height", () => {
    const { container } = render(() => <Icon />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "24px");
    expect(svg).toHaveAttribute("height", "24px");
  });

  test("applies custom width and height", () => {
    const { container } = render(() => <Icon width={32} height={48} />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "32px");
    expect(svg).toHaveAttribute("height", "48px");
  });

  test("applies default fill color", () => {
    const { container } = render(() => <Icon />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("fill", "currentColor");
  });

  test("applies custom fill color", () => {
    const { container } = render(() => <Icon fill="#ff0000" />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("fill", "#ff0000");
  });

  test("applies viewBox when provided", () => {
    const { container } = render(() => <Icon viewbox="0 0 100 100" />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 100 100");
  });

  test("does not set viewBox when not provided", () => {
    const { container } = render(() => <Icon />);

    const svg = container.querySelector("svg");
    expect(svg).not.toHaveAttribute("viewBox");
  });

  test("calls handleSVGString with icondata", () => {
    render(() => <Icon icondata="test-path" />);

    expect(handleSVGString).toHaveBeenCalledWith("test-path");
  });

  test("renders parsed SVG content in g element", () => {
    const { container } = render(() => <Icon icondata="test-path" />);

    const gElement = container.querySelector("g");
    expect(gElement).toBeInTheDocument();
    expect(gElement.innerHTML).toBe(`<path d="M10 10 L20 20"></path>`);
  });

  test("handles different icondata types", () => {
    const { container, unmount } = render(() => <Icon icondata="circle-data" />);

    const gElement = container.querySelector("g");
    expect(gElement.innerHTML).toBe(`<circle cx="12" cy="12" r="10"></circle>`);
    expect(handleSVGString).toHaveBeenCalledWith("circle-data");

    unmount();
  });

  test("handles null icondata", () => {
    const { container } = render(() => <Icon icondata={null} />);

    const gElement = container.querySelector("g");
    expect(gElement).toBeInTheDocument();
    expect(gElement.innerHTML).toBe("");
    expect(handleSVGString).toHaveBeenCalledWith(null);
  });

  test("handles undefined icondata", () => {
    const { container } = render(() => <Icon icondata={undefined} />);

    const gElement = container.querySelector("g");
    expect(gElement).toBeInTheDocument();
    expect(gElement.innerHTML).toBe("");
    expect(handleSVGString).toHaveBeenCalledWith(undefined);
  });

  test("renders children when provided", () => {
    render(() => (
      <Icon>
        <circle data-testid="child-circle" cx="10" cy="10" r="5" />
      </Icon>
    ));

    expect(screen.getByTestId("child-circle")).toBeInTheDocument();
  });

  test("renders both parsed SVG and children", () => {
    const { container } = render(() => (
      <Icon icondata="test-path">
        <rect data-testid="child-rect" x="0" y="0" width="10" height="10" />
      </Icon>
    ));

    const gElement = container.querySelector("g");
    expect(gElement.innerHTML).toBe(`<path d="M10 10 L20 20"></path>`);
    expect(screen.getByTestId("child-rect")).toBeInTheDocument();
  });

  test("handles complex children", () => {
    render(() => (
      <Icon>
        <g data-testid="child-group">
          <circle cx="5" cy="5" r="2" />
          <rect x="10" y="10" width="5" height="5" />
        </g>
      </Icon>
    ));

    const childGroup = screen.getByTestId("child-group");
    expect(childGroup).toBeInTheDocument();
    expect(childGroup.querySelector("circle")).toBeInTheDocument();
    expect(childGroup.querySelector("rect")).toBeInTheDocument();
  });

  test("memoizes parsed SVG correctly", () => {
    render(() => <Icon icondata="test-path" />);

    // Should be called once initially
    expect(handleSVGString).toHaveBeenCalledTimes(1);
    expect(handleSVGString).toHaveBeenCalledWith("test-path");
  });

  test("applies all props together", () => {
    const { container } = render(() => (
      <Icon
        width={50}
        height={60}
        viewbox="0 0 200 200"
        fill="#00ff00"
        icondata="circle-data"
      >
        <text data-testid="child-text" x="10" y="10">Test</text>
      </Icon>
    ));

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "50px");
    expect(svg).toHaveAttribute("height", "60px");
    expect(svg).toHaveAttribute("viewBox", "0 0 200 200");
    expect(svg).toHaveAttribute("fill", "#00ff00");
    expect(svg).toHaveClass("icon");

    const gElement = container.querySelector("g");
    expect(gElement.innerHTML).toBe(`<circle cx="12" cy="12" r="10"></circle>`);

    expect(screen.getByTestId("child-text")).toBeInTheDocument();
    expect(handleSVGString).toHaveBeenCalledWith("circle-data");
  });

  test("handles zero width and height", () => {
    const { container } = render(() => <Icon width={0} height={0} />);

    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "0px");
    expect(svg).toHaveAttribute("height", "0px");
  });

  test("preserves SVG structure", () => {
    const { container } = render(() => <Icon />);

    const svg = container.querySelector("svg");
    expect(svg.tagName).toBe("svg");
    expect(svg.querySelector("g")).toBeInTheDocument();
    expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
