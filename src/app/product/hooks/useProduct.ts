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

  return { product };
}
