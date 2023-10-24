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
      inputClassName = "border-[#B0B0B0]";
      break;
    case "lightning":
      inputClassName = "border-white bg-white/25 placeholder-white text-white";
      break;
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor={props.id} className="font-bold">
          {label}
        </label>
      )}
      <input
        {...props}
        id="user"
        className={`border-2 pl-2 p-1 rounded-md inline-flex ${inputClassName}`}
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
  variant?: "default" | "lightning";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
