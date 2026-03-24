import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const layout = style({
  display: "grid",
  gap: vars.space[6],
});

export const heroGrid = style({
  display: "grid",
  gap: vars.space[4],
  gridTemplateColumns: "minmax(0, 1.35fr) minmax(280px, 0.65fr)",
  "@media": {
    "screen and (max-width: 1080px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const noteCard = style({
  display: "grid",
  gap: vars.space[4],
  alignContent: "start",
  minHeight: "100%",
});

export const introTitle = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "1.7rem",
  letterSpacing: "-0.04em",
});

export const introBody = style({
  margin: 0,
  color: vars.color.muted,
  lineHeight: 1.75,
});

export const statusList = style({
  display: "grid",
  gap: vars.space[3],
});

export const statusItem = style({
  display: "grid",
  gap: "6px",
  padding: vars.space[4],
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surfaceRaised,
});

export const statusLabel = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.82rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
});

export const statusValue = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "1.15rem",
  fontWeight: 700,
  letterSpacing: "-0.03em",
});

export const statusHint = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.9rem",
  lineHeight: 1.6,
});

export const sectionStack = style({
  display: "grid",
  gap: vars.space[5],
});

export const responsiveGrid = style({
  display: "grid",
  gap: vars.space[4],
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  "@media": {
    "screen and (max-width: 980px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const buttonRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space[3],
});

export const buttonStack = style({
  display: "grid",
  gap: vars.space[3],
});

export const panelLabel = style({
  margin: 0,
  color: vars.color.muted,
  fontSize: "0.82rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
});

export const miniGrid = style({
  display: "grid",
  gap: vars.space[3],
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  "@media": {
    "screen and (max-width: 860px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const surfacePreview = style({
  minHeight: "120px",
  display: "grid",
  gap: vars.space[3],
  alignContent: "start",
});

export const surfaceTitle = style({
  margin: 0,
  fontWeight: 700,
});

export const surfaceText = style({
  margin: 0,
  color: vars.color.muted,
  lineHeight: 1.65,
});

export const formGrid = style({
  display: "grid",
  gap: vars.space[4],
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  "@media": {
    "screen and (max-width: 980px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const fullSpan = style({
  gridColumn: "1 / -1",
});

export const metaCard = style({
  display: "grid",
  gap: vars.space[3],
  padding: vars.space[5],
  border: `1px dashed ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.xl,
  background: "color-mix(in srgb, var(--surface) 88%, transparent)",
});

export const codeLine = style({
  margin: 0,
  fontFamily: vars.font.mono,
  fontSize: "0.9rem",
  lineHeight: 1.7,
});

export const utilityTile = style({
  padding: vars.space[4],
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
  boxShadow: vars.shadow.soft,
});

export const utilityTitle = style({
  margin: "0 0 6px",
  fontWeight: 700,
});

export const utilityText = style({
  margin: 0,
  color: vars.color.muted,
  lineHeight: 1.6,
});
