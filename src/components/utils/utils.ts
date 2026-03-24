import { cx } from "@/components/shared/cx";

import { sprinklePropNames, type Sprinkles } from "./sprinkles.css";

type AnyRecord = Record<string, unknown>;

const sprinklePropNameSet = new Set<string>(sprinklePropNames);

export { cx };

export function splitSprinklesProps(props: AnyRecord) {
  const sprinkleProps: AnyRecord = {};
  const elementProps: AnyRecord = {};

  for (const [key, value] of Object.entries(props)) {
    if (sprinklePropNameSet.has(key)) {
      sprinkleProps[key] = value;
    } else {
      elementProps[key] = value;
    }
  }

  return {
    sprinkleProps: sprinkleProps as Sprinkles,
    elementProps,
  };
}
