import { Checkbox as BaseCheckbox } from "@/components/shared/base-ui";
import {
  choiceContent,
  choiceDescription,
  choiceLabel,
  choiceRoot,
  choiceTitle,
  fieldError,
} from "@/components/shared/field.css";
import { CheckIcon, MinusIcon } from "@/components/shared/icons";

import { checkbox, indicator } from "./CheckboxField.css";

export type CheckboxProps = Omit<BaseCheckbox.Root.Props, "children" | "className"> & {
  description?: string;
  error?: string;
  label: string;
};

export function Checkbox({
  checked,
  defaultChecked,
  description,
  disabled,
  error,
  indeterminate,
  label,
  name,
  onCheckedChange,
  required,
}: CheckboxProps) {
  return (
    <div className={choiceRoot}>
      <label className={choiceLabel}>
        <BaseCheckbox.Root
          checked={checked}
          className={checkbox}
          defaultChecked={defaultChecked}
          disabled={disabled}
          indeterminate={indeterminate}
          name={name}
          onCheckedChange={onCheckedChange}
          required={required}
        >
          <BaseCheckbox.Indicator className={indicator}>
            {indeterminate ? <MinusIcon /> : <CheckIcon />}
          </BaseCheckbox.Indicator>
        </BaseCheckbox.Root>

        <span className={choiceContent}>
          <span className={choiceTitle}>{label}</span>
          {description ? <span className={choiceDescription}>{description}</span> : null}
        </span>
      </label>
      {error ? <p className={fieldError}>{error}</p> : null}
    </div>
  );
}
