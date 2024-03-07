import ProductApi from "@/api/product/product.api";
import Sentry from "@/services/sentry";

export default function useCartActions() {
  const removeProduct = async (productId: string) => {
    try {
      await ProductApi.removeProductFromCart(productId);
    } catch (err) {
      console.log(err);
      Sentry.captureException(err);
    }
  };

  return { removeProduct };
}
