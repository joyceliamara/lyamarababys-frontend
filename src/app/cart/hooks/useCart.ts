import { GetCartOutput } from "@/api/product/outputs/get-cart-output";
import ProductApi from "@/api/product/product.api";
import Sentry from "@/services/sentry";

export default async function useCart() {
  let cart: GetCartOutput = [];

  try {
    const { data } = await ProductApi.getCart();

    cart = data;
  } catch (err) {
    console.log(err);
    Sentry.captureException(err);
  }

  return { cart };
}
