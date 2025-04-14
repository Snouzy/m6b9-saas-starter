import { headers } from "next/headers";

import { auth } from "@/utils/auth";
import { LoggedInButton, SignInButton } from "@/features/auth/SignInButton";

export const AuthButtonServer = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session && session.user) {
    const user = session.user;
    return <LoggedInButton user={user} />;
  }

  return <SignInButton variant="ghost" />;
};
