import { handleColourClasses } from "@/helpers/colours";
import "./style.css";
import type { Icon } from "@/components/atoms/Icon";

export interface Props {
  text: string;
  secondary?: boolean;
  outline?: boolean;
  icon?: Icon;
  callback: (event: MouseEvent) => void;
}

export default function Button({ text, callback, secondary, outline }: Readonly<Props>) {
  const handleButtonStyle = secondary
    ? handleColourClasses("grey", "background")
    : handleColourClasses("white", "background");

  return (
    <button
      class={outline ? `${handleButtonStyle}--outline` : handleButtonStyle}
      onClick={callback}
    >
      {text}
    </button>
  );
}
