import type { sizes, positions } from "@/types/grid";

export const handleLayout = (
  size: sizes,
  orientation: "top" | "bottom",
  spacingType: "padding" | "margin"
) => {
  if (!size) return;

  const handleCheck = (_size: sizes, position: positions) =>
    size === _size && orientation === position;

  const handleAlternativeClasses = (size: sizes) =>
    handleCheck(size, "bottom") ? `${spacingType}-${size}-bottom` : `${spacingType}-xs`;

  const sizes = {
    xs: handleCheck("xs", "top") ? `${spacingType}-xs-top` : handleAlternativeClasses("xs"),
    sm: handleCheck("sm", "top") ? `${spacingType}-sm-top` : handleAlternativeClasses("sm"),
    md: handleCheck("md", "top") ? `${spacingType}-md-top` : handleAlternativeClasses("md"),
    lg: handleCheck("lg", "top") ? `${spacingType}-lg-top` : handleAlternativeClasses("lg"),
    xl: handleCheck("xl", "top") ? `${spacingType}-xl-top` : handleAlternativeClasses("xl"),
    default: `${spacingType}-lg`
  };

  return sizes[size] || sizes["default"];
};
