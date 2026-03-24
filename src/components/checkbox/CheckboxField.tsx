import { Checkbox } from "@/components/shared/base-ui";
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

export type CheckboxFieldProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  error?: string;
  indeterminate?: boolean;
  label: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  required?: boolean;
};

export function CheckboxField({
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
}: CheckboxFieldProps) {
  return (
    <div className={choiceRoot}>
      <label className={choiceLabel}>
        <Checkbox.Root
          checked={checked}
          className={checkbox}
          defaultChecked={defaultChecked}
          disabled={disabled}
          indeterminate={indeterminate}
          name={name}
          onCheckedChange={onCheckedChange}
          required={required}
        >
          <Checkbox.Indicator className={indicator}>
            {indeterminate ? <MinusIcon /> : <CheckIcon />}
          </Checkbox.Indicator>
        </Checkbox.Root>

        <span className={choiceContent}>
          <span className={choiceTitle}>{label}</span>
          {description ? <span className={choiceDescription}>{description}</span> : null}
        </span>
      </label>
      {error ? <p className={fieldError}>{error}</p> : null}
    </div>
  );
}
