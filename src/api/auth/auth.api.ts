import { LoginInput } from "./input/login-input";
import { LoginOutput } from "./output/login-output";
import request from "../request";

export class AuthApi {
  static async login(input: LoginInput) {
    return request.post<LoginOutput>("user/auth", input);
  }
}
