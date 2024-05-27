import { z } from "zod";

export enum LoginFields {
  Email = "email",
  Password = "password",
  Remember = "remember",
}

export const loginDefaultValues = {
  email: "",
  password: "",
  remember: false,
};

export const loginSchema = z.object({
  email: z.string({
    required_error: "Email é obrigatório",
  }),
  password: z.string({
    required_error: "Senha é obrigatória",
  }),
  remember: z.boolean(),
});

export type LoginData = z.infer<typeof loginSchema>;
