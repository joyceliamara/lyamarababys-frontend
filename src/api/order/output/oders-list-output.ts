export type OrderListOutput = {
  id: string;
  total: number;
  status: OrderStatus;
  trackingCode: string;
}[];

export enum OrderStatus {
  CREATED = "CREATED",
  WAITING = "WAITING",
  ON_THE_WAY = "ON_THE_WAY",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}
