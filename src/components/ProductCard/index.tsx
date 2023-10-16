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
    <div className="max-w-[261px] mx-auto">
      <img src={image} alt="" />
      <div className="flex flex-col gap-2 mt-4">
        <b className="text-xl max-sm:text-[1rem]">{title}</b>
        <span className="text-[#B0B0B0] text-xl max-sm:text-[0.9rem] max-sm: leading-5">
          {subtitle}
        </span>
        <div className="flex gap-4 text-xl max-sm:flex-col max-sm:text-sm max-sm:gap-1">
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
