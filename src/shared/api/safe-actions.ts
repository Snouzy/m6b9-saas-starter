import { createSafeActionClient } from "next-safe-action";

import { serverAuth } from "@/entities/user/model/get-server-session-user";

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

export const actionClient = createSafeActionClient({
  handleServerError: handleReturnedServerError,
});

const getUser = async () => {
  const user = await serverAuth();

  if (!user) {
    throw new ActionError("Session not found!");
  }

  if (!user.id || !user.email) {
    throw new ActionError("Session is not valid!");
  }

  return user;
};

export const authenticatedActionClient = createSafeActionClient({
  handleServerError: handleReturnedServerError,
} as const).use(async ({ next, clientInput: _clientInput, metadata: _metadata }) => {
  const user = await getUser();

  return await next({ ctx: { user } });
});
