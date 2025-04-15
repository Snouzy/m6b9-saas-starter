import { z } from "zod";

export const ProfileFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

export type ProfileFormSchemaType = z.infer<typeof ProfileFormSchema>;
