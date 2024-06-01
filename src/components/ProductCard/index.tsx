"use client";

/* eslint-disable @next/next/no-img-element */
import formatCurrency from "@/utils/format-currency";
import { useRouter } from "next/navigation";
import { useState, MouseEvent } from "react";

export default function ProductCard({
  image,
  title,
  subtitle,
  price,
  priceWithDiscount,
  onClick,
  redirect,
}: ProductCardProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    onClick?.(event);

    if (!redirect) return;

    router.push(redirect);
  };

  return (
    <div
      className={`flex-1 mx-auto rounded-lg overflow-hidden shadow-sm ${
        onClick || redirect ? "cursor-pointer" : ""
      }`}
      onClick={handleClick}
    >
      <img src={image} alt="" className="w-full" />
      <div className="flex flex-col gap-2 p-4">
        <b className="text-xl max-sm:text-[1rem]">{title}</b>
        <span className="text-[#B0B0B0] text-xl max-sm:text-[0.9rem] max-sm: leading-5">
          {subtitle}
        </span>
        <div className="flex gap-4 text-xl max-sm:flex-col max-sm:text-sm max-sm:gap-1">
          <span
            className={
              priceWithDiscount !== undefined
                ? "text-[#B0B0B0] line-through"
                : ""
            }
          >
            {formatCurrency(price)}
          </span>
          {priceWithDiscount !== undefined && (
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
  onClick?: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  redirect?: string;
}
