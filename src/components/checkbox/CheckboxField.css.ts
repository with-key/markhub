import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const checkbox = style({
  width: "20px",
  height: "20px",
  marginTop: "2px",
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: "6px",
  background: vars.color.surface,
  color: vars.color.background,
  display: "grid",
  placeItems: "center",
  transition: "border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&[data-checked], &[data-indeterminate]": {
      borderColor: vars.color.accent,
      background: vars.color.accent,
      boxShadow: `0 0 0 3px color-mix(in srgb, ${vars.color.accent} 14%, transparent)`,
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.surfaceTint,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
    },
    "&[data-disabled]": {
      opacity: 0.5,
    },
  },
});

export const indicator = style({
  width: "14px",
  height: "14px",
});
