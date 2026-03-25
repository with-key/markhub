import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const radio = style({
  width: "18px",
  height: "18px",
  marginTop: "2px",
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.pill,
  background: vars.color.surface,
  color: vars.color.foreground,
  display: "grid",
  placeItems: "center",
  transition: "border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&[data-checked]": {
      borderColor: vars.color.foreground,
      background: vars.color.surfaceRaised,
      boxShadow: `0 0 0 3px color-mix(in srgb, ${vars.color.accent} 12%, transparent)`,
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.foreground,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
    },
  },
});

export const indicator = style({
  width: "10px",
  height: "10px",
});
