import { ReactNode } from "react";

export default function Button({ children, variant, ...props }: ButtonProps) {
  let className = "";

  switch (variant) {
    case "primary":
      className = "bg-[#F8CCD2] text-white";
      break;

    case "secondary":
      className = "bg-[#D6A836] text-white";
      break;

    default:
      className = "bg-[#E3E3E3] text-[#515151]";
      break;
  }

  return (
    <a className={`py-2 px-6 w-fit block ${className} ${props.className}`}>
      {children}
    </a>
  );
}

interface ButtonProps {
  children?: ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}
