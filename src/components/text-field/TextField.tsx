import type { InputHTMLAttributes } from "react";

import { Field, Input } from "@/components/shared/base-ui";
import {
  fieldDescription,
  fieldError,
  fieldLabel,
  fieldRoot,
} from "@/components/shared/field.css";

import { fieldInput } from "./TextField.css";

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  description?: string;
  error?: string;
  label: string;
}

export function TextField({
  description,
  error,
  id,
  label,
  name,
  required,
  ...props
}: TextFieldProps) {
  return (
    <Field.Root className={fieldRoot} name={name}>
      <Field.Label className={fieldLabel}>
        {label}
        {required ? " *" : null}
      </Field.Label>
      {description ? <Field.Description className={fieldDescription}>{description}</Field.Description> : null}
      <Input
        aria-label={label}
        className={fieldInput}
        id={id}
        name={name}
        required={required}
        {...props}
      />
      {error ? (
        <Field.Error className={fieldError} match>
          {error}
        </Field.Error>
      ) : null}
    </Field.Root>
  );
}
