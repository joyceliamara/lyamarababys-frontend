/* eslint-disable @next/next/no-img-element */
import { DM_Serif_Display } from "next/font/google";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import products from "./products.json";
import { Trash2 } from "lucide-react";
import formatCurrency from "@/utils/format-currency";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Delivery() {
  return (
    <div>
      <Header />
      <div className="bg-[#F1F1F1] px-12 py-8">
        <div className="flex gap-6 items-center">
          <b className="text-2xl" style={{ ...dmSerifDisplay.style }}>
            Escolha a forma de entrega
          </b>
        </div>
        <div className="flex max-lg:flex-col gap-4 mt-8">
          {/* Desktop */}
          <div className="flex-1 max-lg:hidden">
            <AddressAndShipping />
            <div className="flex justify-end ">
              <Button variant="terciary" rounded="md" className="w-fit mt-4">
                Continuar
              </Button>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex gap-4 lg:hidden bg-white rounded-md">
            <AddressAndShipping />
          </div>

          <div className="bg-white w-64 py-4 px-6 max-lg:w-full rounded-md shadow-md">
            <span className="text-[#7C7C7C]">Resumo da Compra</span>
            <div className="flex justify-between mt-4">
              <span>1 produto</span>
              <span>{formatCurrency(products[0].price)}</span>
            </div>
            <div className="flex justify-between mt-4">
              <span>Frete</span>
              <span>{formatCurrency(18.9)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <b>Total</b>
              <b>{formatCurrency(products[0].price + 18.9)}</b>
            </div>
          </div>

          <Button
            variant="terciary"
            rounded="md"
            className="w-full mt-4 lg:hidden"
          >
            Continuar
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AddressAndShipping() {
  return (
    <form className="bg-white rounded-md shadow-md h-fit">
      <div className="border-b p-4">
        <div className="lg:flex justify-between text-[#303030]">
          <div>
            <input type="radio" className="mr-2" checked={true} />
            <b>Enviar neste endereço</b>
          </div>
          <b className="max-lg:hidden">R$18,90</b>
        </div>
        <span className="block max-lg:my-2">
          Rua Marquês do Herval, 4520 - Apartamento 1203 - Porto Alegre
        </span>
        <b className="lg:hidden block">R$18,90</b>
      </div>
      <div className="p-4">
        <span>Editar ou escolher outro endereço</span>
      </div>
    </form>
  );
}
