import { notFound } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/features/auth/lib/better-auth";
import { SessionUser } from "@/entities/user/types/session-user";

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export const serverAuth = async (): Promise<SessionUser | null> => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session && session.user) {
    return session.user;
  }

  return null;
};

export const serverRequiredUser = async () => {
  const user = await serverAuth();

  if (!user) {
    notFound();
  }

  return user;
};
