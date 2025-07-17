import { Dynamic, For } from "solid-js/web";
import { JSX } from "solid-js";
import type { InputElements } from "@/types/forms";
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
  title?: string;
  byline?: string;
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
      <h1>{title}</h1>
      <h2>{byline}</h2>
      <For each={inputs} fallback={<div>Loading...</div>}>
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
