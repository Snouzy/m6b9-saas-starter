"use client";
import { authClient } from "@/utils/auth-client";

import { LoggedInButton, SignInButton } from "./SignInButton";

export const AuthButton = async () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  console.log("session:", session);

  if (session && session.user) {
    return <LoggedInButton user={session.user} />;
  }

  return <SignInButton />;
};
