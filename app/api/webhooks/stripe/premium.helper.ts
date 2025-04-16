import SuccessUpgradeEmail from "@emails/SuccessUpgradeEmail";
import SubscribtionFailedEmail from "@emails/SubscriptionFailedEmail";
import SubscribtionDowngradeEmail from "@emails/SubscriptionDowngradeEmail";
import { prisma } from "@/shared/lib/prisma";
import { sendEmail } from "@/shared/lib/mail/sendEmail";

import type { User } from "@prisma/client";

export const upgradeUserToPlan = async (userId: string) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {}, // TODO: Add plan to user
  });
};

export const downgradeUserFromPlan = async (userId: string) => {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {}, // TODO: Add plan to user
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
