import { stripe } from "@/lib/stripe";
import { resend } from "@/lib/mail/resend";
import { displayFullName } from "@/lib/format/displayName";
import { env } from "@/env";

import type { User } from "next-auth";

export const setupStripeCustomer = async (user: Omit<User, "id">) => {
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

export const setupResendCustomer = async (user: Omit<User, "id">) => {
  if (!user.email) {
    return;
  }

  if (!env.RESEND_AUDIENCE_ID) {
    return;
  }

  const contact = await resend.contacts.create({
    audienceId: env.RESEND_AUDIENCE_ID,
    email: user.email,
    firstName: user.firstName ?? "",
    lastName: user.lastName ?? "",
    unsubscribed: false,
  });

  if (!contact.data) return;

  return contact.data.id;
};
