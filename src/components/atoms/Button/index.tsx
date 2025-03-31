import { handleColourClasses } from "@/helpers/colours";
import "./style.css";
import type { Icon } from "@/components/atoms/Icon";
import { JSX } from "solid-js";

type Href = {
  url: string;
  target?: "_blank" | "_self";
};

export interface Props {
  children: JSX.Element;
  href?: Href;
  variant?: "primary" | "secondary";
  outline?: boolean;
  icon?: Icon;
  callback?: (event: MouseEvent) => void;
}

export default function Button({
  children,
  callback,
  variant = "primary",
  outline,
  href
}: Readonly<Props>) {
  const handleButtonStyle =
    variant === "primary"
      ? handleColourClasses("red", "background")
      : handleColourClasses("white", "background");

  return href?.url ? (
    <a
      href={href.url}
      target={href.target ?? "_self"}
      class={`${handleButtonStyle} ${outline ? "btn--outline" : "btn"} btn--${variant}`}
    >
      {children}
    </a>
  ) : (
    <button
      class={`${handleButtonStyle} ${outline ? "btn--outline" : "btn"} btn--${variant}`}
      onClick={callback}
    >
      {children}
    </button>
  );
}
