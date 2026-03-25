import { Combobox as BaseCombobox } from "@/components/shared/base-ui";
import { ComboboxPrimitive } from "./Combobox";
import {
  emptyState,
  icon,
  iconButton,
  input,
  inputGroup,
  list,
  listItem,
  listItemBody,
  listItemDescription,
  listItemIndicator,
  listItemLabel,
  popup,
  positioner,
} from "@/components/shared/control.css";
import {
  fieldDescription,
  fieldError,
  fieldLabel,
  fieldRoot,
} from "@/components/shared/field.css";
import { CheckIcon, ChevronDownIcon } from "@/components/shared/icons";

export type ComboboxItem = {
  description?: string;
  keywords?: string[];
  label: string;
  value: string;
};

export type ComboboxProps = Omit<
  BaseCombobox.Root.Props<string | null>,
  "children" | "className" | "items" | "itemToStringLabel" | "filter"
> & {
  description?: string;
  error?: string;
  items: ComboboxItem[];
  label: string;
  placeholder?: string;
};

export function Combobox({
  defaultValue,
  description,
  disabled,
  error,
  id,
  items,
  label,
  name,
  onValueChange,
  placeholder = "검색 후 바로 선택하세요",
  required,
  value,
}: ComboboxProps) {
  const itemMap = new Map(items.map((item) => [item.value, item]));

  return (
    <ComboboxPrimitive.Root
      autoHighlight
      defaultValue={defaultValue}
      disabled={disabled}
      filter={(itemValue, query) => {
        const item = itemMap.get(itemValue);
        if (!item) {
          return false;
        }

        const source = [item.label, item.description, ...(item.keywords ?? [])]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase();

        return source.includes(query.toLocaleLowerCase());
      }}
      id={id}
      itemToStringLabel={(itemValue) => itemMap.get(itemValue)?.label ?? itemValue}
      items={items.map((item) => item.value)}
      name={name}
      onValueChange={onValueChange}
      required={required}
      value={value}
    >
      <div className={fieldRoot}>
        <ComboboxPrimitive.Label className={fieldLabel}>
          {label}
          {required ? " *" : null}
        </ComboboxPrimitive.Label>
        {description ? <p className={fieldDescription}>{description}</p> : null}

        <ComboboxPrimitive.InputGroup className={inputGroup}>
          <ComboboxPrimitive.Input className={input} placeholder={placeholder} />
          <ComboboxPrimitive.Trigger className={iconButton} aria-label={`${label} 열기`}>
            <ChevronDownIcon className={icon} />
          </ComboboxPrimitive.Trigger>
        </ComboboxPrimitive.InputGroup>

        {error ? <p className={fieldError}>{error}</p> : null}
      </div>

      <ComboboxPrimitive.Portal>
        <ComboboxPrimitive.Positioner className={positioner} sideOffset={8}>
          <ComboboxPrimitive.Popup className={popup}>
            <ComboboxPrimitive.List className={list}>
              {items.map((item) => (
                <ComboboxPrimitive.Item key={item.value} className={listItem} value={item.value}>
                  <span className={listItemBody}>
                    <span className={listItemLabel}>{item.label}</span>
                    {item.description ? (
                      <span className={listItemDescription}>{item.description}</span>
                    ) : null}
                  </span>
                  <ComboboxPrimitive.ItemIndicator className={listItemIndicator}>
                    <CheckIcon />
                  </ComboboxPrimitive.ItemIndicator>
                </ComboboxPrimitive.Item>
              ))}
            </ComboboxPrimitive.List>
            <ComboboxPrimitive.Empty className={emptyState}>조건에 맞는 결과가 없습니다.</ComboboxPrimitive.Empty>
          </ComboboxPrimitive.Popup>
        </ComboboxPrimitive.Positioner>
      </ComboboxPrimitive.Portal>
    </ComboboxPrimitive.Root>
  );
}
