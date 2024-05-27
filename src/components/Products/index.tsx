import { Sacramento } from "next/font/google";
import ProductCard from "../ProductCard";
import products from "./products.json";
import Link from "next/link";

const sacramento = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Products() {
  return (
    <div>
      <div
        className={`bg-[#BECFCB] text-center py-12 mt-6 text-white text-6xl ${sacramento.className}`}
      >
        Produtos
      </div>
      <div className="flex gap-4 p-20">
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
