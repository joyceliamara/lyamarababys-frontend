/* eslint-disable @next/next/no-img-element */
import formatCurrency from "@/utils/format-currency";
import Image from "next/image";

export default function ProductCard({
  image,
  title,
  subtitle,
  price,
  priceWithDiscount,
}: ProductCardProps) {
  return (
    <div className="max-w-[261px]">
      <img src={image} alt="" />
      <div className="flex flex-col gap-2 mt-4">
        <b className="text-xl">{title}</b>
        <span className="text-[#B0B0B0] text-xl">{subtitle}</span>
        <div className="flex gap-4 text-xl">
          <span
            className={priceWithDiscount ? "text-[#B0B0B0] line-through" : ""}
          >
            {formatCurrency(price)}
          </span>
          {priceWithDiscount && (
            <span>{formatCurrency(priceWithDiscount)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  price: number;
  priceWithDiscount?: number;
}
