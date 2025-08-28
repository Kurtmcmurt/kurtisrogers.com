import { handleColourClasses } from "@/helpers/colours";
import type { Branding } from "@/types/branding";
import type { gridLayoutOptions } from "@/types/grid";
import { JSX, createMemo } from "solid-js";
import "./style.css";

export interface Props {
  children: JSX.Element;
  gridLayout?: gridLayoutOptions;
  variant?: Branding["colors"];
  firstChild: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
  sectionLink?: string;
  style?: string;
}

export default function Content(props: Readonly<Props>) {
  const { children, gridLayout, variant = "black", sectionLink, style, firstChild } = props;

  const colourClasses = createMemo(() => handleColourClasses(variant, "background"));

  const attributes = {
    id: sectionLink ?? ""
  };

  const classes = `${gridLayout ?? ""} content-grid ${colourClasses()} ${firstChild ? "first-element" : "page-sibling"}`;

  return (
    <section style={style ?? ""} class={classes} {...attributes}>
      {children}
    </section>
  );
}
