import { ChangeEvent } from "react";

export default function Input({
  label,
  className,
  variant = "default",
  ...props
}: InputProps) {
  let inputClassName = "";

  switch (variant) {
    case "default":
      inputClassName = "border-2 border-[#B0B0B0] rounded-md";
      break;
    case "lightning":
      inputClassName =
        "border-2 border-white bg-white/25 placeholder-white text-white rounded-md";
      break;
    case "filled":
      inputClassName = "border-b border-[#B0B0B0]";
      break;
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={props.id} className="font-bold text-[#303030]">
          {label}
        </label>
      )}
      <input
        {...props}
        id="user"
        className={`pl-2 p-1 inline-flex ${inputClassName}`}
      />
    </div>
  );
}

interface InputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  id?: string;
  className?: string;
  variant?: "default" | "lightning" | "filled";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
