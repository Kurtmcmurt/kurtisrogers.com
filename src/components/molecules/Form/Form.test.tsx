import { render, screen } from "@solidjs/testing-library";
import { describe, it, expect } from "vitest";
import Form, { FormInputLabelWrapper } from "."; // Adjust path as needed
import type { InputElements } from "@/types/forms";

describe("FormInputLabelWrapper", () => {
  it("should wrap input elements that need labels with a label tag", () => {
    const { container } = render(() => (
      <FormInputLabelWrapper element="input" name="test-input">
        <input name="test-input" />
      </FormInputLabelWrapper>
    ));

    const label = container.querySelector('label[for="test-input"]');
    expect(label).toBeTruthy();
    expect(label?.querySelector("input")).toBeTruthy();
  });

  it("should not wrap button elements with labels", () => {
    const { container } = render(() => (
      <FormInputLabelWrapper element="button" name="test-button">
        <button name="test-button">Click me</button>
      </FormInputLabelWrapper>
    ));

    const label = container.querySelector("label");
    expect(label).toBeFalsy();
    expect(container.querySelector("button")).toBeTruthy();
  });

  it("should not wrap submit elements with labels", () => {
    const { container } = render(() => (
      <FormInputLabelWrapper element="submit" name="test-submit">
        <input type="submit" name="test-submit" />
      </FormInputLabelWrapper>
    ));

    const label = container.querySelector("label");
    expect(label).toBeFalsy();
    expect(container.querySelector('input[type="submit"]')).toBeTruthy();
  });

  it("should not wrap reset elements with labels", () => {
    const { container } = render(() => (
      <FormInputLabelWrapper element="reset" name="test-reset">
        <input type="reset" name="test-reset" />
      </FormInputLabelWrapper>
    ));

    const label = container.querySelector("label");
    expect(label).toBeFalsy();
    expect(container.querySelector('input[type="reset"]')).toBeTruthy();
  });

  it("should not wrap hidden elements with labels", () => {
    const { container } = render(() => (
      <FormInputLabelWrapper element="hidden" name="test-hidden">
        <input type="hidden" name="test-hidden" />
      </FormInputLabelWrapper>
    ));

    const label = container.querySelector("label");
    expect(label).toBeFalsy();
    expect(container.querySelector('input[type="hidden"]')).toBeTruthy();
  });

  it("should wrap textarea elements with labels", () => {
    const { container } = render(() => (
      <FormInputLabelWrapper element="textarea" name="test-textarea">
        <textarea name="test-textarea" />
      </FormInputLabelWrapper>
    ));

    const label = container.querySelector('label[for="test-textarea"]');
    expect(label).toBeTruthy();
    expect(label?.querySelector("textarea")).toBeTruthy();
  });

  it("should wrap select elements with labels", () => {
    const { container } = render(() => (
      <FormInputLabelWrapper element="select" name="test-select">
        <select name="test-select" />
      </FormInputLabelWrapper>
    ));

    const label = container.querySelector('label[for="test-select"]');
    expect(label).toBeTruthy();
    expect(label?.querySelector("select")).toBeTruthy();
  });
});

describe("Form", () => {
  const mockFormConfig = {
    name: "test-form",
    method: "post" as const,
    action: "/submit"
  };

  it("should render form with title and byline", () => {
    const inputs = [{ name: "username", element: "input" as InputElements }];

    render(() => (
      <Form
        title={{ text: "Test Form", headingLevel: "1" }}
        byline={{ text: "Test byline", headingLevel: "2" }}
        formConfig={mockFormConfig}
        inputs={inputs}
      />
    ));

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Test Form");
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Test byline");
  });

  it("should apply form configuration attributes", () => {
    const formConfig = {
      name: "test-form",
      method: "post" as const,
      action: "/submit",
      autocomplete: "off" as const,
      enctype: "multipart/form-data" as const,
      novalidate: true,
      target: "_blank" as const
    };

    const inputs = [{ name: "username", element: "input" as InputElements }];

    const { container } = render(() => <Form formConfig={formConfig} inputs={inputs} />);

    const form = container.querySelector("form");
    expect(form).toBeTruthy();
    expect(form?.getAttribute("name")).toBe("test-form");
    expect(form?.getAttribute("method")).toBe("post");
    expect(form?.getAttribute("action")).toBe("/submit");
    expect(form?.getAttribute("autocomplete")).toBe("off");
    expect(form?.getAttribute("enctype")).toBe("multipart/form-data");
    expect(form?.hasAttribute("novalidate"));
    expect(form?.getAttribute("target")).toBe("_blank");
  });

  it("should render input elements with proper labels", () => {
    const inputs = [
      { name: "username", element: "input" as InputElements },
      { name: "email", element: "input" as InputElements }
    ];

    const { container } = render(() => <Form formConfig={mockFormConfig} inputs={inputs} />);

    const usernameLabel = container.querySelector('label[for="username"]');
    const emailLabel = container.querySelector('label[for="email"]');

    expect(usernameLabel).toBeTruthy();
    expect(emailLabel).toBeTruthy();
    expect(usernameLabel?.querySelector('input[name="username"]')).toBeTruthy();
    expect(emailLabel?.querySelector('input[name="email"]')).toBeTruthy();
  });

  it("should render button elements without labels", () => {
    const inputs = [
      { name: "submit-btn", element: "button" as InputElements },
      { name: "reset-btn", element: "reset" as InputElements }
    ];

    const { container } = render(() => <Form formConfig={mockFormConfig} inputs={inputs} />);

    const labels = container.querySelectorAll("label");
    expect(labels).toHaveLength(0);

    // The buttons should still be rendered
    expect(container.querySelector('[name="submit-btn"]')).toBeTruthy();
    expect(container.querySelector('[name="reset-btn"]')).toBeTruthy();
  });

  it("should render mixed input types correctly", () => {
    const inputs = [
      { name: "username", element: "input" as InputElements },
      { name: "description", element: "textarea" as InputElements },
      { name: "submit-btn", element: "button" as InputElements },
      { name: "hidden-field", element: "hidden" as InputElements }
    ];

    const { container } = render(() => <Form formConfig={mockFormConfig} inputs={inputs} />);

    // Should have labels for input and textarea
    expect(container.querySelector('label[for="username"]')).toBeTruthy();
    expect(container.querySelector('label[for="description"]')).toBeTruthy();

    // Should not have labels for button and hidden
    expect(container.querySelector('label[for="submit-btn"]')).toBeFalsy();
    expect(container.querySelector('label[for="hidden-field"]')).toBeFalsy();

    // All elements should be rendered
    expect(container.querySelector('[name="username"]')).toBeTruthy();
    expect(container.querySelector('[name="description"]')).toBeTruthy();
    expect(container.querySelector('[name="submit-btn"]')).toBeTruthy();
    expect(container.querySelector('[name="hidden-field"]')).toBeTruthy();
  });

  it("should handle form with minimal configuration", () => {
    const minimalConfig = {
      name: "minimal-form",
      method: "get" as const
    };

    const inputs = [{ name: "search", element: "input" as InputElements }];

    const { container } = render(() => <Form formConfig={minimalConfig} inputs={inputs} />);

    const form = container.querySelector("form");
    expect(form?.getAttribute("name")).toBe("minimal-form");
    expect(form?.getAttribute("method")).toBe("get");
    expect(form?.getAttribute("action")).toBeFalsy();
    expect(form?.getAttribute("autocomplete")).toBeFalsy();
  });
});
