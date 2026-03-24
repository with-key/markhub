import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const trigger = style({
  width: "100%",
  minHeight: "48px",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "center",
  gap: vars.space[3],
  padding: `0 ${vars.space[4]}`,
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.lg,
  background: "color-mix(in srgb, var(--surface) 96%, transparent)",
  color: vars.color.foreground,
  font: "inherit",
  textAlign: "left",
  transition: "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
  selectors: {
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.surfaceTint,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
    },
    "&[data-open]": {
      borderColor: vars.color.surfaceTint,
      background: "color-mix(in srgb, var(--surfaceRaised) 94%, transparent)",
    },
    "&[data-disabled]": {
      opacity: 0.55,
      cursor: "not-allowed",
    },
  },
});

export const inputGroup = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "stretch",
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.lg,
  background: "color-mix(in srgb, var(--surface) 96%, transparent)",
  transition: "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
  selectors: {
    "&:focus-within": {
      borderColor: vars.color.surfaceTint,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
      background: "color-mix(in srgb, var(--surfaceRaised) 96%, transparent)",
    },
  },
});

export const input = style({
  width: "100%",
  minHeight: "48px",
  padding: `0 ${vars.space[4]}`,
  border: 0,
  background: "transparent",
  color: vars.color.foreground,
  fontFamily: vars.font.body,
  fontSize: "1rem",
  selectors: {
    "&::placeholder": {
      color: vars.color.muted,
    },
    "&:focus": {
      outline: "none",
    },
  },
});

export const iconButton = style({
  width: "44px",
  border: 0,
  borderLeft: `1px solid ${vars.color.border}`,
  background: "transparent",
  color: vars.color.muted,
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
});

export const value = style({
  minWidth: 0,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const placeholder = style({
  color: vars.color.muted,
});

export const icon = style({
  width: "16px",
  height: "16px",
  color: vars.color.muted,
  transition: "transform 160ms ease, color 160ms ease",
  selectors: {
    "[data-open] &": {
      transform: "rotate(180deg)",
      color: vars.color.foreground,
    },
  },
});

export const positioner = style({
  zIndex: 30,
});

export const popup = style({
  minWidth: "min(var(--available-width, 320px), 360px)",
  maxHeight: "min(var(--available-height, 360px), 360px)",
  overflow: "auto",
  padding: "8px",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.xl,
  background: "color-mix(in srgb, var(--surface) 98%, transparent)",
  boxShadow: vars.shadow.elevated,
  backdropFilter: "blur(14px)",
});

export const list = style({
  display: "grid",
  gap: "4px",
});

export const listItem = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "center",
  gap: "12px",
  padding: "11px 12px",
  borderRadius: vars.radius.md,
  color: vars.color.foreground,
  cursor: "pointer",
  transition: "background-color 120ms ease, color 120ms ease",
  selectors: {
    "&[data-highlighted]": {
      background: vars.color.surfaceRaised,
    },
    "&[data-selected]": {
      background: "color-mix(in srgb, var(--surfaceRaised) 76%, var(--accentSoft) 24%)",
    },
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
});

export const listItemBody = style({
  minWidth: 0,
  display: "grid",
  gap: "2px",
});

export const listItemLabel = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "0.94rem",
  fontWeight: 600,
});

export const listItemDescription = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: vars.color.muted,
  fontSize: "0.84rem",
});

export const listItemIndicator = style({
  width: "16px",
  height: "16px",
  color: vars.color.accent,
});

export const emptyState = style({
  padding: "14px 12px",
  color: vars.color.muted,
  fontSize: "0.92rem",
});
