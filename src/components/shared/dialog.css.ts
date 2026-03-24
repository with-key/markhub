import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const backdrop = style({
  position: "fixed",
  inset: 0,
  background: "rgba(7, 17, 31, 0.42)",
  backdropFilter: "blur(10px)",
  zIndex: 40,
});

export const viewport = style({
  position: "fixed",
  inset: 0,
  display: "grid",
  placeItems: "center",
  padding: "24px",
  zIndex: 41,
});

export const popup = style({
  width: "min(560px, calc(100vw - 32px))",
  display: "grid",
  gap: "18px",
  padding: "24px",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius["2xl"],
  background: "color-mix(in srgb, var(--surface) 96%, transparent)",
  boxShadow: vars.shadow.elevated,
});

export const dangerPopup = style({
  borderColor: "color-mix(in srgb, #b42318 24%, var(--border) 76%)",
});

export const header = style({
  display: "grid",
  gap: "8px",
});

export const titleRow = style({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  gap: "16px",
});

export const title = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "1.35rem",
  fontWeight: 700,
  letterSpacing: "-0.04em",
});

export const description = style({
  margin: 0,
  color: vars.color.muted,
  lineHeight: 1.65,
});

export const body = style({
  display: "grid",
  gap: "16px",
});

export const footer = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: "12px",
  flexWrap: "wrap",
});

export const closeButton = style({
  width: "36px",
  height: "36px",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.pill,
  background: "transparent",
  color: vars.color.muted,
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
});

export const accentBlock = style({
  padding: "14px 16px",
  borderRadius: vars.radius.lg,
  background: vars.color.surfaceRaised,
  color: vars.color.muted,
  fontSize: "0.92rem",
  lineHeight: 1.6,
});
