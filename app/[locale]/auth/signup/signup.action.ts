"use server";

import { ActionError, action } from "@/lib/server-actions/safe-actions";
import { prisma } from "@/lib/prisma";
import { hashStringWithSalt, validatePassword } from "@/lib/auth/credentials-provider";
import { setupResendCustomer, setupStripeCustomer } from "@/lib/auth/auth-config-setup";
import { env } from "@/env";

import { LoginCredentialsFormScheme } from "./signup.schema";

export const signUpAction = action.schema(LoginCredentialsFormScheme).action(async ({ parsedInput }) => {
  console.log("parsedInput:", parsedInput);
  if (!validatePassword(parsedInput.password)) {
    throw new ActionError("Invalid new password. Must be at least 8 characters, and contain at least one letter and one number");
  }

  try {
    const userData = {
      email: parsedInput.email,
      passwordHash: hashStringWithSalt(parsedInput.password, env.NEXTAUTH_SECRET),
      firstName: parsedInput.firstName,
      lastName: parsedInput.lastName,
    };

    const stripeCustomerId = await setupStripeCustomer(userData);
    const resendContactId = await setupResendCustomer(userData);

    const user = await prisma.user.create({
      data: {
        ...userData,
        stripeCustomerId,
        resendContactId,
      },
    });

    return user;
  } catch (error) {
    console.error(error);
    throw new ActionError("Email already exists");
  }
});
