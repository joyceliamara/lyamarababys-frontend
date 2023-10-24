"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function Checkbox({
  color = "black",
  iconColor,
  onTap,
}: CheckboxProps) {
  const [selected, setSelected] = useState(false);

  // todo: pensar numa estratégia melhor para compartilhar o estado de selected

  return (
    <div
      className="w-5 h-5 border-2 rounded-sm inline-flex cursor-pointer"
      style={{
        borderColor: color,
        background: selected ? color : "transparent",
      }}
      onClick={() => {
        setSelected((prev) => !prev);

        if (onTap) {
          onTap();
        }
      }}
    >
      {selected && <Check size={16} color={iconColor ? iconColor : "white"} />}
    </div>
  );
}

interface CheckboxProps {
  color?: string;
  iconColor?: string;
  onTap?: () => void;
}
