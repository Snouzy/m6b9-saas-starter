import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email("Adresse e-mail invalide"),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
