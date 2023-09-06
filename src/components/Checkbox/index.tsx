"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function Checkbox() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`w-5 h-5 border-2 border-black rounded-sm inline-flex cursor-pointer ${
        selected ? "bg-black" : "bg-transparent"
      }`}
      onClick={() => setSelected((prev) => !prev)}
    >
      {selected && <Check size={16} color="white" />}
    </div>
  );
}
