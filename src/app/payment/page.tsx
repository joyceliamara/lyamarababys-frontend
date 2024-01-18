"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { DM_Serif_Display } from "next/font/google";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import products from "./products.json";
import formatCurrency from "@/utils/format-currency";
import PixIcon from "@/assets/icons/pix.svg";
import PaymentSlip from "@/assets/icons/payment-slip.svg";
import CreditCard from "@/assets/icons/credit-card.svg";
import DebitCard from "@/assets/icons/debit-card.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import GetCartItemsDto from "@/types/dtos/product/get-cart-items-dto";
import Token from "@/utils/token";
import api from "@/services/api";
import calcDiscount from "@/utils/calc-discount";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Payment() {
  const [items, setItems] = useState<GetCartItemsDto[]>([]);

  const fetchItems = async () => {
    try {
      const token = Token.get();

      if (!token) throw new Error("Token not exists");

      const { data } = await api.get<GetCartItemsDto[]>("product/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const calcFinalPrice = (): number => {
    return items.reduce((prev, item) => {
      const quantity = item.quantity;
      const price = item.product.price;
      const discount = item.product.discount;

      if (discount) {
        return prev + calcDiscount(discount, price * quantity);
      }
      return prev + price * quantity;
    }, 0);
  };

  return (
    <div>
      <Header />
      <div className="bg-[#F1F1F1] px-12 py-8">
        <div className="flex gap-6 items-center">
          <b className="text-2xl" style={{ ...dmSerifDisplay.style }}>
            Como você prefere pagar?
          </b>
        </div>
        <div className="flex max-lg:flex-col gap-4 mt-8">
          {/* Desktop */}
          <div className="flex-1 max-lg:hidden">
            <PaymentMethods />
          </div>

          {/* Mobile */}
          <div className="flex gap-4 lg:hidden bg-white rounded-md">
            <PaymentMethods />
          </div>

          <div className="flex flex-col">
            <div className="bg-white w-64 py-4 px-6 max-lg:w-full rounded-md shadow-md">
              <span className="text-[#7C7C7C]">Resumo da Compra</span>
              <div className="flex justify-between mt-4">
                <span>
                  {items.length} {items.length > 1 ? "produtos" : "produto"}
                </span>
                <span>{formatCurrency(calcFinalPrice())}</span>
              </div>
              <div className="flex justify-between mt-4">
                <span>Frete</span>
                <span>{formatCurrency(18.9)}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <b>Total</b>
                <b>{formatCurrency(calcFinalPrice() + 18.9)}</b>
              </div>
            </div>
            <div className="flex-1" />
            <Button variant="terciary" rounded="md" className="w-full mt-4">
              Continuar
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function PaymentMethods() {
  return (
    <div className="bg-white rounded-md shadow-md h-fit w-full overflow-hidden">
      <div className="p-4 border-l-8 border-[#7C969D]">
        <div className="flex gap-2 items-center text-[#303030]">
          <input type="radio" className="mr-2" checked={true} />
          <div className="bg-[#F2F2F2] p-2 rounded-full">
            <Image src={PixIcon} width={20} height={20} alt="" />
          </div>
          <span>Pix</span>
        </div>
      </div>
      <div className="p-4 border-l-8 border-transparent">
        <div className="flex gap-2 items-center text-[#303030]">
          <input type="radio" className="mr-2" checked={false} />
          <div className="bg-[#F2F2F2] p-2 rounded-full">
            <Image src={PaymentSlip} width={20} height={20} alt="" />
          </div>
          <span>Boleto</span>
        </div>
      </div>
      <div className="p-4 border-l-8 border-transparent">
        <div className="flex gap-2 items-center text-[#303030]">
          <input type="radio" className="mr-2" checked={false} />
          <div className="bg-[#F2F2F2] p-2 rounded-full">
            <Image src={CreditCard} width={20} height={20} alt="" />
          </div>
          <span>Cartão de crédito</span>
        </div>
      </div>
      <div className="p-4 border-l-8 border-transparent">
        <div className="flex gap-2 items-center text-[#303030]">
          <input type="radio" className="mr-2" checked={false} />
          <div className="bg-[#F2F2F2] p-2 rounded-full">
            <Image src={DebitCard} width={20} height={20} alt="" />
          </div>
          <span>Cartão de débito</span>
        </div>
      </div>
    </div>
  );
}
