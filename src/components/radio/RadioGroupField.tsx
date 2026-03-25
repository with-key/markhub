import { Radio as BaseRadio, RadioGroup as BaseRadioGroup } from "@/components/shared/base-ui";
import {
  choiceContent,
  choiceDescription,
  choiceTitle,
  fieldDescription,
  fieldError,
  fieldLabel,
  fieldRoot,
  optionCard,
  optionGroup,
} from "@/components/shared/field.css";
import { CircleIcon } from "@/components/shared/icons";

import { indicator, radio } from "./RadioGroupField.css";

export type RadioGroupOption = {
  description?: string;
  label: string;
  value: string;
};

export type RadioGroupProps = Omit<BaseRadioGroup.Props<string>, "children"> & {
  description?: string;
  error?: string;
  label: string;
  options: RadioGroupOption[];
};

export function RadioGroup({
  defaultValue,
  description,
  disabled,
  error,
  label,
  name,
  onValueChange,
  options,
  required,
  value,
}: RadioGroupProps) {
  return (
    <div className={fieldRoot}>
      <p className={fieldLabel}>
        {label}
        {required ? " *" : null}
      </p>
      {description ? <p className={fieldDescription}>{description}</p> : null}

      <BaseRadioGroup
        defaultValue={defaultValue}
        disabled={disabled}
        name={name}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        <div className={optionGroup}>
          {options.map((option) => (
            <label key={option.value} className={optionCard}>
              <BaseRadio.Root className={radio} value={option.value}>
                <BaseRadio.Indicator className={indicator}>
                  <CircleIcon />
                </BaseRadio.Indicator>
              </BaseRadio.Root>

              <span className={choiceContent}>
                <span className={choiceTitle}>{option.label}</span>
                {option.description ? (
                  <span className={choiceDescription}>{option.description}</span>
                ) : null}
              </span>
            </label>
          ))}
        </div>
      </BaseRadioGroup>

      {error ? <p className={fieldError}>{error}</p> : null}
    </div>
  );
}
