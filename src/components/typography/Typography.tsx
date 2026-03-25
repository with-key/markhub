import type { Ref } from "react";

import { useRender } from "@base-ui/react/use-render";

import { cx } from "@/components/shared/cx";
import type { UtilityOwnProps, UtilityProps } from "@/components/utils/types";
import { sprinkles } from "@/components/utils/sprinkles.css";
import { splitSprinklesProps } from "@/components/utils/utils";
import {
  body01,
  body02,
  body03,
  code01,
  heading01,
  heading02,
  heading03,
  heading04,
  label01,
  label02,
  label03,
  overline01,
} from "@/styles/typography.css";

import {
  alignCenter,
  alignLeft,
  alignRight,
  balanceText,
  toneDanger,
  toneMuted,
  toneSuccess,
  toneWarning,
  truncateText,
} from "./Typography.css";

const typographyVariants = {
  heading01,
  heading02,
  heading03,
  heading04,
  body01,
  body02,
  body03,
  label01,
  label02,
  label03,
  overline01,
  code01,
} as const;

const defaultTagsByVariant = {
  heading01: "h1",
  heading02: "h2",
  heading03: "h3",
  heading04: "h4",
  body01: "p",
  body02: "p",
  body03: "p",
  label01: "span",
  label02: "span",
  label03: "span",
  overline01: "span",
  code01: "code",
} as const;

export type TypographyVariant = keyof typeof typographyVariants;
export type TypographyTone = "default" | "muted" | "danger" | "success" | "warning";
export type TypographyAlign = "left" | "center" | "right";

const toneClasses = {
  default: undefined,
  muted: toneMuted,
  danger: toneDanger,
  success: toneSuccess,
  warning: toneWarning,
} as const;

const alignClasses = {
  left: alignLeft,
  center: alignCenter,
  right: alignRight,
} as const;

type TypographyOwnProps = Pick<UtilityOwnProps, "render" | "className"> & {
  align?: TypographyAlign;
  balance?: boolean;
  ref?: Ref<HTMLElement>;
  tone?: TypographyTone;
  truncate?: boolean;
  variant?: TypographyVariant;
};

export type TypographyProps = UtilityProps<TypographyOwnProps>;

export function Typography(incomingProps: TypographyProps) {
  const {
    align = "left",
    balance = false,
    className,
    ref,
    render,
    tone = "default",
    truncate = false,
    variant = "body01",
    ...props
  } = incomingProps;
  const { sprinkleProps, elementProps } = splitSprinklesProps(props);
  const sprinkleClassName =
    typeof sprinkles === "function" ? sprinkles(sprinkleProps) : undefined;

  return useRender({
    defaultTagName: defaultTagsByVariant[variant],
    render,
    ref,
    props: {
      ...elementProps,
      className: cx(
        typographyVariants[variant],
        alignClasses[align],
        toneClasses[tone],
        truncate ? truncateText : undefined,
        balance ? balanceText : undefined,
        sprinkleClassName,
        className,
      ),
    },
  });
}
