import { handleColourClasses } from "@/helpers/colours";
import type { Branding } from "@/types/branding";
import type { gridLayoutOptions } from "@/types/grid";
import { createMemo, For } from "solid-js";
import renderList from "@/helpers/renderList";
import "./style.css";

export interface Props {
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
      <For each={children}>
        {child => {
          const Content = renderList[child?.type as keyof typeof renderList];
          return <Content {...child} />;
        }}
      </For>
    </section>
  );
}
