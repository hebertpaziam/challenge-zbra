"use client";
import { ChangeEventHandler } from "react";

interface TextFieldProps {
  placeholder: string;
  type: "text" | "password";
  ariaLabel: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function TextField({
  placeholder,
  type,
  ariaLabel,
  onChange,
}: TextFieldProps) {
  return (
    <div className="w-full border border-gray-900 rounded">
      <input
        className="appearance-none bg-transparent border-none w-full p-2 leading-tight focus:outline-none"
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        onChange={onChange}
      />
    </div>
  );
}
