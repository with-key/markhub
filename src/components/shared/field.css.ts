import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";
import { bodySm, labelMd, labelSm } from "@/styles/typography.css";

export const fieldRoot = style({
  display: "grid",
  gap: vars.space[2],
});

export const fieldLabel = style([labelSm, {
  margin: 0,
  color: vars.color.foreground,
}]);

export const fieldDescription = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);

export const fieldError = style([labelSm, {
  margin: 0,
  color: "#b91c1c",
}]);

export const choiceRoot = style({
  display: "grid",
  gap: vars.space[3],
});

export const choiceLabel = style({
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr)",
  alignItems: "start",
  gap: vars.space[3],
  cursor: "pointer",
});

export const choiceContent = style({
  display: "grid",
  gap: "3px",
  paddingTop: "1px",
});

export const choiceTitle = style([labelMd, {
  color: vars.color.foreground,
}]);

export const choiceDescription = style([bodySm, {
  margin: 0,
  color: vars.color.muted,
}]);

export const optionGroup = style({
  display: "grid",
  gap: vars.space[3],
});

export const optionCard = style({
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr)",
  gap: vars.space[3],
  padding: `${vars.space[3]} ${vars.space[4]}`,
  border: `1px solid ${vars.color.outlineVariant}`,
  borderRadius: vars.radius.lg,
  background: vars.color.surface,
  transition: "border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease",
  selectors: {
    "&:has([data-checked])": {
      borderColor: vars.color.foreground,
      background: vars.color.surfaceRaised,
      boxShadow: `0 0 0 1px ${vars.color.border}`,
    },
  },
});
