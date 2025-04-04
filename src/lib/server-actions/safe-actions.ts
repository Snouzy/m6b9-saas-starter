import { createSafeActionClient } from "next-safe-action";

import { auth } from "@/lib/auth/helper";

import type { User } from "@prisma/client";

export class ActionError extends Error {
  constructor(message: string) {
    super(message);
  }
}

type HandleReturnedServerError = (e: Error) => string;

const handleReturnedServerError: HandleReturnedServerError = (e) => {
  if (e instanceof ActionError) {
    return e.message;
  }

  return "An unexpected error occurred.";
};

export const action = createSafeActionClient({
  handleServerError: handleReturnedServerError,
});

const getUser = async () => {
  const user = await auth();

  if (!user) {
    throw new ActionError("Session not found!");
  }

  // In the real world, you would check if the session is valid by querying a database.
  // We'll keep it very simple here.

  if (!user.id || !user.email) {
    throw new ActionError("Session is not valid!");
  }

  return user as User;
};

export const authAction = createSafeActionClient({
  handleServerError: handleReturnedServerError,
} as const).use(async ({ next, clientInput: _clientInput, metadata: _metadata }) => {
  const user = await getUser();

  return await next({ ctx: { user } });
});
