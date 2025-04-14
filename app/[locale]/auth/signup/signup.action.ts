"use server";

import { authClient } from "@/utils/auth-client";
import { ActionError, action } from "@/lib/server-actions/safe-actions";
import { validatePassword } from "@/lib/auth/credentials-provider";

import { LoginCredentialsFormScheme } from "./signup.schema";

export const signUpAction = action.schema(LoginCredentialsFormScheme).action(async ({ parsedInput }) => {
  console.log("parsedInput:", parsedInput);
  if (!validatePassword(parsedInput.password)) {
    throw new ActionError("Invalid new password. Must be at least 8 characters, and contain at least one letter and one number");
  }

  try {
    const user = await authClient.signUp.email(
      {
        email: parsedInput.email,
        password: parsedInput.password,
        name: parsedInput.firstName,
        callbackURL: "/dashboard",
      },
      {
        onRequest: () => {},
        onSuccess: () => {},
        onError: () => {},
      },
    );
    // const userData = {
    //   email: parsedInput.email,
    //   passwordHash: hashStringWithSalt(parsedInput.password, env.NEXTAUTH_SECRET),
    //   firstName: parsedInput.firstName,
    //   lastName: parsedInput.lastName,
    // };

    // const stripeCustomerId = await setupStripeCustomer(userData);
    // const resendContactId = await setupResendCustomer(userData);

    // const user = await prisma.user.create({
    //   data: {
    //     ...userData,
    //     stripeCustomerId,
    //     resendContactId,
    //   },
    // });

    return user;
  } catch (error) {
    console.error(error);
    throw new ActionError("Email already exists");
  }
});
