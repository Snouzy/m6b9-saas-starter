"use server";

import { sendEmail } from "@/shared/lib/mail/sendEmail";
import { SiteConfig } from "@/shared/config/site-config";
import { actionClient } from "@/shared/api/safe-actions";

import { ContactSupportSchema } from "./contact-support.schema";

// export const contactSupportAction = action(ContactSupportSchema, async (data) => {
//   await sendEmail({
//     from: SiteConfig.email.from,
//     to: SiteConfig.email.contact,
//     subject: `Support needed from ${data.email} - ${data.subject}`,
//     text: data.message,
//   });
//   return { message: "Your message has been sent to support." };
// });

export const contactSupportAction = actionClient.schema(ContactSupportSchema).action(async ({ parsedInput }) => {
  await sendEmail({
    from: SiteConfig.email.from,
    to: SiteConfig.email.contact,
    subject: `Support needed from ${parsedInput.email} - ${parsedInput.subject}`,
    text: parsedInput.message,
  });
  return { message: "Your message has been sent to support." };
});
