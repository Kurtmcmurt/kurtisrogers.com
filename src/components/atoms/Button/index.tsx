import { handleColourClasses } from "@/helpers/colours";
import { JSX, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";

type Href = {
  url: string;
  target?: "_blank" | "_self";
};

type Attributes = {
  [key: string]: string | boolean;
};

export interface Props {
  children?: JSX.Element | string;
  href?: Href;
  variant?: "primary" | "secondary";
  outline?: boolean;
  callback?: (event: Event) => void;
  attributes?: Attributes;
}

export default function Button({
  children,
  callback,
  variant = "primary",
  outline = false,
  href,
  attributes
}: Readonly<Props>) {
  const handleButtonStyle = createMemo(() =>
    variant === "primary"
      ? handleColourClasses("red", "background")
      : handleColourClasses("white", "background")
  );

  const isLink = Boolean(href?.url);

  const buttonClasses = [
    handleButtonStyle(),
    !isLink && outline ? "btn--outline" : !isLink ? "btn" : "",
    !isLink ? `btn--${variant}` : ""
  ].join(" ");

  return (
    <Dynamic
      component={href?.url ? "a" : "button"}
      href={href?.url}
      target={href?.target ?? "_self"}
      class={buttonClasses}
      onClick={callback}
      {...attributes}
    >
      {children}
      {href?.target === "_blank" && <span class="sr-only"> (opens a new tab)</span>}
    </Dynamic>
  );
}
