import type { ComponentProps } from "react";

import { Combobox as BaseCombobox } from "@/components/shared/base-ui";

type ComboboxPrimitiveRootProps<Value = string, Multiple extends boolean | undefined = false> = BaseCombobox.Root.Props<
  Value,
  Multiple
>;
type ComboboxPrimitiveLabelProps = BaseCombobox.Label.Props;
type ComboboxPrimitiveTriggerProps = BaseCombobox.Trigger.Props;
type ComboboxPrimitiveInputProps = BaseCombobox.Input.Props;
type ComboboxPrimitiveInputGroupProps = BaseCombobox.InputGroup.Props;
type ComboboxPrimitivePortalProps = BaseCombobox.Portal.Props;
type ComboboxPrimitivePositionerProps = BaseCombobox.Positioner.Props;
type ComboboxPrimitivePopupProps = BaseCombobox.Popup.Props;
type ComboboxPrimitiveListProps = BaseCombobox.List.Props;
type ComboboxPrimitiveItemProps = BaseCombobox.Item.Props;
type ComboboxPrimitiveItemIndicatorProps = BaseCombobox.ItemIndicator.Props;
type ComboboxPrimitiveEmptyProps = BaseCombobox.Empty.Props;
type ComboboxPrimitiveIconProps = BaseCombobox.Icon.Props;
type ComboboxPrimitiveValueProps = BaseCombobox.Value.Props;

function Root<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxPrimitiveRootProps<Value, Multiple>,
) {
  return <BaseCombobox.Root {...props} />;
}

const Label = BaseCombobox.Label;
const Trigger = BaseCombobox.Trigger;
const Input = BaseCombobox.Input;
const InputGroup = BaseCombobox.InputGroup;
const List = BaseCombobox.List;
const Item = BaseCombobox.Item;
const ItemIndicator = BaseCombobox.ItemIndicator;
const Empty = BaseCombobox.Empty;
const Icon = BaseCombobox.Icon;
const Value = BaseCombobox.Value;

function Portal({ ref, ...props }: ComponentProps<typeof BaseCombobox.Portal>) {
  return <BaseCombobox.Portal ref={ref} {...props} />;
}

function Positioner({ ref, ...props }: ComponentProps<typeof BaseCombobox.Positioner>) {
  return <BaseCombobox.Positioner ref={ref} {...props} />;
}

function Popup({ ref, ...props }: ComponentProps<typeof BaseCombobox.Popup>) {
  return <BaseCombobox.Popup ref={ref} {...props} />;
}

export const ComboboxPrimitive = {
  Root,
  Label,
  Trigger,
  Input,
  InputGroup,
  Portal,
  Positioner,
  Popup,
  List,
  Item,
  ItemIndicator,
  Empty,
  Icon,
  Value,
};

export type {
  ComboboxPrimitiveEmptyProps,
  ComboboxPrimitiveIconProps,
  ComboboxPrimitiveInputGroupProps,
  ComboboxPrimitiveInputProps,
  ComboboxPrimitiveItemIndicatorProps,
  ComboboxPrimitiveItemProps,
  ComboboxPrimitiveLabelProps,
  ComboboxPrimitiveListProps,
  ComboboxPrimitivePopupProps,
  ComboboxPrimitivePortalProps,
  ComboboxPrimitivePositionerProps,
  ComboboxPrimitiveRootProps,
  ComboboxPrimitiveTriggerProps,
  ComboboxPrimitiveValueProps,
};
