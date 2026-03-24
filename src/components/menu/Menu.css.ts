import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const menuTrigger = style({
  minHeight: "40px",
  padding: "0 14px",
});

export const menuItem = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr) auto",
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
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
});

export const menuIndicator = style({
  width: "16px",
  height: "16px",
  color: vars.color.accent,
});

export const menuItemBody = style({
  minWidth: 0,
  display: "grid",
  gap: "2px",
});

export const menuItemLabel = style({
  fontSize: "0.94rem",
  fontWeight: 600,
});

export const menuItemDescription = style({
  color: vars.color.muted,
  fontSize: "0.82rem",
});

export const menuShortcut = style({
  color: vars.color.muted,
  fontFamily: vars.font.mono,
  fontSize: "0.78rem",
});

export const separator = style({
  height: "1px",
  margin: "6px 8px",
  background: vars.color.border,
});

export const groupLabel = style({
  padding: "8px 12px 4px",
  color: vars.color.muted,
  fontSize: "0.76rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
});
