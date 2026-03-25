import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const switchRoot = style({
  position: "relative",
  width: "44px",
  height: "24px",
  borderRadius: vars.radius.pill,
  background: vars.color.surfaceHigh,
  border: `1px solid ${vars.color.outlineVariant}`,
  transition: "background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&[data-checked]": {
      background: vars.color.foreground,
      borderColor: vars.color.foreground,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.accent} 12%, transparent)`,
    },
    "&:focus-visible": {
      outline: "none",
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
    },
    "&[data-disabled]": {
      opacity: 0.5,
    },
  },
});

export const switchThumb = style({
  position: "absolute",
  top: "2px",
  left: "2px",
  width: "18px",
  height: "18px",
  borderRadius: vars.radius.pill,
  background: vars.color.surface,
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.12)",
  transition: "transform 160ms ease",
  selectors: {
    "[data-checked] &": {
      transform: "translateX(20px)",
    },
  },
});
