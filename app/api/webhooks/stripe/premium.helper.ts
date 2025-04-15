import { z } from "zod";
import { UserPlan } from "@prisma/client";

import SuccessUpgradeEmail from "@emails/SuccessUpgradeEmail";
import SubscribtionFailedEmail from "@emails/SubscriptionFailedEmail";
import SubscribtionDowngradeEmail from "@emails/SubscriptionDowngradeEmail";
import { stripe } from "@/shared/lib/stripe";
import { prisma } from "@/shared/lib/prisma";
import { sendEmail } from "@/shared/lib/mail/sendEmail";

import type Stripe from "stripe";
import type { User } from "@prisma/client";

export const upgradeUserToPlan = async (userId: string, plan: UserPlan = "PREMIUM") => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      plan: plan,
    },
  });
};

export const downgradeUserFromPlan = async (userId: string) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      plan: "FREE",
    },
  });
};

export const notifyUserOfPremiumUpgrade = async (user: User) => {
  await sendEmail({
    to: user.email,
    subject: "Success! You've Unlocked Full Access to Our Features",
    react: SuccessUpgradeEmail(),
  });
};

export const notifyUserOfPremiumDowngrade = async (user: User) => {
  await sendEmail({
    to: user.email,
    subject: "Important Update: Changes to Your Account Status",
    react: SubscribtionDowngradeEmail(),
  });
};

export const notifyUserOfPaymentFailure = async (user: User) => {
  await sendEmail({
    to: user.email,
    subject: "Action Needed: Update Your Payment to Continue Enjoying Our Services",
    react: SubscribtionFailedEmail(),
  });
};

const PlanSchema = z.nativeEnum(UserPlan);

export const getPlanFromLineItem = async (
  lineItems?: Stripe.LineItem[] | Stripe.InvoiceLineItem[] | Stripe.SubscriptionItem[],
): Promise<UserPlan> => {
  if (!lineItems) {
    return "FREE";
  }

  const lineItem = lineItems[0];

  const productId = lineItem.id;

  if (!productId) {
    return "FREE";
  }

  const product = await stripe.products.retrieve(productId);

  const safePlan = PlanSchema.safeParse(product.metadata.plan);

  if (safePlan.success) {
    return safePlan.data;
  } else {
    return "FREE";
  }
};
