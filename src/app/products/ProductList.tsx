"use client";

import { FormEvent, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Observer from "@/components/Observer";
import ProductCard from "@/components/ProductCard";
import Filters from "@/types/filters";
import calcDiscount from "@/utils/calc-discount";
import api from "@/services/api";
import { Search } from "lucide-react";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";

export default function ProductList(props: ProductListProps) {
  const router = useRouter();

  const [products, setProducts] = useState<typeof props.products>(
    props.products
  );
  const pageRef = useRef(1);
  const selectedCategoriesRef = useRef<Set<string>>(new Set());
  const selectedGendersRef = useRef<Set<string>>(new Set());
  const selectedSizesRef = useRef<Set<string>>(new Set());
  const selectedColorsRef = useRef<Set<string>>(new Set());
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(props.hasNextPage);
  const filters = {
    categories: props.categories,
    colors: props.colors,
    genders: props.genders,
    sizes: props.sizes,
  };

  const fetchData = async () => {
    setLoading(true);

    try {
      const categoriesId: string[] = [];
      const gendersId: string[] = [];
      const sizesId: string[] = [];
      const colorsId: string[] = [];

      selectedCategoriesRef.current.forEach((i) => categoriesId.push(i));
      selectedGendersRef.current.forEach((i) => gendersId.push(i));
      selectedSizesRef.current.forEach((i) => sizesId.push(i));
      selectedColorsRef.current.forEach((i) => colorsId.push(i));

      const { data } = await api.get("product", {
        params: {
          page: pageRef.current + 1,
          category: categoriesId,
          gender: gendersId,
          size: sizesId,
          color: colorsId,
          name,
        },
      });

      pageRef.current += 1;
      setProducts((prev) => prev.concat(data.items));
      setHasNextPage(data.hasNextPage);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const selectCategory = (id: string) => {
    if (selectedCategoriesRef.current.has(id)) {
      selectedCategoriesRef.current.delete(id);
    } else {
      selectedCategoriesRef.current.add(id);
    }

    pageRef.current = 0;
    setLoading(true);
    setProducts([]);
    fetchData();
  };

  const selectGender = (id: string) => {
    if (selectedGendersRef.current.has(id)) {
      selectedGendersRef.current.delete(id);
    } else {
      selectedGendersRef.current.add(id);
    }

    pageRef.current = 0;
    setLoading(true);
    setProducts([]);
    fetchData();
  };

  const selectSize = (id: string) => {
    if (selectedSizesRef.current.has(id)) {
      selectedSizesRef.current.delete(id);
    } else {
      selectedSizesRef.current.add(id);
    }

    pageRef.current = 0;
    setLoading(true);
    setProducts([]);
    fetchData();
  };

  const selectColor = (id: string) => {
    if (selectedColorsRef.current.has(id)) {
      selectedColorsRef.current.delete(id);
    } else {
      selectedColorsRef.current.add(id);
    }

    pageRef.current = 0;
    setLoading(true);
    setProducts([]);
    fetchData();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    pageRef.current = 0;
    setLoading(true);
    setProducts([]);
    fetchData();
  };

  return (
    <>
      <aside className="flex flex-col gap-7 w-[250px]">
        <div>
          <b>CATEGORIA</b>
          <ul className="flex flex-col gap-1 mt-2">
            {filters.categories.map((i) => (
              <li className="flex gap-2 items-center" key={i.id}>
                <Checkbox onTap={() => selectCategory(i.id)} />
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
                <Checkbox onTap={() => selectGender(i.id)} />
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
                <Checkbox onTap={() => selectSize(i.id)} />
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
                <Checkbox onTap={() => selectColor(i.id)} />
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
      <main className="flex-1">
        <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
          <Search />
          {/* todo: ajustar o input */}
          <Input
            placeholder="Pesquisar"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1"
          />
        </form>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-4">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.images.find((i) => i.main)?.url ?? ""}
              title={item.name}
              subtitle={item.subtitle}
              price={item.price}
              priceWithDiscount={
                item.discount
                  ? calcDiscount(item.discount, item.price)
                  : undefined
              }
              onClick={() => router.push(`/product/${item.id}`)}
            />
          ))}
          {hasNextPage && !loading && (
            <Observer
              onObserve={() => {
                fetchData();
              }}
            />
          )}
        </div>
      </main>
    </>
  );
}

interface ProductListProps extends Filters {
  hasNextPage: boolean;
}
