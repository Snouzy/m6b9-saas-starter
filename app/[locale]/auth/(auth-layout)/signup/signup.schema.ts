import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  verifyPassword: z.string().min(8),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
