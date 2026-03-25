import { Select as BaseSelect } from "@/components/shared/base-ui";
import { SelectPrimitive } from "./Select";
import {
  emptyState,
  icon,
  list,
  listItem,
  listItemBody,
  listItemDescription,
  listItemIndicator,
  listItemLabel,
  placeholder,
  popup,
  positioner,
  trigger,
  value,
} from "@/components/shared/control.css";
import {
  fieldDescription,
  fieldError,
  fieldLabel,
  fieldRoot,
} from "@/components/shared/field.css";
import { CheckIcon, ChevronDownIcon } from "@/components/shared/icons";

export type SelectItem = {
  description?: string;
  label: string;
  value: string;
};

export type SelectProps = Omit<
  BaseSelect.Root.Props<string | null>,
  "children" | "className" | "items"
> & {
  description?: string;
  error?: string;
  items: SelectItem[];
  label: string;
  placeholder?: string;
};

export function Select({
  defaultValue,
  description,
  disabled,
  error,
  id,
  items,
  label,
  name,
  onValueChange,
  placeholder: placeholderText = "항목을 선택하세요",
  required,
  value: selectedValue,
}: SelectProps) {
  const itemLabels = Object.fromEntries(items.map((item) => [item.value, item.label]));

  return (
    <SelectPrimitive.Root
      defaultValue={defaultValue}
      disabled={disabled}
      id={id}
      items={itemLabels}
      name={name}
      onValueChange={onValueChange}
      required={required}
      value={selectedValue}
    >
      <div className={fieldRoot}>
        <SelectPrimitive.Label className={fieldLabel}>
          {label}
          {required ? " *" : null}
        </SelectPrimitive.Label>
        {description ? <p className={fieldDescription}>{description}</p> : null}
        <SelectPrimitive.Trigger className={trigger}>
          <SelectPrimitive.Value
            className={value}
            placeholder={<span className={placeholder}>{placeholderText}</span>}
          />
          <SelectPrimitive.Icon>
            <ChevronDownIcon className={icon} />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        {error ? <p className={fieldError}>{error}</p> : null}
      </div>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner className={positioner} sideOffset={8}>
          <SelectPrimitive.Popup className={popup}>
            <SelectPrimitive.List className={list}>
              {items.length === 0 ? <div className={emptyState}>선택 가능한 항목이 없습니다.</div> : null}
              {items.map((item) => (
                <SelectPrimitive.Item key={item.value} className={listItem} value={item.value}>
                  <span className={listItemBody}>
                    <span className={listItemLabel}>{item.label}</span>
                    {item.description ? (
                      <span className={listItemDescription}>{item.description}</span>
                    ) : null}
                  </span>
                  <SelectPrimitive.ItemIndicator className={listItemIndicator}>
                    <CheckIcon />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.List>
          </SelectPrimitive.Popup>
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
