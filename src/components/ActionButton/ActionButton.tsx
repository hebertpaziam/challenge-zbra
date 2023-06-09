"use client";

import React, { MouseEventHandler, ReactNode } from "react";
import "./ActionButton.styles.scss";

export type ActionButtonProps = {
  type: "submit" | "button";
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
