/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

// todo: implemenet correct types and remove any's

import Banner, { Props as BannerProps } from "@/components/organisms/Banner";
import Content, { Props as ContentProps } from "@/components/atoms/Content";
import Button, { Props as ButtonProps } from "@/components/atoms/Button";

import { Heading } from "@/types/branding";
import { Dynamic, For } from "solid-js/web";

export const renderList = {
  banner: (props: BannerProps) => <Banner {...props} />,
  content: (props: ContentProps) => <Content {...props} />,
  heading: ({ title, text, headingLevel, headingClass }: Heading) => (
    <Dynamic
      component={`h${typeof title === "string" ? "1" : headingLevel}`}
      class={typeof title === "string" ? "text-size-h1" : headingClass ? headingClass : ""}
    >
      {typeof title === "string" ? title : text}
    </Dynamic>
  ),
  paragraph: (props: any) => (
    <For each={props.children}>
      {item => {
        // https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML
        return <div innerHTML={item.text} />;
      }}
    </For>
  ),
  list: (props: any) => (
    <ul>
      <For each={props.children}>
        {item => {
          return <li>{item}</li>;
        }}
      </For>
    </ul>
  ),
  buttongroup: (props: any) => (
    <div class="buttongroup">
      <For each={props.children}>
        {item => {
          const { content, ...rest } = item;
          return <Button {...rest}>{content}</Button>;
        }}
      </For>
    </div>
  )
};

export default renderList;
