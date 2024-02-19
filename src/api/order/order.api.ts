import request from "../request";
import { OrderListOutput } from "./output/oders-list-output";

export default class OrderApi {
  static async list() {
    return request.get<OrderListOutput>("order");
  }
}
