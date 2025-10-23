import { render } from "@solidjs/testing-library";
import Footer from ".";
import Socials from "../../molecules/Socials";
import { describe, it, expect } from "vitest";

vi.mock(import("@solidjs/router"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    A: (props) => <a {...props} data-testid="mock-link">{props.children}</a>
  }
})

describe("<Footer />", () => {
  it("renders correctly and has a link to my linkedin profile", () => {
    const { getByText } = render(() => (
      <Footer>
        <Socials />
      </Footer>
    ));
    const linkButton = getByText("A link to my LinkedIn profile (opens a new tab)");

    expect(linkButton).toMatchSnapshot();
    expect(linkButton).toBeInTheDocument();
  });
});
