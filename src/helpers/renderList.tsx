/* eslint-disable @typescript-eslint/no-explicit-any */

import Banner, { Props as BannerProps } from "@/components/organisms/Banner";
import Content, { Props as ContentProps } from "@/components/atoms/Content";
import Button from "@/components/atoms/Button";

// TODO: implemenet correct types and remove all any

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
  // this may change in the future depending on 3rd party editor and the data recieved
  paragraph: (props: any) => (
    <For each={props.children}>
      {item => {
        // Security reference: https://developer.mozilla.org/en-US/docs/Web/API/TrustedHTML
        return <p innerHTML={item.text} />;
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
