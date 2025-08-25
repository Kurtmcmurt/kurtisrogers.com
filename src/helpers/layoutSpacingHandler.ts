import type { sizes, positions } from "@/types/grid";

export const layoutSpacingHandler = (
  size: sizes,
  orientation: "top" | "bottom",
  spacingType: "padding" | "margin"
) => {
  if (!size) return;

  // xs 1rem default
  // sm 1.5rem
  // md 2rem
  // lg 3rem
  // xl 4.5rem

  const handleCheck = (_size: sizes, position: positions) =>
    size === _size && orientation === position;

  const sizeConverter = (size: sizes) => {
    const sizes = {
      xs: "1rem",
      sm: "1.5rem",
      md: "2rem",
      lg: "3rem",
      xl: "4.5rem",
      default: "1rem"
    };

    return sizes[size] || sizes["default"];
  };

  const handleAlternativeClasses = (size: sizes) => {
    return handleCheck(size, "bottom")
      ? `${spacingType}-bottom: ${sizeConverter(size)};`
      : `${spacingType}: ${sizeConverter("default")}; ${spacingType}-left: 0px; ${spacingType}-right: 0px;`;
  };

  const sizes = {
    xs: handleCheck("xs", "top")
      ? `${spacingType}-top: ${sizeConverter("xs")};`
      : handleAlternativeClasses("xs"),
    sm: handleCheck("sm", "top")
      ? `${spacingType}-top: ${sizeConverter("sm")};`
      : handleAlternativeClasses("sm"),
    md: handleCheck("md", "top")
      ? `${spacingType}-top: ${sizeConverter("md")};`
      : handleAlternativeClasses("md"),
    lg: handleCheck("lg", "top")
      ? `${spacingType}-top: ${sizeConverter("lg")};`
      : handleAlternativeClasses("lg"),
    xl: handleCheck("xl", "top")
      ? `${spacingType}-top: ${sizeConverter("xl")};`
      : handleAlternativeClasses("xl"),
    default: `${spacingType}-lg`
  };

  return sizes[size] || sizes["default"];
};
