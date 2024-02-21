import Link from "next/link";
import { ProfileLayout } from "../page";
import useOrder from "./hooks/useOrder";
import formatCurrency from "@/utils/format-currency";
import { OrderStatus } from "@/api/order/output/oders-list-output";

export default async function Orders() {
  const { orders } = await useOrder();

  const formatStatus = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.CANCELED:
        return "Cancelado";
      case OrderStatus.CREATED:
        return "Criado";
      case OrderStatus.DELIVERED:
        return "Entregue";
      case OrderStatus.ON_THE_WAY:
        return "Em transito";
      case OrderStatus.WAITING:
        return "Aguardando";
    }
  };

  return (
    <ProfileLayout>
      <ul className="flex flex-col gap-4">
        {orders.map((i) => (
          <li
            key={i.id}
            className="flex gap-3 justify-between items-center text-sm flex-1 bg-white rounded-md py-2 px-4 shadow-md"
          >
            <div className="flex flex-col">
              <span className="text-lg font-semibold  mb-2">
                Bolsa Térmica +2
              </span>
              <span>Total: {formatCurrency(i.total)}</span>
              <span>Status: {formatStatus(i.status)}</span>
              <span>Código: {i.trackingCode}</span>
              <div className="flex gap-4 text-blue-500">
                {i.status === OrderStatus.WAITING && (
                  <Link href="#!">Concluir compra</Link>
                )}
                <Link href="#!">Ver detalhes</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ProfileLayout>
  );
}
