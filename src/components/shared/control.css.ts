import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";
import { bodySm, labelSm } from "@/styles/typography.css";

export const trigger = style({
  width: "100%",
  minHeight: "44px",
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "center",
  gap: vars.space[3],
  padding: `0 ${vars.space[4]}`,
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
  color: vars.color.foreground,
  font: "inherit",
  textAlign: "left",
  transition: "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
  selectors: {
    "&:focus-visible": {
      outline: "none",
      borderColor: vars.color.foreground,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
    },
    "&[data-open]": {
      borderColor: vars.color.foreground,
      background: vars.color.surfaceRaised,
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
  background: vars.color.surface,
  transition: "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
  selectors: {
    "&:focus-within": {
      borderColor: vars.color.foreground,
      boxShadow: `0 0 0 4px color-mix(in srgb, ${vars.color.surfaceTint} 14%, transparent)`,
      background: vars.color.surface,
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
  fontSize: vars.text.size.md,
  lineHeight: vars.text.lineHeight.body,
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
  borderLeft: `1px solid ${vars.color.outlineVariant}`,
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
  padding: vars.space[2],
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
  boxShadow: vars.shadow.elevated,
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
  gap: vars.space[3],
  padding: "10px 12px",
  borderRadius: vars.radius.md,
  color: vars.color.foreground,
  cursor: "pointer",
  transition: "background-color 120ms ease, color 120ms ease",
  selectors: {
    "&[data-highlighted]": {
      background: vars.color.surfaceLow,
    },
    "&[data-selected]": {
      background: vars.color.surfaceRaised,
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

export const listItemLabel = style([labelSm, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}]);

export const listItemDescription = style([bodySm, {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: vars.color.muted,
}]);

export const listItemIndicator = style({
  width: "16px",
  height: "16px",
  color: vars.color.foreground,
});

export const emptyState = style([bodySm, {
  padding: "14px 12px",
  color: vars.color.muted,
}]);
