import request from "../request";
import { AddressOutput } from "./output/address-output";

export class UserApi {
  static async getAddresses() {
    return request.get<AddressOutput>("user/address");
  }
}
