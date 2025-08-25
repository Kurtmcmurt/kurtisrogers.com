import type { sizes } from "@/types/grid";

export type LayoutSpacingDataType = {
  paddingTop: sizes;
  paddingBottom: sizes;
  marginTop: sizes;
  marginBottom: sizes;
};

export const layoutSpacingHandler = (LayoutSpacingDataType: LayoutSpacingDataType) => {
  if (!LayoutSpacingDataType) return;

  const { paddingTop, paddingBottom, marginBottom, marginTop } = LayoutSpacingDataType;

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

  return {
    paddingTop: sizeConverter(paddingTop),
    paddingBottom: sizeConverter(paddingBottom),
    marginTop: sizeConverter(marginTop),
    marginBottom: sizeConverter(marginBottom)
  };
};
