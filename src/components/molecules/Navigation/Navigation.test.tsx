import { render, screen } from "@solidjs/testing-library";
import Navigation from ".";
import { describe, it, expect } from "vitest";
import { JSX } from "solid-js";

vi.mock("@solidjs/router", () => ({
  A: (props: {
    href: string | undefined;
    activeClass: string | undefined;
    children: number | boolean | Node | (string & {}) | JSX.ArrayElement | null | undefined;
  }) => (
    <a href={props.href} class={props.activeClass}>
      {props.children}
    </a>
  )
}));

describe("Navigation Component", () => {
  const mockItems = [
    { link: "/home", text: "Home" },
    { link: "/about", text: "About" }
  ];

  it("renders navigation items correctly", () => {
    render(() => <Navigation items={mockItems} />);

    // Check if the navigation items are rendered
    mockItems.forEach(item => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
      expect(screen.getByText(item.text).closest("a")).toHaveAttribute("href", item.link);
    });
  });

  it("applies custom classes", () => {
    render(() => <Navigation classes="custom-class" items={mockItems} />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("custom-class");
  });

  it("uses the provided label for aria-label", () => {
    render(() => <Navigation label="Custom Navigation" items={mockItems} />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveAttribute("aria-label", "Custom Navigation");
  });

  it("defaults to 'Main' for aria-label if no label is provided", () => {
    render(() => <Navigation items={mockItems} />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveAttribute("aria-label", "Main");
  });

  it("renders without items", () => {
    render(() => <Navigation />);

    // Check if the navigation renders without crashing
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav.querySelector("ul")).toBeEmptyDOMElement();
  });
});
