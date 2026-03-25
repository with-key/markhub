import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";
import { bodyXs, codeSm, labelSm, labelXs } from "@/styles/typography.css";

export const menuTrigger = style({
  minHeight: "40px",
  padding: "0 14px",
});

export const menuItem = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "auto minmax(0, 1fr) auto",
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
    "&[data-disabled]": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
});

export const menuIndicator = style({
  width: "16px",
  height: "16px",
  color: vars.color.foreground,
});

export const menuItemBody = style({
  minWidth: 0,
  display: "grid",
  gap: "2px",
});

export const menuItemLabel = style([labelSm, {}]);

export const menuItemDescription = style([bodyXs, {
  color: vars.color.muted,
}]);

export const menuShortcut = style([codeSm, {
  color: vars.color.muted,
}]);

export const separator = style({
  height: "1px",
  margin: "6px 8px",
  background: vars.color.outlineVariant,
});

export const groupLabel = style([labelXs, {
  padding: "8px 12px 4px",
  color: vars.color.muted,
}]);
