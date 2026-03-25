import type { TextareaHTMLAttributes } from "react";

import { Field } from "@/components/shared/base-ui";
import {
  fieldDescription,
  fieldError,
  fieldLabel,
  fieldRoot,
} from "@/components/shared/field.css";

import { textArea } from "./TextAreaField.css";

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
  description?: string;
  error?: string;
  label: string;
}

export function TextArea({
  description,
  error,
  id,
  label,
  name,
  required,
  ...props
}: TextAreaProps) {
  return (
    <Field.Root className={fieldRoot} name={name}>
      <Field.Label className={fieldLabel}>
        {label}
        {required ? " *" : null}
      </Field.Label>
      {description ? <Field.Description className={fieldDescription}>{description}</Field.Description> : null}
      <textarea
        aria-label={label}
        className={textArea}
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
