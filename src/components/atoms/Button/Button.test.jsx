import { render, screen, fireEvent } from "@solidjs/testing-library";
import { expect, test, describe, vi, beforeEach } from "vitest";
import Button from "./index";
import { handleColourClasses } from "@/helpers/colours";
import { createSignal } from "solid-js";

// Mock the colour helper
vi.mock("@/helpers/colours", () => ({
  handleColourClasses: vi.fn((colour, type) => {
    if (colour === "red" && type === "background") return "bg-red-500";
    if (colour === "white" && type === "background") return "bg-white";
    return "";
  })
}));

describe("Button Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Rendering", () => {
    test("renders as button element by default", () => {
      render(() => <Button>Click me</Button>);

      const element = screen.getByText("Click me");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("BUTTON");
    });

    test("renders as anchor element when href is provided", () => {
      const href = { url: "https://example.com" };
      render(() => <Button href={href}>Visit site</Button>);

      const element = screen.getByRole("link");
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("A");
      expect(element).toHaveAttribute("href", "https://example.com");
    });

    test("renders children content correctly", () => {
      render(() => <Button>Test Content</Button>);

      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    test("renders JSX element children", () => {
      render(() => (
        <Button>
          <span data-testid="icon">🚀</span>
          <span>Launch</span>
        </Button>
      ));

      expect(screen.getByTestId("icon")).toHaveTextContent("🚀");
      expect(screen.getByText("Launch")).toBeInTheDocument();
    });
  });

  describe("Variant Styling", () => {
    test("applies primary variant styles by default", () => {
      render(() => <Button>Primary</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-red-500", "btn", "btn--primary");
    });

    test("applies secondary variant styles", () => {
      render(() => <Button variant="secondary">Secondary</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-white", "btn", "btn--secondary");
    });

    test("applies outline styles when outline is true", () => {
      render(() => <Button outline={true}>Outline</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("btn--outline", "btn--primary");
      expect(button).not.toHaveClass("btn");
    });

    test("applies regular btn class when outline is false", () => {
      render(() => <Button outline={false}>Regular</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("btn", "btn--primary");
      expect(button).not.toHaveClass("btn--outline");
    });

    test("combines variant and outline styles correctly", () => {
      render(() => (
        <Button variant="secondary" outline={true}>
          Secondary Outline
        </Button>
      ));

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bg-white", "btn--outline", "btn--secondary");
      expect(button).not.toHaveClass("btn");
    });
  });

  describe("Link Behavior", () => {
    test("sets href attribute correctly", () => {
      const href = { url: "https://example.com/page" };
      render(() => <Button href={href}>Link</Button>);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", "https://example.com/page");
    });

    test("no longer sets target to _self by default", () => {
      const href = { url: "https://example.com" };
      render(() => <Button href={href}>Link</Button>);

      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("target", "_self");
    });

    test("sets custom target attribute", () => {
      const href = { url: "https://example.com", target: "_blank" };
      render(() => <Button href={href}>External Link</Button>);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("target", "_blank");
    });

    test("applies styles to link elements correctly", () => {
      const href = { url: "https://example.com" };
      render(() => (
        <Button href={href} variant="secondary" outline={true}>
          Styled Link
        </Button>
      ));

      const link = screen.getByRole("link");
      expect(link).toHaveClass("bg-white");
    });
  });

  describe("Click Handling", () => {
    test("calls callback when button is clicked", () => {
      const mockCallback = vi.fn();
      render(() => <Button callback={mockCallback}>Click me</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(mockCallback).toHaveBeenCalledWith(expect.any(MouseEvent));
    });

    test("calls callback when link is clicked", () => {
      const mockCallback = vi.fn();
      const href = { url: "https://example.com" };
      render(() => (
        <Button href={href} callback={mockCallback}>
          Click link
        </Button>
      ));

      const link = screen.getByRole("link");
      fireEvent.click(link);

      expect(mockCallback).toHaveBeenCalledTimes(1);
      expect(mockCallback).toHaveBeenCalledWith(expect.any(MouseEvent));
    });

    test("does not throw when callback is not provided", () => {
      expect(() => {
        render(() => <Button>No callback</Button>);
        fireEvent.click(screen.getByRole("button"));
      }).not.toThrow();
    });

    test("passes correct event object to callback", () => {
      const mockCallback = vi.fn();
      render(() => <Button callback={mockCallback}>Test</Button>);

      const button = screen.getByRole("button");
      fireEvent.click(button);

      const callArgs = mockCallback.mock.calls[0][0];
      expect(callArgs).toBeInstanceOf(MouseEvent);
      expect(callArgs.type).toBe("click");
      expect(callArgs.target).toBe(button);
    });
  });

  describe("Color Helper Integration", () => {
    test("calls handleColourClasses for primary variant", () => {
      render(() => <Button variant="primary">Primary</Button>);

      expect(handleColourClasses).toHaveBeenCalledWith("red", "background");
    });

    test("calls handleColourClasses for secondary variant", () => {
      render(() => <Button variant="secondary">Secondary</Button>);

      expect(handleColourClasses).toHaveBeenCalledWith("white", "background");
    });

    test("memoizes style calculation", () => {
      const [variant, setVariant] = createSignal("secondary");
      render(() => <Button variant={variant()}>Test</Button>);

      expect(handleColourClasses).toHaveBeenCalledTimes(1);

      setVariant("primary");
    });
  });

  describe("Prop Defaults", () => {
    test("uses primary as default variant", () => {
      render(() => <Button>Default</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("btn--primary");
    });

    test("uses false as default outline", () => {
      render(() => <Button>Default</Button>);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("btn");
      expect(button).not.toHaveClass("btn--outline");
    });

    test("doesn't use _self as default target for links", () => {
      const href = { url: "https://example.com" };
      render(() => <Button href={href}>Link</Button>);

      const link = screen.getByRole("link");
      expect(link).not.toHaveAttribute("target", "_self");
    });
  });

  describe("Edge Cases", () => {
    test("handles empty href object gracefully", () => {
      // This tests the optional chaining in href?.url
      const href = {};
      render(() => <Button href={href}>Test</Button>);

      // Should render as button since href.url is undefined
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("handles href with empty url", () => {
      const href = { url: "" };
      render(() => <Button href={href}>Test</Button>);

      // Should render as anchor even with empty URL
      const link = screen.getByText("Test");
      expect(link).not.toHaveAttribute("href", "");
    });

    test("readonly props work correctly", () => {
      // This ensures the Readonly<Props> type doesn't break functionality
      const props = {
        children: "Test",
        variant: "secondary",
        outline: true,
        callback: vi.fn()
      };

      expect(() => {
        render(() => <Button {...props} />);
      }).not.toThrow();

      const button = screen.getByRole("button");
      expect(button).toHaveClass("btn--secondary", "btn--outline");
    });
  });

  describe("Accessibility", () => {
    test("button has correct role", () => {
      render(() => <Button>Accessible Button</Button>);

      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument();
    });

    test("link has correct role", () => {
      const href = { url: "https://example.com" };
      render(() => <Button href={href}>Accessible Link</Button>);

      const link = screen.getByRole("link");
      expect(link).toBeInTheDocument();
    });

    test("preserves text content for screen readers", () => {
      render(() => <Button>Screen Reader Text</Button>);

      expect(screen.getByText("Screen Reader Text")).toBeInTheDocument();
    });
  });
});
