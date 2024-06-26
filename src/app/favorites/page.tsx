"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Select } from "@/components/Select";
import { DM_Serif_Display } from "next/font/google";
import ProductCard from "@/components/ProductCard";
import calcDiscount from "@/utils/calc-discount";
import useFavorites from "./hooks/useFavorites";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div>
      <Header />
      <div className="flex gap-4 m-6">
        <b className="text-xl" style={dmSerifDisplay.style}>
          Minha lista de desejos
        </b>
        <Button variant="primary" rounded="sm" size="sm">
          {favorites.length} Ite{favorites.length > 1 ? "ns" : "m"}
        </Button>
      </div>
      <div className="flex p-6 justify-between bg-[#F1F1F1] max-md:flex-col">
        <div className="flex gap-4 max-md:justify-center">
          <Select name="" id="" rounded="sm" className="max-sm:text-xs">
            <option value="">Categoria</option>
          </Select>
          <Select name="" id="" rounded="sm" className="max-sm:text-xs">
            <option value="">Status</option>
          </Select>
          <Button variant="mono" rounded="sm" className="border max-sm:text-xs">
            Todos os filtros
          </Button>
        </div>
        <div className="flex gap-4 items-center max-md:justify-center max-md:mt-4">
          <span className="max-sm:text-xs">Filtrar por</span>
          <Select name="" id="" className="h-full max-sm:text-xs" rounded="sm">
            <option value="">Adicionado recentemente</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2  gap-16 m-8 ">
        {favorites.map((item, index) => {
          return (
            <ProductCard
              key={index}
              image={item.images?.find((i) => i.main)?.url as string}
              title={item.name}
              subtitle={item.description}
              price={item.price}
              priceWithDiscount={calcDiscount(item.discount, item.price)}
              redirect={`/product/${item.path}`}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
