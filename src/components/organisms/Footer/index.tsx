import { JSX } from "solid-js";
import Logo from "@/components/atoms/Logo";
import Icon from "@/components/atoms/Icon";
import { linkedin } from "@/data/icons";
import "./style.css";

interface Props {
  children?: JSX.Element;
}

export default function Footer({ children }: Readonly<Props>) {
  return (
    <footer tabindex="-1">
      <div class="content">
        <div class="content__logo-wrapper">
          <Logo variant="secondary" />
          <div class="socials">
            <Icon width={80} height={80} viewbox="0 0 24 24" icondata={linkedin} />
          </div>
        </div>
        {children}
      </div>
    </footer>
  );
}
