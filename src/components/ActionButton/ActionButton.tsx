"use client";

import React, { MouseEventHandler, ReactNode } from "react";
import "./ActionButton.styles.scss";

export type ActionButtonProps = {
  type: "submit" | "button";
  disabled?: boolean;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function ActionButton({
  type = "button",
  disabled,
  children,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      className="action-button"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
