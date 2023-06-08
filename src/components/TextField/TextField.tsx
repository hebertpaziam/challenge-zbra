"use client";

import "./TextField.styles.scss";

export type TextFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type: "text" | "email" | "number";
  value: string | number;
  disabled?: boolean;
  error?: string;
  success?: string;
  handleBlur: any;
  handleChange: any;
};

export default function TextField({
  id,
  disabled,
  error,
  label,
  placeholder,
  success,
  type,
  value,
  handleBlur,
  handleChange,
}: TextFieldProps) {
  return (
    <div
      className={
        "text-field" +
        `${!!error ? " -error" : ""}` +
        `${!error && !!success ? " -success" : ""}` +
        `${disabled ? " -disabled" : ""}`
      }
    >
      <div className="control">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>
      <div className="feedback">{error || success}</div>
    </div>
  );
}
