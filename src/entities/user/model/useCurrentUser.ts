import { useSession } from "@/features/auth/lib/auth-client";

export const useCurrentUser = () => {
  const session = useSession();
  const user = session.data?.user;

  if (!user) {
    return null;
  }

  return user;
};
