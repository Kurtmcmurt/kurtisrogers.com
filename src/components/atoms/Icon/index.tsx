import { JSX } from "solid-js";

export type Icon = {
  width?: number;
  height?: number;
  fill?: string;
  children?: JSX.Element;
};

export default function Icon({
  width = 24,
  height = 24,
  fill = "currentColor",
  children
}: Readonly<Icon>) {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}
