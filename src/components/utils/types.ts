import type { UseRenderRenderProp } from "@base-ui/react/use-render";
import type { ComponentPropsWithRef } from "react";
import type { Sprinkles } from "./sprinkles.css";

export type UtilityOwnProps = Sprinkles & {
  className?: string;
  render?: UseRenderRenderProp;
};

export type UtilityProps<OwnProps> = OwnProps &
  Omit<ComponentPropsWithRef<"div">, keyof OwnProps | "render">;
