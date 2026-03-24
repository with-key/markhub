import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const sectionHeaderRoot = style({
  display: "grid",
  gap: vars.space[2],
});

export const sectionHeaderTop = style({
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  gap: vars.space[4],
  flexWrap: "wrap",
});

export const sectionHeaderTitle = style({
  margin: 0,
  fontFamily: vars.font.display,
  fontSize: "1.25rem",
  fontWeight: 700,
  letterSpacing: "-0.03em",
});

export const sectionHeaderDescription = style({
  margin: 0,
  color: vars.color.muted,
  lineHeight: 1.6,
});
