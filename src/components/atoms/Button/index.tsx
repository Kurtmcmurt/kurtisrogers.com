import { handleColourClasses } from "@/helpers/colours";
import "./style.css";
import { JSX, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";

type Href = {
  url: string;
  target?: "_blank" | "_self";
};

export interface Props {
  children?: JSX.Element | string;
  href?: Href;
  variant?: "primary" | "secondary";
  outline?: boolean;
  callback?: (event: MouseEvent) => void;
}

export default function Button({
  children,
  callback,
  variant = "primary",
  outline = false,
  href
}: Readonly<Props>) {
  const handleButtonStyle = createMemo(() =>
    variant === "primary"
      ? handleColourClasses("red", "background")
      : handleColourClasses("white", "background")
  );

  return (
    <Dynamic
      component={href?.url ? "a" : "button"}
      href={href?.url}
      target={href?.target ?? "_self"}
      class={`${handleButtonStyle()} ${outline ? "btn--outline" : "btn"} btn--${variant}`}
      onClick={callback}
    >
      {children}
    </Dynamic>
  );
}
