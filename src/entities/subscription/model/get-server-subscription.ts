import { prisma } from "@/shared/lib/prisma";

export const getServerSubscription = async (userId: string) => {
  const subscription = await prisma.subscription.findUnique({
    where: { userId },
    include: {
      planVariant: true,
    },
  });

  return subscription;
};
