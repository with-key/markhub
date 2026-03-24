import { Switch } from "@/components/shared/base-ui";
import {
  choiceContent,
  choiceDescription,
  choiceLabel,
  choiceRoot,
  choiceTitle,
  fieldError,
} from "@/components/shared/field.css";

import { switchRoot, switchThumb } from "./SwitchField.css";

export type SwitchFieldProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  error?: string;
  label: string;
  name?: string;
  onCheckedChange?: (checked: boolean) => void;
  required?: boolean;
};

export function SwitchField({
  checked,
  defaultChecked,
  description,
  disabled,
  error,
  label,
  name,
  onCheckedChange,
  required,
}: SwitchFieldProps) {
  return (
    <div className={choiceRoot}>
      <label className={choiceLabel}>
        <Switch.Root
          checked={checked}
          className={switchRoot}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          onCheckedChange={onCheckedChange}
          required={required}
        >
          <Switch.Thumb className={switchThumb} />
        </Switch.Root>

        <span className={choiceContent}>
          <span className={choiceTitle}>{label}</span>
          {description ? <span className={choiceDescription}>{description}</span> : null}
        </span>
      </label>
      {error ? <p className={fieldError}>{error}</p> : null}
    </div>
  );
}
