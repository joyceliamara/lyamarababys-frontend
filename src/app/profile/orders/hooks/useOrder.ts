import OrderApi from "@/api/order/order.api";
import { OrderListOutput } from "@/api/order/output/oders-list-output";
import Sentry from "@/services/sentry";
import { useEffect, useState } from "react";

export default function useOrder() {
  const [orders, serOrders] = useState<OrderListOutput>([]);

  const fetchOrders = async () => {
    try {
      const { data } = await OrderApi.list();

      serOrders(data);
    } catch (err) {
      Sentry.captureException(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders };
}
