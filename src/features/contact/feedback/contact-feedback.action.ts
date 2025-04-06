"use server";

import { SiteConfig } from "@/site-config";
import { action } from "@/lib/server-actions/safe-actions";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/mail/sendEmail";
import { auth } from "@/lib/auth/helper";

import { ContactFeedbackSchema } from "./contact-feedback.schema";

export const contactFeedbackAction = action.schema(ContactFeedbackSchema).action(async ({ parsedInput }) => {
  const user = await auth();

  const email = user?.email ?? parsedInput.email;

  const feedback = await prisma.feedback.create({
    data: {
      message: parsedInput.message,
      review: Number(parsedInput.review) || 0,
      userId: user?.id,
      email,
    },
  });

  await sendEmail({
    from: SiteConfig.email.from,
    to: SiteConfig.email.contact,
    subject: `New feedback from ${email}`,
    text: `Review: ${feedback.review}\n\nMessage: ${feedback.message}`,
  });

  return { message: "Your feedback has been sent to support." };
});
