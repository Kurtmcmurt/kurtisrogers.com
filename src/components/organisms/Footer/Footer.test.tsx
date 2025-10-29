import { render } from "@solidjs/testing-library";
import Footer from ".";
import Socials from "../../molecules/Socials";
import Logo from "../../atoms/Logo";
import { describe, it, expect } from "vitest";

vi.mock("@solidjs/router", async importOriginal => {
  const actual = (await importOriginal()) ?? {};
  return {
    ...actual,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

describe("<Footer />", () => {
  const renderFooter = () =>
    render(() => (
      <Footer>
        <Logo variant="secondary" />
        <Socials />
      </Footer>
    ));

  it("shows a logo for the website", () => {
    const { getByText } = renderFooter();
    const logo = getByText(/Kurtis Rogers/);

    expect(logo).toBeInTheDocument();
  });

  it("has a link to my linkedin profile", () => {
    const { getByText } = renderFooter();
    const linkedinLink = getByText("A link to my LinkedIn profile (opens a new tab)");

    expect(linkedinLink).toMatchSnapshot();
    expect(linkedinLink).toBeInTheDocument();
  });

  it("has a link to the repo for the website", () => {
    const { getByText } = renderFooter();
    const githubLink = getByText("A link to the repo for this website (opens a new tab)");

    expect(githubLink).toMatchSnapshot();
    expect(githubLink).toBeInTheDocument();
  });
});
