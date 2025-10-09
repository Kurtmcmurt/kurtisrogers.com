import { JSX } from "solid-js";
import Logo from "@/components/atoms/Logo";
import Socials from "@/components/molecules/Socials";
import "./style.css";

interface Props {
  children?: JSX.Element;
}

export default function Footer({ children }: Readonly<Props>) {
  return (
    <footer tabindex="-1">
      <div class="content">
        <div class="footer__socials">
          <Logo variant="secondary" />
          <Socials />
        </div>
        {/* some other stuff here? */}
        {children}
      </div>
    </footer>
  );
}
