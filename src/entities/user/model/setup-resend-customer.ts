import { resend } from "@/shared/lib/mail/resend";
import { env } from "@/env";

import type { User } from "next-auth";

export const setupResendCustomer = async (user: Omit<User, "id"> & { firstName: string; lastName: string }) => {
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
