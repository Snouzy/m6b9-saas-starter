"use client";

import { redirect } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { authClient } from "@/features/auth/lib/auth-client";

export const useLogout = (redirectUrl: string = "/") => {
  return useMutation({
    mutationFn: async () =>
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            redirect(redirectUrl);
          },
        },
      }),
  });
};
