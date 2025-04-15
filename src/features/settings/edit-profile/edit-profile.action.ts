import { prisma } from "@/lib/prisma";
import { ProfileFormSchema } from "@/features/settings/edit-profile/edit-profile.schema";
import { authenticatedActionClient } from "@/actions/safe-actions";

export const updateProfileAction = authenticatedActionClient
  .schema(ProfileFormSchema)
  .action(async ({ parsedInput: { email, firstName, lastName }, ctx }) => {
    const previousEmail = ctx.user.email;

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
