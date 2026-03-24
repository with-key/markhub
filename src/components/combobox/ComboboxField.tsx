import { Combobox } from "@/components/shared/base-ui";
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

export type ComboboxFieldItem = {
  description?: string;
  keywords?: string[];
  label: string;
  value: string;
};

export type ComboboxFieldProps = {
  defaultValue?: string | null;
  description?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  items: ComboboxFieldItem[];
  label: string;
  name?: string;
  onValueChange?: (value: string | null) => void;
  placeholder?: string;
  required?: boolean;
  value?: string | null;
};

export function ComboboxField({
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
}: ComboboxFieldProps) {
  const itemMap = new Map(items.map((item) => [item.value, item]));

  return (
    <Combobox.Root
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
        <Combobox.Label className={fieldLabel}>
          {label}
          {required ? " *" : null}
        </Combobox.Label>
        {description ? <p className={fieldDescription}>{description}</p> : null}

        <Combobox.InputGroup className={inputGroup}>
          <Combobox.Input className={input} placeholder={placeholder} />
          <Combobox.Trigger className={iconButton} aria-label={`${label} 열기`}>
            <ChevronDownIcon className={icon} />
          </Combobox.Trigger>
        </Combobox.InputGroup>

        {error ? <p className={fieldError}>{error}</p> : null}
      </div>

      <Combobox.Portal>
        <Combobox.Positioner className={positioner} sideOffset={8}>
          <Combobox.Popup className={popup}>
            <Combobox.List className={list}>
              {items.map((item) => (
                <Combobox.Item key={item.value} className={listItem} value={item.value}>
                  <span className={listItemBody}>
                    <span className={listItemLabel}>{item.label}</span>
                    {item.description ? (
                      <span className={listItemDescription}>{item.description}</span>
                    ) : null}
                  </span>
                  <Combobox.ItemIndicator className={listItemIndicator}>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.List>
            <Combobox.Empty className={emptyState}>조건에 맞는 결과가 없습니다.</Combobox.Empty>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}
