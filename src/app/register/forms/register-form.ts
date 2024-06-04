import { z } from "zod";

export enum RegisterFormFields {
  Name = "name",
  Surname = "surname",
  Email = "email",
  Password = "password",
}

type FormData = {
  [type in RegisterFormFields]: string;
};

export const defaultValues: FormData = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

export const resolver = z.object({
  name: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .trim()
    .min(2, "Nome deve ter no mínimo 2 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres"),
  surname: z
    .string()
    .trim()
    .min(2, "Sobrenome deve ter no mínimo 2 caracteres")
    .max(50, "Sobrenome deve ter no máximo 50 caracteres"),
  email: z
    .string({
      required_error: "Email é obrigatório",
    })
    .email("Email inválido"),
  password: z
    .string({
      required_error: "Senha é obrigatória",
    })
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(255, "Senha deve ter no máximo 255 caracteres"),
});
