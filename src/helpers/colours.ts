import type { Branding } from "@/types/branding";

export const handleColourClasses = (colour: Branding["colors"], type: "background" | "text") => {
  if (!colour || !type) return;

  const classes = {
    red: type === "background" ? "bg-red text-white" : "text-red",
    white: type === "background" ? "bg-white text-black" : "text-white",
    yellow: type === "background" ? "bg-yellow text-black" : "text-yellow",
    grey: type === "background" ? "bg-grey text-white" : "text-grey",
    black: type === "background" ? "bg-black text-white" : "text-black",
    default: "bg-yellow text-black"
  };

  return (classes[colour] || classes["default"]) as string;
};
