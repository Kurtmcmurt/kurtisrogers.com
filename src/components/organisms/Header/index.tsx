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
  return (
    <header>
      <a href="#main" class="btn content-skipper">
        Skip to main content
      </a>
      <div class="content">
        <A href="/" class="logo text-white bg-red" aria-label="Go to the homepage">
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
