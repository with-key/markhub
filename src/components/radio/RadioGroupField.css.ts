import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const radio = style({
  width: "20px",
  height: "20px",
  marginTop: "2px",
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.pill,
  background: vars.color.surface,
  color: vars.color.accent,
  display: "grid",
  placeItems: "center",
  transition: "border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&[data-checked]": {
      borderColor: vars.color.accent,
      background: "color-mix(in srgb, var(--surfaceRaised) 78%, var(--accentSoft) 22%)",
      boxShadow: `0 0 0 3px color-mix(in srgb, ${vars.color.accent} 12%, transparent)`,
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.surfaceTint,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
    },
  },
});

export const indicator = style({
  width: "10px",
  height: "10px",
});
