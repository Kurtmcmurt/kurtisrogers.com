import { JSX, Show } from "solid-js";
import type { ImageResponse } from "@/types/branding";
import "./style.css";

import type { gridLayoutOptions } from "@/types/grid";
import responsiveImages from "@/helpers/responsiveImages";
import CSSFilterPanel from "@/components/atoms/CSSFilterPanel";
import { Dynamic } from "solid-js/web";
import { LayoutSpacingDataType } from "@/helpers/layoutSpacingHandler";

type Title = {
  text: string;
  headingLevel: "1" | "2" | "3" | "4" | "5" | "6";
  headingClass:
    | "text-size-h1"
    | "text-size-h2"
    | "text-size-h3"
    | "text-size-h4"
    | "text-size-h5"
    | "text-size-h6";
};

interface Props {
  title?: Title | string;
  backgroundImage: {
    data: ImageResponse;
  };
  gridLayout?: gridLayoutOptions;
  children?: JSX.Element;
  firstChild: boolean;
  variant: "light" | "dark";
  spacing: LayoutSpacingDataType;
}

export default function Banner(props: Readonly<Props>) {
  const { title, backgroundImage, gridLayout, children, firstChild, variant = "dark" } = props;

  return (
    <section
      class={`banner content-grid ${gridLayout ?? ""} ${firstChild ? "first-element" : "page-sibling"} content-grid--${variant}`}
    >
      <div class={`banner${!!backgroundImage ? "--image" : ""}`}>
        <div class={`banner__content`}>
          <CSSFilterPanel variant="blur">
            <Show when={title}>
              <Dynamic
                component={`h${typeof title === "string" ? "1" : title?.headingLevel}`}
                class={typeof title === "string" ? "text-size-h1" : title?.headingClass}
              >
                {typeof title === "string" ? title : title?.text}
              </Dynamic>
            </Show>
            {children}
          </CSSFilterPanel>
        </div>
        {/* weird image/background colour section - not fully made my mind up */}
        <Show when={backgroundImage}>
          {/* create an image component - generate images here: https://isrcset.com/generate */}
          <div class="banner__image">
            {/* TODO: create a picture component which accepts an array of responsive images */}
            {responsiveImages(backgroundImage)}
          </div>
        </Show>
      </div>
    </section>
  );
}
