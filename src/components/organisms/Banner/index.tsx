import { Show, For } from "solid-js";
import type { ImageResponse } from "@/types/branding";
import "./style.css";

import responsiveImages from "@/helpers/responsiveImages";
import { Dynamic } from "solid-js/web";
import { LayoutSpacingDataType } from "@/helpers/layoutSpacingHandler";
import type { Heading } from "@/types/branding";
import renderList from "@/helpers/renderList";
import Button from "@/components/atoms/Button";

export interface Props {
  title?: Heading | string;
  image: {
    data: ImageResponse;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any[];
  firstChild?: boolean;
  spacing?: LayoutSpacingDataType;
}

export default function Banner(props: Readonly<Props>) {
  const { title, image, children, firstChild = "dark" } = props;
  const { data: { attributes: { alternativeText = "", credit } = {} } = {} } = image ?? {};

  return (
    <section class={`banner ${firstChild ? "parent-section" : "child-section"}`}>
      <div class={`banner__content`}>
        <hgroup class={`banner__content--copy fade--in_up`}>
          <Show when={title}>
            <Dynamic
              component={`h${typeof title === "string" ? "1" : title?.headingLevel}`}
              class={typeof title === "string" ? "text-size-h1" : title?.headingClass}
            >
              {typeof title === "string" ? title : title?.text}
            </Dynamic>
          </Show>
          <For each={children}>
            {child => {
              const Content = renderList[child?.type as keyof typeof renderList];
              return <Content {...child} />;
            }}
          </For>
        </hgroup>
        {/* TODO: weird image/background colour section - not fully made my mind up about this */}
        {/* TODO: create an image component - generate images here: https://isrcset.com/generate */}
        <div class="banner__content--image fade--in">
          <Show when={image}>
            {responsiveImages(image)}
            <Show when={alternativeText}>
              <div class="credit">
                {/* TODO: will require work on the backend extending the existing image controller */}
                <Show when={credit}>
                  <Button href={credit?.link}>
                    <span class="sr-only">Photo by </span>
                    {credit?.author}
                  </Button>
                </Show>
                <span>{alternativeText}</span>
              </div>
            </Show>
          </Show>
        </div>
      </div>
    </section>
  );
}
