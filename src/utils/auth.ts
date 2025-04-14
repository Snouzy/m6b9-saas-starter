import { prismaAdapter } from "better-auth/adapters/prisma";
import { betterAuth } from "better-auth";
import { PrismaClient } from "@prisma/client";

import VerifyEmail from "@emails/VerifyEmail";
import { sendEmail } from "@/lib/mail/sendEmail";
import { env } from "@/env";

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
        react: VerifyEmail({ url }),
      });
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      enabled: true,
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
});
