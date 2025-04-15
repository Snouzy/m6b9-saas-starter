"use server";

import { SiteConfig } from "@/site-config";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/mail/sendEmail";
import { serverAuth } from "@/lib/auth/helper";
import { actionClient } from "@/actions/safe-actions";

import { ContactFeedbackSchema } from "./contact-feedback.schema";

export const contactFeedbackAction = actionClient.schema(ContactFeedbackSchema).action(async ({ parsedInput }) => {
  const user = await serverAuth();

  const email = user?.email ?? parsedInput.email;

  const feedback = await prisma.feedbacks.create({
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
