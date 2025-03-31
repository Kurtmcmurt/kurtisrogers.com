import { JSX } from "solid-js";
import "./style.css";

interface Props {
  children: JSX.Element;
  variant: "blur"; // add more variants as time goes on
}

export default function CSSFilterPanel({ children, variant }: Props) {
  return <div class={`filterPanel--${variant}`}>{children}</div>;
}
