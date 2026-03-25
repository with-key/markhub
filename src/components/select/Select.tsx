import type { ComponentProps } from "react";

import { Select as BaseSelect } from "@/components/shared/base-ui";

type SelectPrimitiveRootProps<Value = string, Multiple extends boolean | undefined = false> = BaseSelect.Root.Props<
  Value,
  Multiple
>;
type SelectPrimitiveLabelProps = BaseSelect.Label.Props;
type SelectPrimitiveTriggerProps = BaseSelect.Trigger.Props;
type SelectPrimitiveValueProps = BaseSelect.Value.Props;
type SelectPrimitiveIconProps = BaseSelect.Icon.Props;
type SelectPrimitivePortalProps = BaseSelect.Portal.Props;
type SelectPrimitivePositionerProps = BaseSelect.Positioner.Props;
type SelectPrimitivePopupProps = BaseSelect.Popup.Props;
type SelectPrimitiveListProps = BaseSelect.List.Props;
type SelectPrimitiveItemProps = BaseSelect.Item.Props;
type SelectPrimitiveItemIndicatorProps = BaseSelect.ItemIndicator.Props;

function Root<Value, Multiple extends boolean | undefined = false>(
  props: SelectPrimitiveRootProps<Value, Multiple>,
) {
  return <BaseSelect.Root {...props} />;
}

const Label = BaseSelect.Label;
const Trigger = BaseSelect.Trigger;
const Value = BaseSelect.Value;
const Icon = BaseSelect.Icon;
const List = BaseSelect.List;
const Item = BaseSelect.Item;
const ItemIndicator = BaseSelect.ItemIndicator;

function Portal({ ref, ...props }: ComponentProps<typeof BaseSelect.Portal>) {
  return <BaseSelect.Portal ref={ref} {...props} />;
}

function Positioner({ ref, ...props }: ComponentProps<typeof BaseSelect.Positioner>) {
  return <BaseSelect.Positioner ref={ref} {...props} />;
}

function Popup({ ref, ...props }: ComponentProps<typeof BaseSelect.Popup>) {
  return <BaseSelect.Popup ref={ref} {...props} />;
}

export const SelectPrimitive = {
  Root,
  Label,
  Trigger,
  Value,
  Icon,
  Portal,
  Positioner,
  Popup,
  List,
  Item,
  ItemIndicator,
};

export type {
  SelectPrimitiveIconProps,
  SelectPrimitiveItemIndicatorProps,
  SelectPrimitiveItemProps,
  SelectPrimitiveLabelProps,
  SelectPrimitiveListProps,
  SelectPrimitivePopupProps,
  SelectPrimitivePortalProps,
  SelectPrimitivePositionerProps,
  SelectPrimitiveRootProps,
  SelectPrimitiveTriggerProps,
  SelectPrimitiveValueProps,
};
