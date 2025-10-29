import { Dynamic, For, Show } from "solid-js/web";
import { JSX } from "solid-js";
import type { InputElements } from "@/types/forms";
import type { Heading } from "@/types/branding";
import "./style.css";

type Inputs = {
  name: string;
  element: InputElements;
};

type FormConfig = {
  name: string;
  autocomplete?: "on" | "off";
  action?: string;
  enctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
  method: "post" | "get" | "dialog";
  novalidate?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop";
};

interface Props {
  title?: Heading;
  byline?: Heading;
  formConfig: FormConfig;
  inputs: Inputs[];
}

interface FormInputLabelWrapperProps {
  children: JSX.Element;
  element: string;
  name: string;
}

const elementLabelExclusionList = ["button", "reset", "hidden", "submit"];

export const FormInputLabelWrapper = ({ children, element, name }: FormInputLabelWrapperProps) => {
  if (elementLabelExclusionList.includes(element)) {
    return children;
  } else {
    return <label for={name}>{children}</label>;
  }
};

export default function Form({ title, byline, inputs, formConfig }: Props) {
  return (
    <form {...formConfig}>
      <Show when={title}>
        <Dynamic
          component={`h${typeof title === "string" ? "1" : title?.headingLevel}`}
          class={typeof title === "string" ? "text-size-h1" : title?.headingClass}
        >
          {typeof title === "string" ? title : title?.text}
        </Dynamic>
      </Show>
      <Show when={byline}>
        <Dynamic
          component={`h${typeof byline === "string" ? "1" : byline?.headingLevel}`}
          class={typeof byline === "string" ? "text-size-h1" : byline?.headingClass}
        >
          {typeof byline === "string" ? byline : byline?.text}
        </Dynamic>
      </Show>
      <For each={inputs}>
        {item => {
          return (
            <FormInputLabelWrapper element={item.element} name={item.name}>
              <Dynamic component={item.element} name={item.name} />
            </FormInputLabelWrapper>
          );
        }}
      </For>
    </form>
  );
}
