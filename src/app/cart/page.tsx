/* eslint-disable @next/next/no-img-element */
import { DM_Serif_Display } from "next/font/google";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Trash2 } from "lucide-react";
import formatCurrency from "@/utils/format-currency";
import { useEffect, useState } from "react";
import api from "@/services/api";
import GetCartItemsDto from "@/types/dtos/product/get-cart-items-dto";
import calcDiscount from "@/utils/calc-discount";
import Link from "next/link";
import Token from "@/utils/token";
import { useRouter } from "next/navigation";
import useCart from "./hooks/useCart";
import { GetCartOutput } from "@/api/product/outputs/get-cart-output";
import RemoveProduct from "./components/RemoveProduct";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Cart() {
  const { cart } = await useCart();

  const calcFinalPrice = (item: GetCartOutput[0]): number => {
    const quantity = item.quantity;
    const price = item.product.price;
    const discount = item.product.discount;

    if (discount) {
      return calcDiscount(discount, price * quantity);
    }

    return price * quantity;
  };

  return (
    <div>
      <Header />
      <div className="bg-[#F1F1F1] px-12 py-8">
        <div className="flex gap-6 items-center">
          <b className="text-2xl" style={{ ...dmSerifDisplay.style }}>
            Sacola de Compras
          </b>
          <Button rounded="md" variant="primary">
            {cart.length} {cart.length > 1 ? "items" : "item"}
          </Button>
        </div>
        <div className="flex max-lg:flex-col gap-4 mt-8">
          {/* Desktop */}
          <div className="flex-1 max-lg:hidden">
            <div className="flex gap-3 flex-1 text-[#7C969D] px-4 h-8 max-lg:hidden">
              <span className="flex-1">Produto</span>
              <span className="w-32">Quantidade</span>
              <span className="w-24">Preço</span>
              <span className="w-10"></span>
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 bg-white p-4 rounded-md shadow-md"
              >
                <div>
                  <img
                    src={item.product.images.find((i) => i.main)?.url as string}
                    alt=""
                    className="w-32 rounded-md"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <b className="mb-6">{item.product.subtitle}</b>
                  <span>
                    Cor: <b>{item.color.name}</b>
                  </span>
                  <span>
                    Tamanho: <b>{item.size.name}</b>
                  </span>
                </div>
                {/* todo: criar endpoint para adicionar e remover quantidade */}
                <div className="flex gap-2 w-32 h-fit">
                  <span className="bg-zinc-200 h-8 w-8 flex items-center justify-center rounded-md cursor-pointer">
                    -
                  </span>
                  <input
                    type="text"
                    value={item.quantity}
                    className="w-8 h-8 text-center"
                  />
                  <span className="bg-zinc-200 h-8 w-8 flex items-center justify-center rounded-md cursor-pointer">
                    +
                  </span>
                </div>
                <div className="w-24">
                  {formatCurrency(calcFinalPrice(item))}
                </div>
                <RemoveProduct productId={item.productId} />
              </div>
            ))}
          </div>
          {/* Mobile */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 lg:hidden bg-white rounded-md shadow-md p-4"
            >
              <div>
                <img
                  src={item.product.images.find((i) => i.main)?.url as string}
                  alt=""
                  className="w-32 rounded-md"
                />
              </div>
              <div className="flex-1 flex flex-col">
                {" "}
                <b className="mb-6">{item.product.subtitle}</b>
                <span>
                  <span className="text-[#7C969D]">Cor</span>:{" "}
                  <b>{item.color.name}</b>
                </span>
                <span>
                  <span className="text-[#7C969D]">Tamanho</span>:{" "}
                  <b>{item.size.name}</b>
                </span>
                <b className="my-2">{formatCurrency(calcFinalPrice(item))}</b>
                <div className="flex gap-2 w-32 items-center">
                  <span className="text-[#7C969D]">Quantidade:</span>
                  <div className="flex gap-2 w-32 h-fit">
                    <span className="bg-zinc-200 h-8 w-8 flex items-center justify-center rounded-md cursor-pointer">
                      -
                    </span>
                    <input
                      type="text"
                      value={item.quantity}
                      className="w-8 h-8 text-center"
                    />
                    <span className="bg-zinc-200 h-8 w-8 flex items-center justify-center rounded-md cursor-pointer">
                      +
                    </span>
                  </div>
                </div>
              </div>
              <RemoveProduct productId={item.productId} />
            </div>
          ))}

          <div className="bg-white w-64 p-6 lg:mt-8 max-lg:w-full rounded-md shadow-md">
            <span className="text-[#7C7C7C]">Resumo da Compra</span>
            <div className="flex justify-between mt-4">
              <span>
                {cart.length} {cart.length > 1 ? "produtos" : "produto"}
              </span>
              <span>
                {formatCurrency(
                  cart.reduce((prev, item) => prev + calcFinalPrice(item), 0)
                )}
              </span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <b>Total</b>
              <b>
                {formatCurrency(
                  cart.reduce((prev, item) => prev + calcFinalPrice(item), 0)
                )}
              </b>
            </div>
            <Button
              variant="terciary"
              rounded="md"
              className="w-full my-4"
              // onClick={() => route.push("/delivery")}
            >
              Continuar
            </Button>
            <Link
              href="/products"
              className="text-[#7C969D] text-center w-full block"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
