import { JSX } from "solid-js";
import Navigation from "@/components/molecules/Navigation";
import SkipLink from "@/components/atoms/Skiplink";
import Logo from "@/components/atoms/Logo";
import "./style.css";

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
      <header tabindex="-1">
        <SkipLink id="main" name="main content" isTag={true} visibleOnFocusOnly={true} />
        <div class="content">
          <Logo />
          <div>
            <Navigation classes={"site-navigation"} />
            {children}
          </div>
        </div>
      </header>
    </>
  );
}
