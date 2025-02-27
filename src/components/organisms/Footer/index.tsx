import { JSX } from "solid-js";
import "./style.css";

interface Props {
  children?: JSX.Element;
}

export default function Footer({ children }: Readonly<Props>) {
  return (
    <footer>
      <p>Hello I'm the footer</p>
      {children}
    </footer>
  );
}
