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

export default function Cart() {
  return (
    <div>
      <Header />
      <div className="bg-[#F1F1F1] px-12 py-8">
        <div className="flex gap-6 items-center">
          <b className="text-2xl" style={{ ...dmSerifDisplay.style }}>
            Sacola de Compras
          </b>
          <Button rounded="md" variant="primary">
            1 item
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
            <div className="flex gap-3 bg-white p-4 rounded-md shadow-md">
              <div>
                <img
                  src={products[0].image}
                  alt=""
                  className="w-32 rounded-md"
                />
              </div>
              <div className="flex flex-col flex-1">
                <b className="mb-6">{products[0].description}</b>
                <span>
                  Cor: <b>Vermelho</b>
                </span>
                <span>
                  Tamanho: <b>P</b>
                </span>
              </div>
              <div className="flex gap-2 w-32">
                <span>-</span>
                <input type="text" value="1" className="w-8 h-8 text-center" />
                <span>+</span>
              </div>
              <div className="w-24">{formatCurrency(products[0].price)}</div>
              <div className="w-10">
                <Trash2 color="#7C969D" />
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="flex gap-4 lg:hidden bg-white rounded-md shadow-md p-4">
            <div>
              <img src={products[0].image} alt="" className="w-32 rounded-md" />
            </div>
            <div className="flex-1 flex flex-col">
              {" "}
              <b className="mb-6">{products[0].description}</b>
              <span>
                <span className="text-[#7C969D]">Cor</span>: <b>Vermelho</b>
              </span>
              <span>
                <span className="text-[#7C969D]">Tamanho</span>: <b>P</b>
              </span>
              <b className="my-2">{formatCurrency(products[0].price)}</b>
              <div className="flex gap-2 w-32 items-center">
                <span className="text-[#7C969D]">Quantidade:</span>
                <div className="flex items-center">
                  <span className="px-1 cursor-pointer">-</span>
                  <input
                    type="text"
                    value="1"
                    className="w-8 h-8 text-center"
                    disabled
                  />
                  <span className="px-1 cursor-pointer">+</span>
                </div>
              </div>
            </div>
            <div>
              <Trash2 color="#7C969D" />
            </div>
          </div>

          <div className="bg-white w-64 p-6 lg:mt-8 max-lg:w-full rounded-md shadow-md">
            <span className="text-[#7C7C7C]">Resumo da Compra</span>
            <div className="flex justify-between mt-4">
              <span>1 produto</span>
              <span>{formatCurrency(products[0].price)}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <b>Total</b>
              <b>{formatCurrency(products[0].price)}</b>
            </div>
            <Button variant="terciary" rounded="md" className="w-full my-4">
              Continuar
            </Button>
            <a className="text-[#7C969D] text-center w-full block">
              Continuar comprando
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
