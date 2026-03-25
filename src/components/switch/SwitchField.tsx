import { Switch as BaseSwitch } from "@/components/shared/base-ui";
import {
  choiceContent,
  choiceDescription,
  choiceLabel,
  choiceRoot,
  choiceTitle,
  fieldError,
} from "@/components/shared/field.css";

import { switchRoot, switchThumb } from "./SwitchField.css";

export type SwitchProps = Omit<BaseSwitch.Root.Props, "children" | "className"> & {
  description?: string;
  error?: string;
  label: string;
};

export function Switch({
  checked,
  defaultChecked,
  description,
  disabled,
  error,
  label,
  name,
  onCheckedChange,
  required,
}: SwitchProps) {
  return (
    <div className={choiceRoot}>
      <label className={choiceLabel}>
        <BaseSwitch.Root
          checked={checked}
          className={switchRoot}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          onCheckedChange={onCheckedChange}
          required={required}
        >
          <BaseSwitch.Thumb className={switchThumb} />
        </BaseSwitch.Root>

        <span className={choiceContent}>
          <span className={choiceTitle}>{label}</span>
          {description ? <span className={choiceDescription}>{description}</span> : null}
        </span>
      </label>
      {error ? <p className={fieldError}>{error}</p> : null}
    </div>
  );
}
