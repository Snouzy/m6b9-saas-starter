import { User as PrismaUser } from "@prisma/client";

export interface SessionUser extends Omit<PrismaUser, "image" | "createdAt" | "updatedAt"> {
  image?: string | null;
}
