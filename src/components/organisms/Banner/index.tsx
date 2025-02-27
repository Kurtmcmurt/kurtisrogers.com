import { JSX, Show } from "solid-js";
import type { ImageResponse } from "@/types/branding";
import "./style.css";

import type { gridLayoutOptions } from "@/types/grid";
import responsiveImages from "@/helpers/responsiveImages";

interface Props {
  title?: string;
  backgroundImage: {
    data: ImageResponse;
  };
  gridLayout?: gridLayoutOptions;
  children?: JSX.Element;
}

export default function Banner(props: Readonly<Props>) {
  const { title, backgroundImage, gridLayout, children } = props;

  if (!title) return;

  return (
    <div class={`content-grid ${gridLayout ?? ""}`}>
      <div class={`banner`}>
        <div class="banner__content">
          <h1>{title}</h1>
          {children}
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
    </div>
  );
}
