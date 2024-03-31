import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/types/filters";
import ProductList from "./ProductList";
import request from "@/api/request";
import useProducts from "./hooks/useProducts";

export default async function Products() {
  const { categories, colors, genders, products, sizes } = await useProducts();

  const filters: Filters = {
    categories: categories.map((i: any) => ({
      ...i,
      selected: false,
    })),
    genders: genders.map((i: any) => ({
      ...i,
      selected: false,
    })),
    sizes: sizes.map((i: any) => ({
      ...i,
      selected: false,
    })),
    colors: colors.map((i: any) => ({
      ...i,
      selected: false,
    })),
    products: products,
  };

  return (
    <div>
      <Header />
      <div className="flex gap-4 p-10 lg:p-20">
        <ProductList
          {...filters}
          hasNextPage={products?.hasNextPage ?? false}
        />
      </div>
      <Footer />
    </div>
  );
}
