import request from "../request";
import { AddProductToCardInput } from "./inputs/add-product-to-cart";
import { GetCartOutput } from "./outputs/get-cart-output";
import { GetFavoritesOutput } from "./outputs/get-favorites-output";
import { GetProductOutput } from "./outputs/get-product-output";

export default class ProductApi {
  static async get(id: string) {
    return request.get<GetProductOutput>(`product/${id}`);
  }

  static async addToCard(input: AddProductToCardInput) {
    return request.post("product/cart/add", input);
  }

  static async getFavorited() {
    return request.get<GetFavoritesOutput>("product/favorite");
  }

  static async addToFavorite(id: string) {
    return request.post(`product/favorite/${id}`);
  }

  static async removeFromFavorite(id: string) {
    return request.post(`product/unfavorite/${id}`);
  }

  static async getCategories() {
    return request.get("product/category");
  }

  static async getGender() {
    return request.get("product/gender");
  }

  static async getSize() {
    return request.get("product/size");
  }

  static async getColor() {
    return request.get("product/color");
  }

  static async getProducts() {
    return request.get("product");
  }

  static async getCart() {
    return request.get<GetCartOutput>("product/cart");
  }

  static async removeProductFromCart(productId: string) {
    return request.post(`product/cart/remove/${productId}`);
  }
}
