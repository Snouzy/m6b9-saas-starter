"use server";

import { SiteConfig } from "@/site-config";
import { action } from "@/lib/server-actions/safe-actions";
import { sendEmail } from "@/lib/mail/sendEmail";

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

export const contactSupportAction = action.schema(ContactSupportSchema).action(async ({ parsedInput }) => {
  await sendEmail({
    from: SiteConfig.email.from,
    to: SiteConfig.email.contact,
    subject: `Support needed from ${parsedInput.email} - ${parsedInput.subject}`,
    text: parsedInput.message,
  });
  return { message: "Your message has been sent to support." };
});
