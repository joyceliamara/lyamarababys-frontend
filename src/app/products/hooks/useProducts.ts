import ProductApi from "@/api/product/product.api";
import { isAxiosError } from "axios";

export default async function useProducts() {
  let categories = [];
  let genders = [];
  let sizes = [];
  let colors = [];
  let products = [];

  try {
    const all = await Promise.all([
      ProductApi.getCategories(),
      ProductApi.getGender(),
      ProductApi.getSize(),
      ProductApi.getColor(),
      ProductApi.getProducts(),
    ]);

    console.log(all[4].data);
    categories = all[0].data;
    genders = all[1].data;
    sizes = all[2].data;
    colors = all[3].data;
    products = all[4].data.items;
  } catch (err) {
    console.log(err);
  }

  return {
    categories,
    genders,
    sizes,
    colors,
    products,
  };
}
