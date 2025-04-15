import { stripe } from "@/shared/lib/stripe";
import { displayFullName } from "@/entities/user/lib/display-name";

import type { DefaultUser } from "next-auth";

export const setupStripeCustomer = async (user: DefaultUser & { firstName: string; lastName: string }) => {
  if (!user.email) {
    return;
  }

  const { firstName, lastName } = user;

  const customer = await stripe.customers.create({
    email: user.email,
    name: displayFullName({ firstName, lastName }),
  });

  return customer.id;
};
