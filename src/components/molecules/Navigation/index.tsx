import { A } from "@solidjs/router";
import { For, createResource } from "solid-js";
import { GET } from "@/helpers/requests";
import "./style.css";

// faking a request for the navigation items which are already statically set

export default function Navigation() {
  const [items] = createResource(() => GET("https://api.chucknorris.io/jokes/random"), {
    initialValue: [{ text: "loading", link: "/" }]
  });

  return (
    <nav class="site-navigation">
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
