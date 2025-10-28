import { render } from "@solidjs/testing-library";
import Footer from ".";
import Socials from "../../molecules/Socials";
import Logo from "../../atoms/Logo";
import { describe, it, expect } from "vitest";

vi.mock(import("@solidjs/router"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    A: (props) => <a {...props} data-testid="mock-link">{props.children}</a>
  }
});

describe("<Footer />", () => {
  let getByText;
  let getByRole;

  beforeEach(() => {
    const renderResult = render(() => (
      <Footer>
        <Logo variant="secondary" />
        <Socials />
      </Footer>
    ));

    getByText = renderResult.getByText;
    getByRole = renderResult.getByRole;
  });

  it("shows a logo for the website", () => {
    const logo = getByText("Kurtis Rogers");

    expect(logo).toBeInTheDocument();
  });

  it("has a link to my linkedin profile", () => {
    const linkedinLink = getByText("A link to my LinkedIn profile (opens a new tab)");
    
    expect(linkedinLink).toMatchSnapshot();
    expect(linkedinLink).toBeInTheDocument();
  });

  it("has a link to the repo for the website", () => {
    const githubLink = getByText("A link to the repo for this website (opens a new tab)");
    
    expect(githubLink).toMatchSnapshot();
    expect(githubLink).toBeInTheDocument();
  });
});