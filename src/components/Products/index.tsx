import { Sacramento } from "next/font/google";
import ProductCard from "../ProductCard";
import products from "./products.json";
import api from "@/services/api";
import request from "@/api/request";
import ProductApi from "@/api/product/product.api";
import useProducts from "@/app/products/hooks/useProducts";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

const sacramento = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Products() {
  const { categories, genders, sizes, colors } = await useProducts();

  return (
    <div>
      <div
        className={`bg-[#BECFCB] text-center py-12 mt-6 text-white text-6xl ${sacramento.className}`}
      >
        Produtos
      </div>
      <div className="flex gap-4 p-20">
        {/* <aside className="hidden lg:flex flex-col gap-7 w-[250px]">
          <div>
            <b>CATEGORIA</b>
            <ul className="flex flex-col gap-1 mt-2">
              {categories.map((i: any) => (
                <li className="flex gap-2 items-center" key={i.id}>
                  <Checkbox />
                  {i.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b>GÊNERO</b>
            <ul className="flex flex-col gap-1 mt-2">
              {genders.map((i: any) => (
                <li className="flex gap-2 items-center" key={i.id}>
                  <Checkbox />
                  {i.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b>TAMANHO</b>
            <ul className="flex flex-col gap-1 mt-2">
              {sizes.map((i: any) => (
                <li className="flex gap-2 items-center" key={i.id}>
                  <Checkbox />
                  {i.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <b>CORES</b>
            <ul>
              {colors.map((i: any) => (
                <li className="flex gap-2 items-center" key={i.id}>
                  <Checkbox />
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: i.code }}
                  />
                  {i.name}
                </li>
              ))}
            </ul>
          </div>
        </aside> */}
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
          <div className="col-span-full flex justify-center">
            <Link
              href="/products"
              className="bg-[#D6A836] px-6 py-2 block text-white w-fit m-auto"
            >
              VER TUDO
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

interface Filters {
  categories: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }[];
  genders: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }[];
  sizes: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  }[];
  colors: {
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
  }[];
}
