import { render, screen } from "@solidjs/testing-library";
import { Router, Route } from "@solidjs/router";
import { describe, test, expect } from "vitest";
import Logo from ".";
import { JSX } from "solid-js";

// Helper function to render component with router context
const renderWithRouter = (component: {
  (): JSX.Element;
  (): number | boolean | Node | (string & {}) | JSX.ArrayElement | null | undefined;
}) => {
  return render(() => (
    <Router>
      <Route path="/" component={() => component()} />
    </Router>
  ));
};

describe("Logo Component", () => {
  test("renders with default props", () => {
    renderWithRouter(() => <Logo />);

    const logoLink = screen.getByRole("link", { name: "Go to the homepage" });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveTextContent("Kurtis Rogers");
  });

  test("renders default text in strong element", () => {
    renderWithRouter(() => <Logo />);

    const strongElement = screen.getByText("Kurtis Rogers");
    expect(strongElement.tagName).toBe("STRONG");
  });

  test("renders custom text", () => {
    renderWithRouter(() => <Logo text="Custom Brand" />);

    expect(screen.getByText("Custom Brand")).toBeInTheDocument();
    expect(screen.queryByText("Kurtis Rogers")).not.toBeInTheDocument();
  });

  test("links to homepage", () => {
    renderWithRouter(() => <Logo />);

    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("has correct aria-label", () => {
    renderWithRouter(() => <Logo />);

    const logoLink = screen.getByLabelText("Go to the homepage");
    expect(logoLink).toBeInTheDocument();
  });

  test("applies primary variant styles by default", () => {
    const { container } = renderWithRouter(() => <Logo />);

    const logoLink = container.querySelector("a");
    expect(logoLink).toHaveClass("logo");
    expect(logoLink).toHaveClass("bg-red");
    expect(logoLink).toHaveClass("text-white");
  });

  test("applies primary variant styles when explicitly set", () => {
    const { container } = renderWithRouter(() => <Logo variant="primary" />);

    const logoLink = container.querySelector("a");
    expect(logoLink).toHaveClass("logo");
    expect(logoLink).toHaveClass("bg-red");
    expect(logoLink).toHaveClass("text-white");
  });

  test("applies secondary variant styles", () => {
    const { container } = renderWithRouter(() => <Logo variant="secondary" />);

    const logoLink = container.querySelector("a");
    expect(logoLink).toHaveClass("logo");
    expect(logoLink).toHaveClass("bg-white");
    expect(logoLink).toHaveClass("text-black");
    expect(logoLink).not.toHaveClass("bg-red");
    expect(logoLink).not.toHaveClass("text-white");
  });

  test("combines variant and base classes correctly", () => {
    const { container } = renderWithRouter(() => <Logo variant="primary" />);

    const logoLink = container.querySelector("a");
    expect(logoLink?.className).toBe("logo bg-red text-white active");
  });

  test("combines secondary variant and base classes correctly", () => {
    const { container } = renderWithRouter(() => <Logo variant="secondary" />);

    const logoLink = container.querySelector("a");
    expect(logoLink?.className).toBe("logo bg-white text-black active");
  });

  test("renders as anchor element", () => {
    const { container } = renderWithRouter(() => <Logo />);

    const logoElement = container.firstChild;
    expect(logoElement instanceof Element && logoElement.tagName).toBe("A");
  });

  test("applies both variant and text props together", () => {
    renderWithRouter(() => <Logo variant="secondary" text="My Brand" />);

    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveTextContent("My Brand");
    expect(logoLink).toHaveClass("bg-white");
    expect(logoLink).toHaveClass("text-black");
  });

  test("strong element contains the text content", () => {
    renderWithRouter(() => <Logo text="Test Brand" />);

    const strongElement = screen.getByText("Test Brand");
    expect(strongElement.tagName).toBe("STRONG");
    expect(strongElement).toBeInTheDocument();
  });

  test("handles empty text", () => {
    renderWithRouter(() => <Logo text="" />);

    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveTextContent("");

    const strongElement = logoLink.querySelector("strong");
    expect(strongElement).toBeInTheDocument();
    expect(strongElement).toHaveTextContent("");
  });

  test("accessibility attributes are present", () => {
    renderWithRouter(() => <Logo />);

    const logoLink = screen.getByRole("link");
    expect(logoLink).toHaveAttribute("aria-label", "Go to the homepage");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  test("maintains link functionality", () => {
    renderWithRouter(() => <Logo />);

    const logoLink = screen.getByRole("link", { name: "Go to the homepage" });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
