import { A } from "@solidjs/router";
import { For, createResource } from "solid-js";
import { GET } from "@/helpers/requests";
import "./style.css";

// faking a request for the navigation items which are already statically set

interface Props {
  label?: string;
  classes?: string;
}

export default function Navigation({ label, classes }: Props) {
  const [items] = createResource(() => GET("https://api.chucknorris.io/jokes/random"), {
    initialValue: [{ text: "loading", link: "/" }]
  });

  return (
    <nav class={`navigation ${classes}`} aria-label={label ?? "Main menu"}>
      <ul>
        <For each={items()}>
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
