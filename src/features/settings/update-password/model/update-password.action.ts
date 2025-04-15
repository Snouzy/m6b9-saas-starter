"use server";

import { prisma } from "@/shared/lib/prisma";
import { ERROR_MESSAGES } from "@/shared/constants/errors";
import { actionClient, ActionError } from "@/shared/api/safe-actions";
import { UpdatePasswordSchema } from "@/features/settings/update-password/model/update-password.schema";
import { validatePassword } from "@/features/settings/update-password/lib/validate-password";
import { hashStringWithSalt } from "@/features/settings/update-password/lib/hash";
import { env } from "@/env";
import { serverRequiredUser } from "@/entities/user/model/get-server-user";

export const updatePasswordAction = actionClient
  .schema(UpdatePasswordSchema)
  .action(async ({ parsedInput: { confirmPassword, currentPassword, newPassword } }) => {
    console.log("newPassword:", newPassword);
    console.log("currentPassword:", currentPassword);
    console.log("confirmPassword:", confirmPassword);
    const user = await serverRequiredUser();

    const { password, id } = await prisma.account.findFirstOrThrow({
      where: { userId: user.id },
      select: { password: true, id: true },
    });
    console.log("newPassword !== confirmPassword:", newPassword !== confirmPassword);

    if (newPassword !== confirmPassword) {
      throw new ActionError(ERROR_MESSAGES.PASSWORDS_DO_NOT_MATCH);
    }

    const hashedCurrentPassword = hashStringWithSalt(currentPassword, env.NEXTAUTH_SECRET);

    if (hashedCurrentPassword !== password) {
      throw new ActionError(ERROR_MESSAGES.INVALID_CURRENT_PASSWORD);
    }

    if (!validatePassword(newPassword)) {
      throw new ActionError(ERROR_MESSAGES.INVALID_NEW_PASSWORD);
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        accounts: {
          update: {
            where: {
              id,
              userId: user.id,
            },
            data: {
              password: hashStringWithSalt(newPassword, env.NEXTAUTH_SECRET),
            },
          },
        },
      },
    });

    return updatedUser;
  });
