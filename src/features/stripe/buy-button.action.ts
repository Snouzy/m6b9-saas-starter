"use server";

import { z } from "zod";

import { stripe } from "@/lib/stripe";
import { getServerUrl } from "@/lib/server-url";
import { ActionError, action } from "@/lib/server-actions/safe-actions";
import { auth } from "@/lib/auth/helper";

const BuyButtonSchema = z.object({
  priceId: z.string(),
});

export const buyButtonAction = action.schema(BuyButtonSchema).action(async ({ parsedInput: { priceId } }) => {
  const user = await auth();

  const stripeCustomerId = user?.stripeCustomerId ?? undefined;

  const price = await stripe.prices.retrieve(priceId);

  const priceType = price.type;

  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    mode: priceType === "one_time" ? "payment" : "subscription",
    payment_method_types: ["card", "link"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${getServerUrl()}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${getServerUrl()}/payment/cancel`,
  });

  if (!session.url) {
    throw new ActionError("Something went wrong while creating the session.");
  }

  return { url: session.url };
});
// export const buyButtonAction = action(BuyButtonSchema, async (data) => {
//   const { priceId } = data;

//   const user = await auth();

//   const stripeCustomerId = user?.stripeCustomerId ?? undefined;

//   const price = await stripe.prices.retrieve(priceId);

//   const priceType = price.type;

//   const session = await stripe.checkout.sessions.create({
//     customer: stripeCustomerId,
//     mode: priceType === "one_time" ? "payment" : "subscription",
//     payment_method_types: ["card", "link"],
//     line_items: [
//       {
//         price: priceId,
//         quantity: 1,
//       },
//     ],
//     success_url: `${getServerUrl()}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${getServerUrl()}/payment/cancel`,
//   });

//   if (!session.url) {
//     throw new ActionError("Something went wrong while creating the session.");
//   }

//   return { url: session.url };
// });
