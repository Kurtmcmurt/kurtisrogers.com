import { A } from "@solidjs/router";
import "./style.css";

interface Props {
  variant?: "primary" | "secondary";
  text?: string;
}

export default function Logo({ variant = "primary", text = "Kurtis Rogers" }: Props) {
  const variantStyle = variant === "primary" ? "bg-red text-white" : "bg-white text-black";

  return (
    <A href="/" class={`logo ${variantStyle}`} aria-label="Go to the homepage">
      <strong>{text}</strong>
    </A>
  );
}
