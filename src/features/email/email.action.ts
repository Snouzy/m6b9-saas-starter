"use server";

import { action } from "@/lib/server-actions/safe-actions";

import { EmailActionSchema } from "./email.schema";

// export const addEmailAction = action(EmailActionSchema, async ({ email }) => {
//   try {
//     const userData = {
//       email,
//     };

//     const stripeCustomerId = await setupStripeCustomer(userData);
//     const resendContactId = await setupResendCustomer(userData);

//     await prisma.user.create({
//       data: {
//         ...userData,
//         stripeCustomerId,
//         resendContactId,
//       },
//     });

//     return { email };
//   } catch (error) {
//     throw new ActionError("The email is already in use");
//   }
// });

export const addEmailAction = action.schema(EmailActionSchema).action(async ({ parsedInput: { email } }) => {
  console.log(email);

  return { email };
});
