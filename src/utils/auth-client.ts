import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { User as PrismaUser } from "@prisma/client";

import { auth } from "./auth";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
  plugins: [
    inferAdditionalFields<typeof auth>(),
  ],
});

export const { useSession } = authClient;

export interface SessionUser extends Omit<PrismaUser, "image"> {
  image?: string | null;
}

