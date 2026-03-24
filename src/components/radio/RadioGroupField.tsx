import { Radio, RadioGroup } from "@/components/shared/base-ui";
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

export type RadioGroupFieldOption = {
  description?: string;
  label: string;
  value: string;
};

export type RadioGroupFieldProps = {
  defaultValue?: string;
  description?: string;
  disabled?: boolean;
  error?: string;
  label: string;
  name?: string;
  onValueChange?: (value: string) => void;
  options: RadioGroupFieldOption[];
  required?: boolean;
  value?: string;
};

export function RadioGroupField({
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
}: RadioGroupFieldProps) {
  return (
    <div className={fieldRoot}>
      <p className={fieldLabel}>
        {label}
        {required ? " *" : null}
      </p>
      {description ? <p className={fieldDescription}>{description}</p> : null}

      <RadioGroup
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
              <Radio.Root className={radio} value={option.value}>
                <Radio.Indicator className={indicator}>
                  <CircleIcon />
                </Radio.Indicator>
              </Radio.Root>

              <span className={choiceContent}>
                <span className={choiceTitle}>{option.label}</span>
                {option.description ? (
                  <span className={choiceDescription}>{option.description}</span>
                ) : null}
              </span>
            </label>
          ))}
        </div>
      </RadioGroup>

      {error ? <p className={fieldError}>{error}</p> : null}
    </div>
  );
}
