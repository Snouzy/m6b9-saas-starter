"use server";

import { getI18n } from "locales/server";
import { auth } from "@/utils/auth";
import { ActionError, actionClient } from "@/actions/safe-actions";

import { signUpSchema } from "./signup.schema";

export const signUpAction = actionClient.schema(signUpSchema).action(async ({ parsedInput }) => {
  const t = await getI18n();

  try {
    const user = await auth.api.signUpEmail({
      body: {
        email: parsedInput.email,
        password: parsedInput.password,
        name: parsedInput.firstName,
        firstName: parsedInput.firstName,
        lastName: parsedInput.lastName,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    throw new ActionError(t("EMAIL_ALREADY_EXISTS"));
  }
});
