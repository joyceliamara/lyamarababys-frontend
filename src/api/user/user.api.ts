import request from "../request";
import { NewAddressInput } from "./input/new-address-input";
import { RegisterInput } from "./input/register-input";
import { UpdateContactInput } from "./input/update-contact-input";
import { AddressOutput } from "./output/address-output";
import { GetSelfDataOutput } from "./output/get-self-data-output";
import { NewAddressOutput } from "./output/new-addresss-output";

export class UserApi {
  static async register(input: RegisterInput) {
    return request.post<void>("user", input);
  }

  static async getSelfData() {
    return request.get<GetSelfDataOutput>("user/self");
  }

  static async getAddresses() {
    return request.get<AddressOutput>("user/address");
  }

  static async addAddress(input: NewAddressInput) {
    return request.post<NewAddressOutput>("user/address", input);
  }

  static async updateAddress(addressId: string, input: NewAddressInput) {
    return request.put<NewAddressOutput>(`user/address/${addressId}`, input);
  }

  static async deleteAddress(addressId: string) {
    return request.delete(`user/address/${addressId}`);
  }

  static async setMainAddress(addressId: string) {
    return request.patch<void>(`user/address/${addressId}/set-main`);
  }

  static async updateProfile(data: UpdateContactInput) {
    return request.put<void>("user/contact", data);
  }
}
