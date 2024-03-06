import { GetProductOutput } from "@/api/product/outputs/get-product-output";
import ProductApi from "@/api/product/product.api";
import Sentry from "@/services/sentry";
import { isAxiosError } from "axios";

export default function useProductActions(productId: string) {
  const addToCart = async (data: AddToCardParams) => {
    if (!productId) return;

    try {
      await ProductApi.addToCard(data);
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

  return { addToCart, addToFavorite, removeFromFavorite };
}

type AddToCardParams = {
  productId: string;
  sizeId: string;
  colorId: string;
};
