import type { Ref } from "react";
import { useRender } from "@base-ui/react/use-render";

import { sprinkles } from "./sprinkles.css";
import type { UtilityOwnProps, UtilityProps } from "./types";
import { cx, splitSprinklesProps } from "./utils";

type FlexItemOwnProps = UtilityOwnProps;
type FlexItemProps = UtilityProps<FlexItemOwnProps> & {
  ref?: Ref<HTMLElement>;
} & Record<string, unknown>;

export function FlexItem(incomingProps: FlexItemProps) {
  const { className, ref, render, ...props } = incomingProps;
  const { sprinkleProps, elementProps } = splitSprinklesProps(props);

  return useRender({
    defaultTagName: "div",
    render,
    ref,
    props: {
      ...elementProps,
      className: cx(sprinkles(sprinkleProps), className),
    },
  });
}
