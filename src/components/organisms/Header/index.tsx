import { A } from "@solidjs/router";
import Navigation from "@/components/molecules/Navigation";
import "./style.css";
import { JSX } from "solid-js";

type Item = {
  link: string;
  text: string;
};

type Props = {
  menuItems?: Item[];
  children?: JSX.Element[];
};

export default function Header(props: Readonly<Props>) {
  // const [isScrolling, setIsScrolling] = createSignal(false);

  function handleScroll() {
    console.log("something");
  }

  /**
   * TODO: implement mobile changes
   */

  return (
    <header on:scroll={handleScroll}>
      {/* TODO: implement scroll action for the header */}
      <A href="#main-content" class="button content-skipper">
        Skip to main content
      </A>
      <div class="content">
        <A href="/" class="logo text-white">
          <strong>Kurtis Rogers</strong>
        </A>
        <div>
          <Navigation />
          {props.children}
        </div>
      </div>
    </header>
  );
}
