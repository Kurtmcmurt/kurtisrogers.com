import { A } from "@solidjs/router";
import { For } from "solid-js";
import "./style.css";

type NavElements = {
  link: string;
  text: string;
};

type Attributes = {
  [key: string]: string | boolean;
};

interface Props {
  label?: string;
  classes?: string;
  items?: NavElements[];
  ref?: HTMLElement;
  attributes?: Attributes;
}

export default function Navigation({ label, classes, items, ref, attributes }: Props) {
  return (
    <nav
      class={`navigation ${classes}`}
      aria-label={label ?? "Main"}
      role="navigation"
      ref={ref}
      {...attributes}
    >
      <ul>
        <For each={items}>
          {item => {
            const { link, text } = item;

            return (
              <li>
                <A href={link} activeClass="current" end>
                  {text}
                </A>
              </li>
            );
          }}
        </For>
      </ul>
    </nav>
  );
}
