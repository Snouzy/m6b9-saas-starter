import { z } from "zod";

export const editProfileFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
});
export type EditProfileFormSchemaType = z.infer<typeof editProfileFormSchema>;
