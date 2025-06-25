import { A } from "@solidjs/router";
import { For } from "solid-js";
import "./style.css";

// faking a request for the navigation items which are already statically set

type NavElements = {
  link: string;
  text: string;
};

interface Props {
  label?: string;
  classes?: string;
  items?: NavElements[];
}

export default function Navigation({ label, classes, items }: Props) {
  return (
    <nav class={`navigation ${classes}`} aria-label={label ?? "Main"} role="navigation">
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
