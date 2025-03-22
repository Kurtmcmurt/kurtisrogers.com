import Navigation from "@/components/molecules/Navigation";
import SkipLink from "@/components/atoms/Skiplink";
import Logo from "@/components/atoms/Logo";
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

export default function Header({ children }: Readonly<Props>) {
  return (
    <>
      <SkipLink classes={["content-skipper"]} id="main" name="main content" isTag={true} />
      <header tabindex="-1">
        <div class="content">
          <Logo />
          <div>
            <Navigation />
            {children}
          </div>
        </div>
      </header>
    </>
  );
}
