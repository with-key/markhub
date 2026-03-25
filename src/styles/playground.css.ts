import { vars } from "@/styles/global.css";
import { bodyMd, titleMd } from "@/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const page = style({
  display: "grid",
  gap: vars.space[5],
  padding: vars.space[6],
});

export const toolbar = style({
  display: "grid",
  gap: vars.space[4],
  position: "sticky",
  top: vars.space[4],
  zIndex: 1,
});

export const toolbarTitle = style([
  titleMd,
  {
    margin: 0,
  },
]);

export const toolbarHint = style([
  bodyMd,
  {
    margin: `${vars.space[2]} 0 0`,
    color: vars.color.muted,
  },
]);

export const chipRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space[2],
});

export const chip = style({
  appearance: "none",
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.pill,
  background: vars.color.surface,
  color: vars.color.foreground,
  cursor: "pointer",
  font: "inherit",
  fontSize: vars.text.size.sm,
  fontWeight: vars.text.weight.semibold,
  lineHeight: vars.text.lineHeight.heading,
  padding: "10px 14px",
  transition:
    "background-color 140ms ease, border-color 140ms ease, color 140ms ease",
  selectors: {
    "&:hover": {
      borderColor: vars.color.outline,
    },
  },
});

export const chipActive = style({
  background: vars.color.accentSoft,
  borderColor: vars.color.accent,
  color: vars.color.accentStrong,
});

export const sectionList = style({
  display: "grid",
  gap: vars.space[4],
});

export const previewSection = style({
  display: "grid",
  gap: vars.space[4],
  scrollMarginTop: "120px",
});

export const componentStack = style({
  display: "grid",
  gap: vars.space[4],
});

export const previewGrid = style({
  display: "grid",
  gap: vars.space[3],
});

export const componentGrid = style({
  display: "grid",
  gap: vars.space[3],
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
});

export const canvasCard = style({
  minHeight: "100%",
  display: "grid",
  gap: vars.space[3],
  alignContent: "start",
});

export const metaText = style([
  bodyMd,
  {
    margin: 0,
    color: vars.color.muted,
  },
]);

export const utilityGrid = style({
  display: "grid",
  gap: vars.space[3],
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
});

export const utilityBlock = style({
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
  boxShadow: vars.shadow.soft,
});

export const typographyStack = style({
  display: "grid",
  gap: vars.space[4],
});

export const typographyGrid = style({
  display: "grid",
  gap: vars.space[3],
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
});

export const typographyCard = style({
  display: "grid",
  gap: vars.space["3"],
  minHeight: "100%",
});

export const typographyMeta = style({
  display: "grid",
  gap: "4px",
  paddingBottom: vars.space[3],
  borderBottom: `1px solid ${vars.color.border}`,
});

export const typographyToken = style({
  color: vars.color.muted,
  fontFamily: vars.font.mono,
  fontSize: vars.text.size.xs,
  lineHeight: vars.text.lineHeight.relaxed,
  fontVariantLigatures: "none",
});

export const typographySpec = style({
  color: vars.color.muted,
  fontSize: vars.text.size.sm,
  lineHeight: vars.text.lineHeight.body,
});

export const typographySample = style({
  margin: 0,
  color: vars.color.foreground,
});

export const typographyBodySample = style({
  margin: 0,
  maxWidth: "50ch",
  color: vars.color.foreground,
});
