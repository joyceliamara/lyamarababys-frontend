import { GetFavoritesOutput } from "@/api/product/outputs/get-favorites-output";
import ProductApi from "@/api/product/product.api";
import Sentry from "@/services/sentry";

export default async function useFavorites() {
  let favorites: GetFavoritesOutput = [];

  try {
    const { data } = await ProductApi.getFavorited();

    favorites = data;
  } catch (err) {
    console.log(err);
    Sentry.captureException(err);
  }

  return { favorites };
}
