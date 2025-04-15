"use server";

import { prisma } from "@/shared/lib/prisma";
import { ERROR_MESSAGES } from "@/shared/constants/errors";
import { actionClient, ActionError } from "@/shared/api/safe-actions";
import { editProfileFormSchema } from "@/features/settings/edit-profile/schema/edit-profile.schema";
import { serverRequiredUser } from "@/entities/user/model/get-server-session-user";

export const updateProfileAction = actionClient.schema(editProfileFormSchema).action(async ({ parsedInput }) => {
  const { firstName, lastName, email } = parsedInput;
  const user = await serverRequiredUser();

  const existing = await prisma.user.findFirst({
    where: {
      email,
      id: { not: user.id },
    },
  });
  if (existing) {
    throw new ActionError(ERROR_MESSAGES.EMAIL_ALREADY_USED);
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      firstName,
      lastName,
      email,
    },
  });

  return {
    id: updatedUser.id,
    firstName: updatedUser.firstName,
    lastName: updatedUser.lastName,
    email: updatedUser.email,
    image: updatedUser.image,
  };
});
