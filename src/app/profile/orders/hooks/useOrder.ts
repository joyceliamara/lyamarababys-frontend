import OrderApi from "@/api/order/order.api";
import { OrderListOutput } from "@/api/order/output/oders-list-output";
import Sentry from "@/services/sentry";

export default async function useOrder() {
  let orders: OrderListOutput = [];

  try {
    const { data } = await OrderApi.list();

    orders = data;
  } catch (err) {
    Sentry.captureException(err);
  }

  return { orders };
}
