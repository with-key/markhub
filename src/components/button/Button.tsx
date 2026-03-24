import type { ButtonHTMLAttributes } from "react";

import { BaseButton } from "@/components/shared/base-ui";
import { cx } from "@/components/shared/cx";

import { button, type ButtonVariants } from "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
}

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <BaseButton className={cx(button({ size, variant }), className)} {...props}>
      {children}
    </BaseButton>
  );
}
