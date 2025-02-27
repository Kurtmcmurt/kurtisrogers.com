import { handleColourClasses } from "@/helpers/colours";
import type { Branding } from "@/types/branding";
import type { gridLayoutOptions } from "@/types/grid";
import { JSX } from "solid-js";
import "./style.css";

interface Props {
  children: JSX.Element;
  gridLayout?: gridLayoutOptions;
  backgroundColor?: Branding["colors"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function Content(props: Readonly<Props>) {
  const { children, gridLayout, backgroundColor } = props;

  const colourClasses = handleColourClasses(backgroundColor, "background");

  return <section class={`${gridLayout ?? ""} content-grid ${colourClasses}`}>{children}</section>;
}
