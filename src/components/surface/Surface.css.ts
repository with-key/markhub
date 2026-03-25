import { recipe } from "@vanilla-extract/recipes";

import { vars } from "@/styles/global.css";

export const surface = recipe({
  base: {
    border: `1px solid ${vars.color.outlineVariant}`,
  },
  variants: {
    variant: {
      card: {
        background: vars.color.surface,
        borderRadius: vars.radius.lg,
      },
      panel: {
        background: vars.color.surface,
        borderRadius: vars.radius.xl,
        boxShadow: vars.shadow.soft,
      },
      subtle: {
        background: vars.color.surfaceRaised,
        borderRadius: vars.radius.lg,
      },
    },
    padding: {
      lg: {
        padding: vars.space[6],
      },
      md: {
        padding: vars.space[5],
      },
      sm: {
        padding: vars.space[4],
      },
    },
  },
  defaultVariants: {
    variant: "panel",
    padding: "lg",
  },
});

export type SurfaceVariants = NonNullable<Parameters<typeof surface>[0]>;
