import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const fieldInput = style({
  minHeight: "44px",
  width: "100%",
  padding: `0 ${vars.space[4]}`,
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.md,
  background: vars.color.surface,
  color: vars.color.foreground,
  fontFamily: vars.font.body,
  fontSize: vars.text.size.md,
  lineHeight: vars.text.lineHeight.body,
  transition: "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
  selectors: {
    "&::placeholder": {
      color: vars.color.muted,
    },
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.foreground,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 16%, transparent)`,
    },
  },
});
