import { Select } from "@/components/shared/base-ui";
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

export type SelectFieldItem = {
  description?: string;
  label: string;
  value: string;
};

export type SelectFieldProps = {
  defaultValue?: string | null;
  description?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  items: SelectFieldItem[];
  label: string;
  name?: string;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
  required?: boolean;
  value?: string | null;
};

export function SelectField({
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
}: SelectFieldProps) {
  const itemLabels = Object.fromEntries(items.map((item) => [item.value, item.label]));

  return (
    <Select.Root
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
        <Select.Label className={fieldLabel}>
          {label}
          {required ? " *" : null}
        </Select.Label>
        {description ? <p className={fieldDescription}>{description}</p> : null}
        <Select.Trigger className={trigger}>
          <Select.Value
            className={value}
            placeholder={<span className={placeholder}>{placeholderText}</span>}
          />
          <Select.Icon>
            <ChevronDownIcon className={icon} />
          </Select.Icon>
        </Select.Trigger>
        {error ? <p className={fieldError}>{error}</p> : null}
      </div>

      <Select.Portal>
        <Select.Positioner className={positioner} sideOffset={8}>
          <Select.Popup className={popup}>
            <Select.List className={list}>
              {items.length === 0 ? <div className={emptyState}>선택 가능한 항목이 없습니다.</div> : null}
              {items.map((item) => (
                <Select.Item key={item.value} className={listItem} value={item.value}>
                  <span className={listItemBody}>
                    <span className={listItemLabel}>{item.label}</span>
                    {item.description ? (
                      <span className={listItemDescription}>{item.description}</span>
                    ) : null}
                  </span>
                  <Select.ItemIndicator className={listItemIndicator}>
                    <CheckIcon />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
