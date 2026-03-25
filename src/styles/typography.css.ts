import { style } from "@vanilla-extract/css";

import { vars } from "./global.css";

export const overline01 = style({
  fontFamily: vars.font.display,
  fontSize: vars.text.size.xs,
  fontWeight: vars.text.weight.bold,
  lineHeight: vars.text.lineHeight.heading,
  letterSpacing: vars.text.tracking.caps,
  textTransform: "uppercase",
});

export const heading01 = style({
  fontFamily: vars.font.display,
  fontSize: vars.text.size.hero,
  fontWeight: vars.text.weight.bold,
  lineHeight: "0.98",
  letterSpacing: "-0.05em",
});

export const heading02 = style({
  fontFamily: vars.font.display,
  fontSize: vars.text.size["2xl"],
  fontWeight: vars.text.weight.bold,
  lineHeight: vars.text.lineHeight.compact,
  letterSpacing: vars.text.tracking.tight,
});

export const heading03 = style({
  fontFamily: vars.font.display,
  fontSize: vars.text.size.xl,
  fontWeight: vars.text.weight.semibold,
  lineHeight: vars.text.lineHeight.heading,
  letterSpacing: vars.text.tracking.tight,
});

export const heading04 = style({
  fontFamily: vars.font.display,
  fontSize: vars.text.size.lg,
  fontWeight: vars.text.weight.semibold,
  lineHeight: vars.text.lineHeight.heading,
  letterSpacing: vars.text.tracking.snug,
});

export const body01 = style({
  fontFamily: vars.font.body,
  fontSize: vars.text.size.md,
  fontWeight: vars.text.weight.regular,
  lineHeight: vars.text.lineHeight.body,
  letterSpacing: vars.text.tracking.normal,
});

export const body02 = style({
  fontFamily: vars.font.body,
  fontSize: vars.text.size.sm,
  fontWeight: vars.text.weight.regular,
  lineHeight: vars.text.lineHeight.body,
  letterSpacing: vars.text.tracking.normal,
});

export const body03 = style({
  fontFamily: vars.font.body,
  fontSize: vars.text.size.xs,
  fontWeight: vars.text.weight.regular,
  lineHeight: vars.text.lineHeight.body,
  letterSpacing: vars.text.tracking.normal,
});

export const label01 = style({
  fontFamily: vars.font.body,
  fontSize: vars.text.size.md,
  fontWeight: vars.text.weight.semibold,
  lineHeight: vars.text.lineHeight.heading,
  letterSpacing: vars.text.tracking.normal,
});

export const label02 = style({
  fontFamily: vars.font.body,
  fontSize: vars.text.size.sm,
  fontWeight: vars.text.weight.semibold,
  lineHeight: vars.text.lineHeight.heading,
  letterSpacing: vars.text.tracking.normal,
});

export const label03 = style({
  fontFamily: vars.font.body,
  fontSize: vars.text.size.xs,
  fontWeight: vars.text.weight.semibold,
  lineHeight: vars.text.lineHeight.heading,
  letterSpacing: vars.text.tracking.wide,
  textTransform: "uppercase",
});

export const code01 = style({
  fontFamily: vars.font.mono,
  fontSize: vars.text.size.sm,
  fontWeight: vars.text.weight.medium,
  lineHeight: vars.text.lineHeight.relaxed,
  fontVariantLigatures: "none",
});

// Backward-compatible aliases while the codebase migrates to numeric naming.
export const eyebrow = overline01;
export const heroTitle = heading01;
export const titleLg = heading02;
export const titleMd = heading03;
export const titleSm = heading04;
export const bodyMd = body01;
export const bodySm = body02;
export const bodyXs = body03;
export const labelMd = label01;
export const labelSm = label02;
export const labelXs = label03;
export const codeSm = code01;
