import Google from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { SiteConfig } from "@/site-config";
import { sendEmail } from "@/lib/mail/sendEmail";
import { logger } from "@/lib/logger";
import { env } from "@/env";

import MagicLinkMail from "../../../emails/MagicLinkEmail";
import { setupResendCustomer, setupStripeCustomer } from "./auth-config-setup";

import type { NextAuthOptions, Session } from "next-auth";
import type { User } from "@prisma/client";

import { prisma } from "@/lib/prisma";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      from: SiteConfig.email.from,
      sendVerificationRequest: async ({ identifier: email, url }) => {
        const result = await sendEmail({
          from: SiteConfig.email.from,
          to: email,
          subject: `Sign in to ${SiteConfig.domain}`,
          react: MagicLinkMail({ url }),
        });

        if (result.error) {
          logger.error("Auth Email Provider Error", result.error);
          throw new Error(`Failed to send email: ${result.error}`);
        }
      },
    }),
  ],
  session: {
    strategy: "database",
  },
  secret: env.NEXTAUTH_SECRET,
  callbacks: {
    session(params) {
      if (params.newSession) return params.session;

      const typedParams = params as unknown as {
        session: Session;
        user?: User;
      };

      if (!typedParams.user) return typedParams.session;

      typedParams.user.passwordHash = null;

      return typedParams.session;
    },
  },
  events: {
    createUser: async (message) => {
      const user = message.user;

      if (!user.email) {
        return;
      }

      const stripeCustomerId = await setupStripeCustomer(user);
      const resendContactId = await setupResendCustomer(user);

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          stripeCustomerId,
          resendContactId,
        },
      });
    },
  },
};

export const { handlers, auth: baseAuth } = NextAuth(authOptions);
