import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

import { authOptions } from "./auth";

import type { User } from "@prisma/client";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const auth = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    const user = session.user as User;
    return user;
  }

  return null;
};

export const requiredAuth = async () => {
  const user = await auth();

  if (!user) {
    notFound();
  }

  return user;
};
