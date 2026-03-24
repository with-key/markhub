import type { Ref } from "react";
import { useRender } from "@base-ui/react/use-render";

import { sprinkles } from "./sprinkles.css";
import type { UtilityOwnProps, UtilityProps } from "./types";
import { cx, splitSprinklesProps } from "./utils";

type GridOwnProps = Omit<UtilityOwnProps, "display">;
type GridProps = UtilityProps<GridOwnProps> & {
  ref?: Ref<HTMLElement>;
} & Record<string, unknown>;

export function Grid(incomingProps: GridProps) {
  const { className, ref, render, ...props } = incomingProps;
  const { sprinkleProps, elementProps } = splitSprinklesProps(props);

  return useRender({
    defaultTagName: "div",
    render,
    ref,
    props: {
      ...elementProps,
      className: cx(sprinkles({ ...sprinkleProps, display: "grid" }), className),
    },
  });
}
