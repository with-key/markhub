import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const switchRoot = style({
  position: "relative",
  width: "44px",
  height: "26px",
  borderRadius: vars.radius.pill,
  background: vars.color.surfaceHigh,
  transition: "background-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&[data-checked]": {
      background: vars.color.accent,
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
  top: "3px",
  left: "3px",
  width: "20px",
  height: "20px",
  borderRadius: vars.radius.pill,
  background: vars.color.surface,
  boxShadow: "0 2px 8px rgba(16, 32, 51, 0.18)",
  transition: "transform 160ms ease",
  selectors: {
    "[data-checked] &": {
      transform: "translateX(18px)",
    },
  },
});
