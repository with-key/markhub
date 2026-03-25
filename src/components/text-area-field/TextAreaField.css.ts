import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const textArea = style({
  width: "100%",
  minHeight: "180px",
  padding: vars.space[4],
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
  color: vars.color.foreground,
  fontFamily: vars.font.body,
  fontSize: vars.text.size.md,
  lineHeight: vars.text.lineHeight.relaxed,
  resize: "vertical",
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
