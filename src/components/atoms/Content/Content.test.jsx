// src/components/Content.test.jsx
import { render } from "@solidjs/testing-library";
import Content from ".";
import { describe, it, expect } from "vitest";

// Mock the handleColourClasses function
vi.mock("@/helpers/colours", () => ({
  handleColourClasses: vi.fn((variant) => `bg-${variant}`)
}));

describe("Content Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(() => <Content firstChild={true}>Hello World</Content>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("applies the correct classes based on props", () => {
    const { container } = render(() => (
      <Content firstChild={true} gridLayout="wide" variant="red">
        Test Content
      </Content>
    ));

    expect(container.firstChild).toHaveClass("wide content-grid bg-red first-element");
  });

  it("applies 'page-sibling' class when firstChild is false", () => {
    const { container } = render(() => (
      <Content firstChild={false} variant="black">
        Another Content
      </Content>
    ));

    expect(container.firstChild).toHaveClass("page-sibling");
  });

  it("uses default variant if none is provided", () => {
    const { container } = render(() => (
      <Content firstChild={true}>Default Variant Content</Content>
    ));

    expect(container.firstChild).toHaveClass("bg-black");
  });
});
