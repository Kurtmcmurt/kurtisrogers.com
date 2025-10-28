import { handleColourClasses } from "@/helpers/colours";
import { JSX, createMemo } from "solid-js";
import { Dynamic } from "solid-js/web";

export type Href = {
  url: string;
  target?: "_blank" | "_self";
};

type Attributes = {
  [key: string]: string | boolean;
};

export type Variants = "primary" | "secondary";

export interface Props {
  children?: JSX.Element | string;
  href?: Href;
  variant?: Variants;
  outline?: boolean;
  callback?: (event: Event) => void;
  attributes?: Attributes;
  icon?: boolean;
}

export default function Button({
  children,
  callback,
  variant = "primary",
  outline = false,
  href,
  icon,
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
    !isLink ? `btn--${variant}` : "",
    icon && "icon-only"
  ].join(" ");

  const sortedAttributes = {
    ...(isLink ? { component: "a" } : { component: "button" }),
    ...(isLink && { href: href?.url }),
    ...(href?.target && { target: href?.target }),
    ...(buttonClasses && { class: buttonClasses }),
    ...(callback && { onClick: callback })
  };

  return (
    <Dynamic {...sortedAttributes} {...attributes}>
      {children}
      {href?.target === "_blank" && <span class="sr-only"> (opens a new tab)</span>}
    </Dynamic>
  );
}
