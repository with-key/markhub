import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/styles/global.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    minHeight: "40px",
    padding: "0 14px",
    border: `1px solid ${vars.color.outlineVariant}`,
    borderRadius: vars.radius.sm,
    fontFamily: vars.font.body,
    fontSize: vars.text.size.sm,
    fontWeight: vars.text.weight.semibold,
    letterSpacing: vars.text.tracking.normal,
    lineHeight: vars.text.lineHeight.compact,
    textDecoration: "none",
    transition:
      "background-color 140ms ease, border-color 140ms ease, color 140ms ease, box-shadow 140ms ease",
    cursor: "pointer",
    selectors: {
      "&:hover": {
        boxShadow: "none",
      },
      "&:focus-visible": {
        outline: `2px solid ${vars.color.surfaceTint}`,
        outlineOffset: "2px",
      },
      "&:disabled": {
        opacity: 0.48,
        cursor: "not-allowed",
        boxShadow: "none",
      },
    },
  },
  variants: {
    variant: {
      primary: {
        background: vars.color.foreground,
        color: vars.color.background,
        borderColor: vars.color.foreground,
        selectors: {
          "&:hover:not(:disabled)": {
            background: vars.color.primary,
            borderColor: vars.color.primary,
          },
        },
      },
      secondary: {
        background: vars.color.surface,
        color: vars.color.foreground,
        borderColor: vars.color.outlineVariant,
        selectors: {
          "&:hover:not(:disabled)": {
            background: vars.color.surfaceLow,
            borderColor: vars.color.outlineVariant,
          },
        },
      },
      ghost: {
        background: "transparent",
        color: vars.color.foreground,
        borderColor: "transparent",
        selectors: {
          "&:hover:not(:disabled)": {
            background: vars.color.surfaceLow,
            borderColor: "transparent",
          },
        },
      },
      danger: {
        background: "#7f1d1d",
        color: "#fef2f2",
        borderColor: "#7f1d1d",
        selectors: {
          "&:hover:not(:disabled)": {
            background: "#6b1515",
            borderColor: "#6b1515",
          },
        },
      },
    },
    size: {
      md: {
        minHeight: "40px",
        padding: "0 14px",
      },
      lg: {
        minHeight: "46px",
        padding: "0 18px",
        fontSize: vars.text.size.md,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonVariants = NonNullable<Parameters<typeof button>[0]>;
