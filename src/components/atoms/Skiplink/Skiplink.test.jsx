import { render, screen, fireEvent } from "@solidjs/testing-library";
import { vi, describe, test, expect, beforeEach, afterEach } from "vitest";
import SkipLink from ".";

describe("SkipLink Component", () => {
  // Mock DOM methods
  const mockFocus = vi.fn();
  const mockGetElementById = vi.fn();
  const mockQuerySelector = vi.fn();

  beforeEach(() => {
    // Reset mocks
    vi.clearAllMocks();
    
    // Mock document methods
    global.document.getElementById = mockGetElementById;
    global.document.querySelector = mockQuerySelector;
    
    // Create mock elements with focus method
    const createMockElement = () => ({ focus: mockFocus });
    mockGetElementById.mockReturnValue(createMockElement());
    mockQuerySelector.mockReturnValue(createMockElement());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders with required props", () => {
    render(() => <SkipLink id="main" name="main content" />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Skip to main content");
  });

  test("applies default classes", () => {
    const { container } = render(() => <SkipLink id="main" name="main content" />);

    const button = container.querySelector("button");
    expect(button).toHaveClass("skiplink");
    expect(button).toHaveClass("skiplink--visible");
    expect(button).toHaveClass("btn");
    expect(button).toHaveClass("btn--primary");
  });

  test("applies primary variant by default", () => {
    const { container } = render(() => <SkipLink id="main" name="main content" />);

    const button = container.querySelector("button");
    expect(button).toHaveClass("btn--primary");
  });

  test("applies secondary variant when specified", () => {
    const { container } = render(() => <SkipLink id="main" name="main content" variant="secondary" />);

    const button = container.querySelector("button");
    expect(button).toHaveClass("btn--secondary");
    expect(button).not.toHaveClass("btn--primary");
  });

  test("applies visible-on-focus class when visibleOnFocusOnly is true", () => {
    const { container } = render(() => (
      <SkipLink id="main" name="main content" visibleOnFocusOnly={true} />
    ));

    const button = container.querySelector("button");
    expect(button).toHaveClass("skiplink--visible-on-focus");
    expect(button).not.toHaveClass("skiplink--visible");
  });

  test("applies visible class when visibleOnFocusOnly is false", () => {
    const { container } = render(() => (
      <SkipLink id="main" name="main content" visibleOnFocusOnly={false} />
    ));

    const button = container.querySelector("button");
    expect(button).toHaveClass("skiplink--visible");
    expect(button).not.toHaveClass("skiplink--visible-on-focus");
  });

  test("uses getElementById when isTag is false", () => {
    render(() => <SkipLink id="content" name="main content" isTag={false} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockGetElementById).toHaveBeenCalledWith("content");
    expect(mockQuerySelector).not.toHaveBeenCalled();
    expect(mockFocus).toHaveBeenCalled();
  });

  test("uses querySelector when isTag is true", () => {
    render(() => <SkipLink id="#content" name="main content" isTag={true} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockQuerySelector).toHaveBeenCalledWith("#content");
    expect(mockGetElementById).not.toHaveBeenCalled();
    expect(mockFocus).toHaveBeenCalled();
  });

  test("handles click with custom id", () => {
    render(() => <SkipLink id="custom-section" name="custom section" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockGetElementById).toHaveBeenCalledWith("custom-section");
    expect(mockFocus).toHaveBeenCalled();
  });

  test("falls back to main when id is empty", () => {
    render(() => <SkipLink id="" name="main content" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockGetElementById).toHaveBeenCalledWith("main");
  });

  test("handles null/undefined id gracefully", () => {
    render(() => <SkipLink id={null} name="main content" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockGetElementById).toHaveBeenCalledWith("main");
  });

  test("renders custom name text", () => {
    render(() => <SkipLink id="navigation" name="navigation menu" />);

    expect(screen.getByText("Skip to navigation menu")).toBeInTheDocument();
  });

  test("falls back to main content when name is empty", () => {
    render(() => <SkipLink id="main" />);

    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });

  test("falls back to main content when name is null/undefined", () => {
    render(() => <SkipLink id="main" name={null} />);

    expect(screen.getByText("Skip to main content")).toBeInTheDocument();
  });

  test("does not call focus when element is not found", () => {
    mockGetElementById.mockReturnValue(null);

    render(() => <SkipLink id="nonexistent" name="content" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockGetElementById).toHaveBeenCalledWith("nonexistent");
    expect(mockFocus).not.toHaveBeenCalled();
  });

  test("handles querySelector returning null", () => {
    mockQuerySelector.mockReturnValue(null);

    render(() => <SkipLink id="#nonexistent" name="content" isTag={true} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockQuerySelector).toHaveBeenCalledWith("#nonexistent");
    expect(mockFocus).not.toHaveBeenCalled();
  });

  test("applies all props together correctly", () => {
    const { container } = render(() => (
      <SkipLink
        id="sidebar"
        name="sidebar content"
        variant="secondary"
        visibleOnFocusOnly={true}
        isTag={true}
      />
    ));

    const button = container.querySelector("button");
    
    // Check classes
    expect(button).toHaveClass("skiplink");
    expect(button).toHaveClass("skiplink--visible-on-focus");
    expect(button).toHaveClass("btn--secondary");
    
    // Check text content
    expect(button).toHaveTextContent("Skip to sidebar content");
    
    // Test click behavior
    fireEvent.click(button);
    expect(mockQuerySelector).toHaveBeenCalledWith("sidebar");
    expect(mockFocus).toHaveBeenCalled();
  });

  test("button has correct type", () => {
    const { container } = render(() => <SkipLink id="main" name="content" />);

    const button = container.querySelector("button");
    expect(button.tagName).toBe("BUTTON");
  });

  test("handles focus function with empty id parameter", () => {
    render(() => <SkipLink id="" name="content" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Should still call with fallback "main"
    expect(mockGetElementById).toHaveBeenCalledWith("main");
  });

  test("class combination is correct for all variants", () => {
    const { container: container1 } = render(() => (
      <SkipLink id="test" name="test" variant="primary" visibleOnFocusOnly={false} />
    ));
    
    const button1 = container1.querySelector("button");
    expect(button1.className).toBe("skiplink skiplink--visible btn btn--primary");

    const { container: container2 } = render(() => (
      <SkipLink id="test" name="test" variant="secondary" visibleOnFocusOnly={true} />
    ));
    
    const button2 = container2.querySelector("button");
    expect(button2.className).toBe("skiplink skiplink--visible-on-focus btn btn--secondary");
  });
});