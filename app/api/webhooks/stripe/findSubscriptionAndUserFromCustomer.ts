import { prisma } from "@/shared/lib/prisma";

import type Stripe from "stripe";

/**
 * Finds the user linked to a given Stripe customer ID
 *
 * - If a Subscription with this customer ID is found, return the associated user
 * - Otherwise, throws
 *
 * @param stripeCustomer The Stripe customer object or ID
 * @returns The corresponding user from the database
 */
export const findSubscriptionAndUserFromCustomer = async (stripeCustomer: string | Stripe.Customer | Stripe.DeletedCustomer | null) => {
  let stripeCustomerId: string;

  if (typeof stripeCustomer === "string") {
    stripeCustomerId = stripeCustomer;
  } else if (stripeCustomer && !stripeCustomer.deleted) {
    stripeCustomerId = stripeCustomer.id;
  } else {
    throw new Error("Invalid Stripe customer");
  }

  const subscription = await prisma.subscription.findFirst({
    where: { stripeCustomerId },
    include: { user: true },
  });

  if (!subscription || !subscription.user) {
    throw new Error(`No user found for stripeCustomerId: ${stripeCustomerId}`);
  }

  return subscription;
};
