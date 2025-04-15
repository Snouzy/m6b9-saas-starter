import { authClient } from "@/features/auth/lib/auth-client";

export type User = (typeof authClient.$Infer)["Session"]["user"];
export interface SessionUser extends Omit<User, "image" | "createdAt" | "updatedAt"> {
  image?: string | null;
}

export type Session = typeof authClient.$Infer.Session;
