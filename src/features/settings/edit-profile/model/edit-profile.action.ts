import { prisma } from "@/shared/lib/prisma";
import { authenticatedActionClient } from "@/shared/api/safe-actions";
import { ProfileFormSchema } from "@/features/settings/edit-profile/schema/edit-profile.schema";

export const updateProfileAction = authenticatedActionClient.schema(ProfileFormSchema).action(async ({ parsedInput: { email }, ctx }) => {
  const user = await prisma.user.update({
    where: {
      id: ctx.user.id,
    },
    data: {
      email: email,
    },
  });

  return user;
});
