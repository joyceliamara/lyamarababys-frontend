import { ReactNode } from "react";

export function Select({
  children,
  className,
  rounded,
  ...props
}: SelectProps) {
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
    <select
      {...props}
      className={`border ${className}`}
      style={{
        borderRadius: getRounded(),
      }}
    >
      {children}
    </select>
  );
}

export function Option() {}

interface SelectProps {
  children: ReactNode;
  name?: string;
  id?: string;
  className?: string;
  rounded?: "sm" | "md" | "lg";
}
