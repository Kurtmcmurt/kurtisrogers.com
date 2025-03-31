import { render } from "@solidjs/testing-library";
import { A, Router, Route } from "@solidjs/router";

vi.mock(import("@solidjs/router"), async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    A: (props) => <a {...props} data-testid="mock-link">{props.children}</a>, // Mock implementation
    // your mocked methods
  }
})

describe("<LinkButton />", () => {
  it("renders correctly and links to the correct route", () => {
    const { getByText } = render(() => <A href="/about">Go to About</A>)

    const linkButton = getByText("Go to About");
    expect(linkButton).toBeInTheDocument();
    expect(linkButton).toHaveAttribute("href", "/about");
  });
});
