/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, waitFor } from "@solidjs/testing-library";
import Header from ".";
import { describe, it, expect } from "vitest";
import { JSX } from "solid-js";

vi.mock("@solidjs/router", async importOriginal => {
  const actual = (await importOriginal()) ?? {};
  return {
    ...actual,
    A: (props: any) => {
      const { children, ...rest } = props;
      return (
        <a {...rest} data-testid="mock-link">
          {children}
        </a>
      );
    }
  };
});

vi.mock("@/components/molecules/Navigation", () => {
  return {
    default: (props: { classes: string | undefined; items: any[] }) => (
      <nav class={props.classes}>
        {props.items.map(item => (
          <a href={item.link}>{item.text}</a>
        ))}
      </nav>
    )
  };
});

vi.mock("@/components/atoms/Skiplink", () => {
  return {
    default: (props: {
      id: any;
      visibleOnFocusOnly: any;
      name: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined;
    }) => (
      <a href={`#${props.id}`} class={props.visibleOnFocusOnly ? "visible-on-focus" : ""}>
        {props.name}
      </a>
    )
  };
});

vi.mock("@/components/atoms/Logo", () => {
  return {
    default: () => <div>Logo</div>
  };
});

describe("Header Component", () => {
  it("renders the header with logo and navigation", async () => {
    const { getByText, getByRole } = render(() => <Header />);
    const menuButton = getByRole("button", { name: /menu/i });
    const logo = getByText("Logo");

    expect(logo).toBeInTheDocument();
    expect(menuButton).toBeInTheDocument();

    await menuButton.click();

    const getNavLink = (route: string) => getByText(`${route}`);

    await waitFor(() => {
      expect(getNavLink("Home")).toBeInTheDocument();
      expect(getNavLink("Home").closest("a")).toHaveAttribute("href", "/");

      expect(getNavLink("About")).toBeInTheDocument();
      expect(getNavLink("About").closest("a")).toHaveAttribute("href", "/about");

      expect(getNavLink("Blog")).toBeInTheDocument();
      expect(getNavLink("Blog").closest("a")).toHaveAttribute("href", "/blog");

      expect(getNavLink("Contact")).toBeInTheDocument();
      expect(getNavLink("Contact").closest("a")).toHaveAttribute("href", "/contact");
    });
  });

  it("renders children elements", () => {
    const { getByText } = render(() => (
      <Header>
        <div>Child Content</div>
      </Header>
    ));

    expect(getByText("Child Content")).toBeInTheDocument();
  });
});
