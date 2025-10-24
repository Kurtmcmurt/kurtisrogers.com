import { A } from "@solidjs/router";
import { Dynamic } from "solid-js/web";
import "./style.css";

interface Props {
  variant?: "primary" | "secondary";
  text?: string;
  isButton?: boolean;
}

export default function Logo({
  variant = "primary",
  text = "Kurtis Rogers",
  isButton = false
}: Props) {
  const variantStyle = variant === "primary" ? "bg-red text-white" : "bg-white text-black";

  return (
    <Dynamic
      component={isButton ? "button" : A}
      href="/"
      class={`logo ${variantStyle}`}
      aria-label="Go to the homepage"
    >
      <strong>{text}</strong>
    </Dynamic>
  );
}
