"use client";
import { Trash2 } from "lucide-react";
import useCartActions from "../../hooks/useCartActions";

export default function RemoveProduct({ productId }: RemoveProductProps) {
  const { removeProduct } = useCartActions();

  return (
    <div className="cursor-pointer" onClick={() => removeProduct(productId)}>
      <Trash2 color="#7C969D" />
    </div>
  );
}

type RemoveProductProps = {
  productId: string;
};
