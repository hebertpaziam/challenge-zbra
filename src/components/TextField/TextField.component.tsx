"use client";

import "./TextField.styles.scss";

export type TextFieldProps = {
  id: string;
  error?: string;
  label: string;
  placeholder: string;
  success?: string;
  type: "text" | "email" | "number";
  value: string | number;
  handleBlur: any;
  handleChange: any;
};

export default function TextField({
  id,
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
        `${!error && !!success ? " -success" : ""}`
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
