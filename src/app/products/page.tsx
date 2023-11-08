import api from "@/services/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/types/filters";
import ProductList from "./ProductList";

export default async function Products() {
  const [
    responseCategories,
    responseGenders,
    responseSizes,
    responseColors,
    responseProducts,
  ] = await Promise.all([
    api.get("product/category"),
    api.get("product/gender"),
    api.get("product/size"),
    api.get("product/color"),
    api.get("product"),
  ]);

  const filters: Filters = {
    categories: responseCategories.data.map((i: any) => ({
      ...i,
      selected: false,
    })),
    genders: responseGenders.data.map((i: any) => ({
      ...i,
      selected: false,
    })),
    sizes: responseSizes.data.map((i: any) => ({
      ...i,
      selected: false,
    })),
    colors: responseColors.data.map((i: any) => ({
      ...i,
      selected: false,
    })),
    products: responseProducts.data.items,
  };

  return (
    <div>
      <Header />
      <div className="flex gap-4 p-10 lg:p-20">
        <ProductList
          {...filters}
          hasNextPage={responseProducts?.data?.hasNextPage ?? false}
        />
      </div>
      <Footer />
    </div>
  );
}
