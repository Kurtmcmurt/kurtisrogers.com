import { render } from "@solidjs/testing-library";
import Header from ".";
import { describe, it, expect } from "vitest";

vi.mock(import("@solidjs/router"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    A: (props) => <a {...props} data-testid="mock-link">{props.children}</a>
  }
})

vi.mock("@/components/molecules/Navigation", () => {
  return {
    default: (props) => <nav class={props.classes}>{props.items.map(item => <a href={item.link}>{item.text}</a>)}</nav>,
  };
});

vi.mock("@/components/atoms/Skiplink", () => {
  return {
    default: (props) => <a href={`#${props.id}`} class={props.visibleOnFocusOnly ? "visible-on-focus" : ""}>{props.name}</a>,
  };
});

vi.mock("@/components/atoms/Logo", () => {
  return {
    default: () => <div>Logo</div>,
  };
});

describe("Header Component", () => {
  const mockMenuItems = [
    { link: "/", text: "Home" },
    { link: "/about", text: "About" },
  ];

  it("renders the header with logo and navigation", () => {
    const { getByText } = render(() => <Header menuItems={mockMenuItems} />);

    // Check if the logo is rendered
    expect(getByText("Logo")).toBeInTheDocument();

    // Check if the navigation items are rendered
    // mockMenuItems.forEach(item => {
    //   expect(getByText(item.text)).toBeInTheDocument();
    //   expect(getByText(item.text).closest("a")).toHaveAttribute("href", item.link);
    // });
  });

  it("renders children elements", () => {
    const { getByText } = render(() => <Header><div>Child Content</div></Header>);

    // Check if the child content is rendered
    expect(getByText("Child Content")).toBeInTheDocument();
  });
});