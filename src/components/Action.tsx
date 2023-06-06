"use client";
import { MouseEventHandler, ReactNode } from "react";

interface ActionProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export default function Action({ onClick, children }: ActionProps) {
  return (
    <button
      className="w-full md:w-48
                   py-2
                   px-4
                   rounded
                   border
                   border-gray-500
                   bg-gray-200 hover:bg-gray-400
                   text-black hover:text-white
                   ease-in-out duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
