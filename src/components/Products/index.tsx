import { Sacramento } from "next/font/google";
import Checkbox from "../Checkbox";
import ProductCard from "../ProductCard";
import products from "./products.json";

const sacramento = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Products() {
  return (
    <div>
      <div
        className={`bg-[#BECFCB] text-center py-12 mt-6 text-white text-6xl ${sacramento.className}`}
      >
        Produtos
      </div>
      <div className="flex gap-4 p-20">
        <aside className="flex flex-col gap-7 w-[250px]">
          <div>
            <b>CATEGORIA</b>
            <ul className="flex flex-col gap-1 mt-2">
              <li className="flex gap-2 items-center">
                <Checkbox />
                Roupas
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Bolsas
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Brinquedos
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Acessórios
              </li>
            </ul>
          </div>
          <div>
            <b>GÊNERO</b>
            <ul className="flex flex-col gap-1 mt-2">
              <li className="flex gap-2 items-center">
                <Checkbox />
                Feminino
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Masculino
              </li>
            </ul>
          </div>
          <div>
            <b>TAMANHO</b>
            <ul className="flex flex-col gap-1 mt-2">
              <li className="flex gap-2 items-center">
                <Checkbox />1 ano
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />2 anos
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />3 anos
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />G
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />M
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />P
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                PP
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Prematuro
              </li>
            </ul>
          </div>
          <div>
            <b>CORES</b>
            <ul>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Amarelo
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Azul
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Bege
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Branco
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Verde
              </li>
              <li className="flex gap-2 items-center">
                <Checkbox />
                Rosa
              </li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 grid grid-cols-3 gap-16 ">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              price={item.price}
              priceWithDiscount={item.priceWithDiscount}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
