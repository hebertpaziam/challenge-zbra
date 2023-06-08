"use client";

import React, { ReactNode } from "react";
import "./ActionButton.styles.scss";

export type ActionButtonProps = {
  type: "submit" | "button";
  disabled?: boolean;
  children: ReactNode;
};

export default function ActionButton({
  type = "button",
  disabled,
  children,
}: ActionButtonProps) {
  return (
    <button className="action-button" type={type} disabled={disabled}>
      {children}
    </button>
  );
}
