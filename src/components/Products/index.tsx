import { Sacramento } from "next/font/google";
import Checkbox from "../Checkbox";
import ProductCard from "../ProductCard";
import products from "./products.json";

const sacramento = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Products() {
  const [responseCategories, responseGenders, responseSizes, responseColors] =
    await Promise.all([
      fetch("http://localhost:3001/product/category"),
      fetch("http://localhost:3001/product/gender"),
      fetch("http://localhost:3001/product/size"),
      fetch("http://localhost:3001/product/color"),
    ]);

  const filters: Filters = {
    categories: await responseCategories.json(),
    genders: await responseGenders.json(),
    sizes: await responseSizes.json(),
    colors: await responseColors.json(),
  };

  return (
    <div>
      <div
        className={`bg-[#BECFCB] text-center py-12 mt-6 text-white text-6xl ${sacramento.className}`}
      >
        Produtos
      </div>
      <div className="flex gap-4 p-20">
        <aside className="hidden lg:flex flex-col gap-7 w-[250px]">
          <div>
            <b>CATEGORIA</b>
            <ul className="flex flex-col gap-1 mt-2">
              {filters.categories.map((i) => (
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
              {filters.genders.map((i) => (
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
              {filters.sizes.map((i) => (
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
              {filters.colors.map((i) => (
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
        </aside>
        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
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
