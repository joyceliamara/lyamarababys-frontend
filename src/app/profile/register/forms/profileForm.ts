import { z } from "zod";

export enum ProfileFields {
  Name = "name",
  Surname = "surname",
}

export const defaultValues = {
  name: "",
  surname: "",
};

export const profileResolver = z.object({
  name: z
    .string({
      required_error: "Nome é obrigatório",
    })
    .trim()
    .min(2, "Nome deve conter no mínimo 2 caracteres")
    .max(50, "Nome deve conter no máximo 50 caracteres"),
  surname: z
    .string({
      required_error: "Sobrenome é obrigatório",
    })
    .trim()
    .min(2, "Sobrenome deve conter no mínimo 2 caracteres")
    .max(50, "Sobrenome deve conter no máximo 50 caracteres"),
});

export type ProfileFormData = z.infer<typeof profileResolver>;
