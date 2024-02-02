import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Filters from "@/types/filters";
import ProductList from "./ProductList";
import request from "@/api/request";

export default async function Products() {
  const [
    responseCategories,
    responseGenders,
    responseSizes,
    responseColors,
    responseProducts,
  ] = await Promise.all([
    request.get("product/category"),
    request.get("product/gender"),
    request.get("product/size"),
    request.get("product/color"),
    request.get("product"),
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
