import { render } from "@solidjs/testing-library";
import Socials from "./index";
import { describe, it, expect } from "vitest";

describe("<Socials />", () => {
  const renderResult = render(() => <Socials />);

  const getByText = renderResult.getByText;

  it("renders correctly", () => {
    const linkedin = getByText("A link to my LinkedIn profile (opens a new tab)");

    expect(linkedin).toBeInTheDocument();
  });
});
