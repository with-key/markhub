import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";
import { bodyMd, bodySm, titleSm } from "@/styles/typography.css";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  background: "rgba(9, 9, 11, 0.42)",
  backdropFilter: "blur(6px)",
  zIndex: 40,
  transition: "opacity 160ms ease, backdrop-filter 160ms ease",
  selectors: {
    '&[data-starting-style], &[data-ending-style]': {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
  },
});

export const viewport = style({
  position: "fixed",
  inset: 0,
  display: "grid",
  placeItems: "center",
  padding: vars.space[4],
  zIndex: 41,
  overflowY: "auto",
  "@media": {
    "screen and (min-width: 768px)": {
      padding: vars.space[6],
    },
  },
});

export const popup = style({
  width: `min(560px, calc(100vw - ${vars.space[6]}))`,
  maxWidth: "100%",
  maxHeight: "calc(100dvh - 48px)",
  display: "grid",
  gap: vars.space[5],
  padding: vars.space[6],
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius["2xl"],
  background: vars.color.surface,
  boxShadow: vars.shadow.elevated,
  overflow: "auto",
  transition: "transform 160ms ease, opacity 160ms ease",
  selectors: {
    '&[data-starting-style], &[data-ending-style]': {
      opacity: 0,
      transform: "translateY(8px) scale(0.985)",
    },
  },
});

export const dangerPopup = style({
  borderColor: "color-mix(in srgb, #b42318 24%, var(--border) 76%)",
});

export const header = style({
  display: "grid",
  gap: vars.space[2],
});

export const titleRow = style({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  gap: vars.space[4],
});

export const title = style([titleSm, {
  margin: 0,
}]);

export const description = style([bodyMd, {
  margin: 0,
  color: vars.color.muted,
}]);

export const body = style({
  display: "grid",
  gap: vars.space[4],
});

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space[3],
  flexWrap: "wrap",
  paddingTop: vars.space[2],
});

export const closeButton = style({
  width: "36px",
  height: "36px",
  flexShrink: 0,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.pill,
  background: "transparent",
  color: vars.color.muted,
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
  transition: "background-color 140ms ease, border-color 140ms ease, color 140ms ease, box-shadow 140ms ease",
  selectors: {
    "&:hover": {
      background: vars.color.surfaceRaised,
      borderColor: vars.color.outlineVariant,
      color: vars.color.foreground,
    },
    "&:focus-visible": {
      outline: `2px solid ${vars.color.surfaceTint}`,
      outlineOffset: "2px",
    },
  },
});

export const accentBlock = style([bodySm, {
  padding: `${vars.space[3]} ${vars.space[4]}`,
  borderRadius: vars.radius.lg,
  border: `1px solid ${vars.color.outlineVariant}`,
  background: vars.color.surfaceRaised,
  color: vars.color.muted,
}]);
