import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const fieldRoot = style({
  display: "grid",
  gap: vars.space[2],
});

export const fieldLabel = style({
  margin: 0,
  fontSize: "0.9rem",
  fontWeight: 600,
  color: vars.color.foreground,
});

export const fieldDescription = style({
  margin: 0,
  fontSize: "0.92rem",
  lineHeight: 1.55,
  color: vars.color.muted,
});

export const fieldError = style({
  margin: 0,
  fontSize: "0.88rem",
  color: "#b42318",
});

export const choiceRoot = style({
  display: "grid",
  gap: "10px",
});

export const choiceLabel = style({
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr)",
  alignItems: "start",
  gap: "12px",
  cursor: "pointer",
});

export const choiceContent = style({
  display: "grid",
  gap: "4px",
  paddingTop: "1px",
});

export const choiceTitle = style({
  fontSize: "0.95rem",
  fontWeight: 600,
  color: vars.color.foreground,
});

export const choiceDescription = style({
  margin: 0,
  fontSize: "0.9rem",
  lineHeight: 1.55,
  color: vars.color.muted,
});

export const optionGroup = style({
  display: "grid",
  gap: "12px",
});

export const optionCard = style({
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr)",
  gap: "12px",
  padding: "14px 16px",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  background: "color-mix(in srgb, var(--surface) 92%, transparent)",
  transition: "border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:has([data-checked])": {
      borderColor: vars.color.accent,
      background: "color-mix(in srgb, var(--surfaceRaised) 84%, var(--accentSoft) 16%)",
      boxShadow: `0 0 0 1px ${vars.color.accentSoft}`,
    },
  },
});
