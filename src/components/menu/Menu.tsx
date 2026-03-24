import { Menu as BaseMenu } from "@/components/shared/base-ui";
import {
  list,
  popup,
  positioner,
} from "@/components/shared/control.css";
import { CheckIcon, ChevronDownIcon, CircleIcon } from "@/components/shared/icons";
import { Button } from "@/components/button";

import {
  groupLabel,
  menuIndicator,
  menuItem,
  menuItemBody,
  menuItemDescription,
  menuItemLabel,
  menuShortcut,
  menuTrigger,
  separator,
} from "./Menu.css";

export type MenuActionItem = {
  description?: string;
  disabled?: boolean;
  kind?: "item";
  label: string;
  onSelect?: () => void;
  shortcut?: string;
};

export type MenuCheckboxItem = {
  checked?: boolean;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  kind: "checkbox";
  label: string;
  onCheckedChange?: (checked: boolean) => void;
  shortcut?: string;
};

export type MenuRadioGroupItem = {
  items: Array<{
    description?: string;
    disabled?: boolean;
    label: string;
    value: string;
  }>;
  kind: "radio-group";
  label: string;
  onValueChange?: (value: string) => void;
  value?: string;
};

export type MenuSeparatorItem = {
  kind: "separator";
};

export type MenuItemData =
  | MenuActionItem
  | MenuCheckboxItem
  | MenuRadioGroupItem
  | MenuSeparatorItem;

export type MenuProps = {
  items: MenuItemData[];
  triggerLabel: string;
};

export function Menu({ items, triggerLabel }: MenuProps) {
  return (
    <BaseMenu.Root modal={false}>
      <BaseMenu.Trigger className={menuTrigger} render={<Button variant="secondary" />}>
        {triggerLabel}
        <ChevronDownIcon style={{ width: 16, height: 16 }} />
      </BaseMenu.Trigger>
      <BaseMenu.Portal>
        <BaseMenu.Positioner className={positioner} sideOffset={8}>
          <BaseMenu.Popup className={popup}>
            <div className={list}>
              {items.map((item, index) => {
                if (item.kind === "separator") {
                  return <BaseMenu.Separator key={`separator-${index}`} className={separator} />;
                }

                if (item.kind === "checkbox") {
                  return (
                    <BaseMenu.CheckboxItem
                      key={`${item.label}-${index}`}
                      checked={item.checked}
                      className={menuItem}
                      closeOnClick={false}
                      defaultChecked={item.defaultChecked}
                      disabled={item.disabled}
                      onCheckedChange={item.onCheckedChange}
                    >
                      <BaseMenu.CheckboxItemIndicator className={menuIndicator}>
                        <CheckIcon />
                      </BaseMenu.CheckboxItemIndicator>
                      <span className={menuItemBody}>
                        <span className={menuItemLabel}>{item.label}</span>
                        {item.description ? (
                          <span className={menuItemDescription}>{item.description}</span>
                        ) : null}
                      </span>
                      {item.shortcut ? <span className={menuShortcut}>{item.shortcut}</span> : null}
                    </BaseMenu.CheckboxItem>
                  );
                }

                if (item.kind === "radio-group") {
                  return (
                    <BaseMenu.RadioGroup
                      key={`${item.label}-${index}`}
                      onValueChange={item.onValueChange}
                      value={item.value}
                    >
                      <BaseMenu.GroupLabel className={groupLabel}>{item.label}</BaseMenu.GroupLabel>
                      {item.items.map((radioItem) => (
                        <BaseMenu.RadioItem
                          key={radioItem.value}
                          className={menuItem}
                          closeOnClick
                          disabled={radioItem.disabled}
                          value={radioItem.value}
                        >
                          <BaseMenu.RadioItemIndicator className={menuIndicator}>
                            <CircleIcon />
                          </BaseMenu.RadioItemIndicator>
                          <span className={menuItemBody}>
                            <span className={menuItemLabel}>{radioItem.label}</span>
                            {radioItem.description ? (
                              <span className={menuItemDescription}>{radioItem.description}</span>
                            ) : null}
                          </span>
                          <span />
                        </BaseMenu.RadioItem>
                      ))}
                    </BaseMenu.RadioGroup>
                  );
                }

                return (
                  <BaseMenu.Item
                    key={`${item.label}-${index}`}
                    className={menuItem}
                    closeOnClick
                    disabled={item.disabled}
                    onClick={item.onSelect}
                  >
                    <span />
                    <span className={menuItemBody}>
                      <span className={menuItemLabel}>{item.label}</span>
                      {item.description ? (
                        <span className={menuItemDescription}>{item.description}</span>
                      ) : null}
                    </span>
                    {item.shortcut ? <span className={menuShortcut}>{item.shortcut}</span> : null}
                  </BaseMenu.Item>
                );
              })}
            </div>
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
}
