import { z } from "zod";

export const LoginCredentialsFormScheme = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  verifyPassword: z.string().min(8),
});

export type LoginCredentialsFormType = z.infer<typeof LoginCredentialsFormScheme>;
