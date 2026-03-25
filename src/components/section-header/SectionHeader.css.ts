import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";
import { bodySm, titleSm } from "@/styles/typography.css";

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

export const sectionHeaderTitle = style([titleSm, {
  margin: 0,
}]);

export const sectionHeaderDescription = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);
