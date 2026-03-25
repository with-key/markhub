import { style } from "@vanilla-extract/css";

import { vars } from "@/styles/global.css";

export const toneMuted = style({
  color: vars.color.muted,
});

export const toneDanger = style({
  color: "#b91c1c",
});

export const toneSuccess = style({
  color: vars.color.success,
});

export const toneWarning = style({
  color: vars.color.warning,
});

export const alignLeft = style({
  textAlign: "left",
});

export const alignCenter = style({
  textAlign: "center",
});

export const alignRight = style({
  textAlign: "right",
});

export const truncateText = style({
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const balanceText = style({
  textWrap: "balance",
});
