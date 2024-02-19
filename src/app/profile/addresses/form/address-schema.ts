import { z } from "zod";

export const addressSchema = z.object({
  cep: z.string().trim().length(8),
  street: z.string().trim().min(2).max(255),
  number: z.string().trim().max(255).optional(),
  complement: z.string().trim().max(255).optional(),
  neighborhood: z.string().trim().min(1).max(255),
  city: z.string().trim().min(2).max(255),
  state: z.string().trim().length(2),
});

export type Address = z.infer<typeof addressSchema>;
