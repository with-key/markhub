import { useRender } from "@base-ui/react/use-render";
import type { Ref } from "react";
import { sprinkles } from "./sprinkles.css";
import type { UtilityOwnProps, UtilityProps } from "./types";
import { cx, splitSprinklesProps } from "./utils";

type FlexOwnProps = Omit<UtilityOwnProps, "display">;
type FlexProps = UtilityProps<FlexOwnProps> & {
  ref?: Ref<HTMLElement>;
} & Record<string, unknown>;

export function Flex(incomingProps: FlexProps) {
  const { className, ref, render, ...props } = incomingProps;
  const { sprinkleProps, elementProps } = splitSprinklesProps(props);

  return useRender({
    defaultTagName: "div",
    render,
    ref,
    props: {
      ...elementProps,
      className: cx(sprinkles({ ...sprinkleProps, display: "flex" }), className),
    },
  });
}
