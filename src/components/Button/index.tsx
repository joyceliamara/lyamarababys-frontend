import { ReactNode } from "react";

export default function Button({
  children,
  variant,
  rounded,
  ...props
}: ButtonProps) {
  let className = "";

  switch (variant) {
    case "primary":
      className = "bg-[#F8CCD2] text-white";
      break;

    case "secondary":
      className = "bg-[#D6A836] text-white";
      break;

    case "terciary":
      className = "bg-[#7C969D] text-white";
      break;

    default:
      className = "bg-[#E3E3E3] text-[#515151]";
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
    }
  }

  return (
    <a
      className={`flex justify-center items-center py-2 px-6 w-fit cursor-pointer ${className} ${props.className}`}
      style={{
        borderRadius: getRounded(),
      }}
    >
      {children}
    </a>
  );
}

interface ButtonProps {
  children?: ReactNode;
  variant?: "default" | "primary" | "secondary" | "terciary";
  rounded?: "sm" | "md" | "lg";
  className?: string;
}
