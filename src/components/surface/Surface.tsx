import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cx } from "@/components/shared/cx";

import { surface, type SurfaceVariants } from "./Surface.css";

type SurfaceProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  padding?: SurfaceVariants["padding"];
  variant?: SurfaceVariants["variant"];
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Surface<T extends ElementType = "div">({
  as,
  children,
  className,
  padding = "lg",
  variant = "panel",
  ...props
}: SurfaceProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cx(surface({ padding, variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
}
