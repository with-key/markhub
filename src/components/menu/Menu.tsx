import type { ComponentProps } from "react";
import { Menu as BaseMenu } from "@/components/shared/base-ui";

type MenuRootProps<Payload = unknown> = BaseMenu.Root.Props<Payload>;
type MenuTriggerProps = BaseMenu.Trigger.Props;
type MenuPortalProps = BaseMenu.Portal.Props;
type MenuPositionerProps = BaseMenu.Positioner.Props;
type MenuPopupProps = BaseMenu.Popup.Props;
type MenuItemProps = BaseMenu.Item.Props;
type MenuCheckboxItemProps = BaseMenu.CheckboxItem.Props;
type MenuCheckboxItemIndicatorProps = BaseMenu.CheckboxItemIndicator.Props;
type MenuGroupProps = BaseMenu.Group.Props;
type MenuRadioGroupProps = BaseMenu.RadioGroup.Props;
type MenuGroupLabelProps = BaseMenu.GroupLabel.Props;
type MenuRadioItemProps = BaseMenu.RadioItem.Props;
type MenuRadioItemIndicatorProps = BaseMenu.RadioItemIndicator.Props;
type MenuSeparatorProps = BaseMenu.Separator.Props;

function Root<Payload>(props: MenuRootProps<Payload>) {
  return <BaseMenu.Root {...props} />;
}

const Trigger = BaseMenu.Trigger;
const Item = BaseMenu.Item;
const CheckboxItem = BaseMenu.CheckboxItem;
const CheckboxItemIndicator = BaseMenu.CheckboxItemIndicator;
const Group = BaseMenu.Group;
const RadioGroup = BaseMenu.RadioGroup;
const GroupLabel = BaseMenu.GroupLabel;
const RadioItem = BaseMenu.RadioItem;
const RadioItemIndicator = BaseMenu.RadioItemIndicator;
const Separator = BaseMenu.Separator;

function Portal({ ref, ...props }: ComponentProps<typeof BaseMenu.Portal>) {
  return <BaseMenu.Portal ref={ref} {...props} />;
}

function Positioner({ ref, ...props }: ComponentProps<typeof BaseMenu.Positioner>) {
  return <BaseMenu.Positioner ref={ref} {...props} />;
}

function Popup({ ref, ...props }: ComponentProps<typeof BaseMenu.Popup>) {
  return <BaseMenu.Popup ref={ref} {...props} />;
}

export  {
  Root,
  Trigger,
  Portal,
  Positioner,
  Popup,
  Item,
  CheckboxItem,
  CheckboxItemIndicator,
  Group,
  RadioGroup,
  GroupLabel,
  RadioItem,
  RadioItemIndicator,
  Separator,
};

export type {
  MenuCheckboxItemIndicatorProps,
  MenuCheckboxItemProps,
  MenuGroupProps,
  MenuGroupLabelProps,
  MenuItemProps,
  MenuPopupProps,
  MenuPortalProps,
  MenuPositionerProps,
  MenuRadioGroupProps,
  MenuRadioItemIndicatorProps,
  MenuRadioItemProps,
  MenuRootProps,
  MenuSeparatorProps,
  MenuTriggerProps,
};
