'use client'
import { ReactNode, MouseEventHandler } from "react";

export default function Button({
  children,
  variant,
  rounded,
  onClick,
  size = "md",
  disabled = false,
  ...props
}: ButtonProps) {
  let className = "";

  switch (variant) {
    case "primary":
      className = "bg-[#EEB8BC] text-white";
      break;

    case "secondary":
      className = "bg-[#D6A836] text-white";
      break;

    case "terciary":
      className = "bg-[#7C969D] text-white";
      break;

    case "mono":
      className = "bg-white text-black";
      break;

    case "neutra":
      className = "bg-[#7C969D] text-white";
      break;

    default:
      className = "bg-[#E3E3E3] text-[#515151]";
      break;
  }

  switch (size) {
    case "md":
      className = className + " py-2 px-6";
      break;
    case "sm":
      className = className + " py-1 px-2";
      break;
  }

  function getRounded() {
    switch (rounded) {
      case "sm":
        return 4;

      case "md":
        return 8;

      case "lg":
        return 12;

      case "xl":
        return 22;
    }
  }

  return (
    <button
      className={`flex justify-center items-center text-center w-fit select-none ${className} ${props.className}`}
      style={{
        borderRadius: getRounded(),
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={disabled ? () => {} : onClick}
      type={props.type || "submit"}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

interface ButtonProps {
  children?: ReactNode;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "terciary"
    | "mono"
    | "neutra";
  rounded?: "sm" | "md" | "lg" | "xl";
  size?: "sm" | "md";
  className?: string;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
}
