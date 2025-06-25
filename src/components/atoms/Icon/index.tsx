import { JSX, createMemo } from "solid-js";
import { handleSVGString } from "@/helpers/parsers";
import "./style.css";

export type IconType = {
  width?: number;
  height?: number;
  viewbox?: string;
  fill?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icondata?: any;
  children?: JSX.Element;
};

export default function Icon({
  width = 24,
  height = 24,
  viewbox,
  fill = "currentColor",
  icondata,
  children
}: Readonly<IconType>) {
  const parsedSVG = createMemo(() => handleSVGString(icondata));

  return (
    <svg
      class="icon"
      width={`${width}px`}
      height={`${height}px`}
      fill={fill}
      viewBox={viewbox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g innerHTML={parsedSVG()} />
      {children}
    </svg>
  );
}
