import { JSX } from "solid-js";
import "./style.css";

interface Props {
  children?: JSX.Element;
}

export default function Footer({ children }: Readonly<Props>) {
  return (
    <footer tabindex="-1">
      <div class="content">
        {/* some other stuff here? */}
        {children}
      </div>
    </footer>
  );
}
