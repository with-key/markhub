import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/styles/global.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "44px",
    padding: "0 18px",
    border: "1px solid transparent",
    borderRadius: vars.radius.pill,
    fontFamily: vars.font.body,
    fontSize: "0.95rem",
    fontWeight: 600,
    lineHeight: 1,
    textDecoration: "none",
    transition:
      "transform 160ms ease, background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease",
    cursor: "pointer",
    selectors: {
      "&:hover": {
        transform: "translateY(-1px)",
      },
      "&:focus-visible": {
        outline: `2px solid ${vars.color.surfaceTint}`,
        outlineOffset: "3px",
      },
      "&:disabled": {
        opacity: 0.55,
        cursor: "not-allowed",
        transform: "none",
      },
    },
  },
  variants: {
    variant: {
      primary: {
        background: vars.color.primary,
        color: vars.color.background,
        boxShadow: vars.shadow.emphasis,
      },
      secondary: {
        background: vars.color.surface,
        color: vars.color.foreground,
        borderColor: vars.color.border,
      },
      ghost: {
        background: "transparent",
        color: vars.color.foreground,
        borderColor: vars.color.border,
      },
      danger: {
        background: "#8f1d14",
        color: "#fff7f6",
        boxShadow: "0 18px 28px rgba(143, 29, 20, 0.18)",
      },
    },
    size: {
      md: {
        minHeight: "44px",
        padding: "0 18px",
      },
      lg: {
        minHeight: "52px",
        padding: "0 22px",
        fontSize: "1rem",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonVariants = NonNullable<Parameters<typeof button>[0]>;
