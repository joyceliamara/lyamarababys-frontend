import { GetProductOutput } from "@/api/product/outputs/get-product-output";
import ProductApi from "@/api/product/product.api";
import Sentry from "@/services/sentry";
import { isAxiosError } from "axios";

export default async function useProduct(productId: string) {
  let product: GetProductOutput | undefined;

  try {
    const { data } = await ProductApi.get(productId);

    product = data;
  } catch (err) {
    if (!isAxiosError(err)) {
      Sentry.captureException(err);
    }
  }

  const addToCart = async (data: AddToCardParams) => {
    if (!product) return;

    try {
      await ProductApi.addToCard(data);
      product.favorited = true;
    } catch (err) {
      if (!isAxiosError(err)) {
        Sentry.captureException(err);
      }
    }
  };

  const addToFavorite = async (id: string) => {
    try {
      await ProductApi.addToFavorite(id);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromFavorite = async (id: string) => {
    try {
      await ProductApi.removeFromFavorite(id);
    } catch (err) {
      console.log(err);
    }
  };

  return { product, addToCart, addToFavorite, removeFromFavorite };
}

type AddToCardParams = {
  productId: string;
  sizeId: string;
  colorId: string;
};
