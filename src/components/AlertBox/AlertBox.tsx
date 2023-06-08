"use client";

import "./AlertBox.styles.scss";
import { IResponse } from "@/interfaces/response.interface";

export type AlertBoxProps = {
  response: IResponse;
};

export default function AlertBox({ response }: AlertBoxProps) {
  return (
    <div className={`alert-box ${!!response?.ok ? "-success" : "-error"}`}>
      {response?.message}
    </div>
  );
}
