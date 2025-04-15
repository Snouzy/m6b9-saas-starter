"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { paths } from "@/shared/constants/paths";
import { authClient } from "@/features/auth/lib/auth-client";

interface UseResetPasswordResult {
  isLoading: boolean;
  hasToken: boolean;
  resetPassword: (password: string) => Promise<void>;
}

export const useResetPassword = (): UseResetPasswordResult => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);

  const token = searchParams.get("token") ?? "";

  const hasToken = Boolean(token);

  const resetPassword = async (password: string) => {
    if (!hasToken) return;

    setIsLoading(true);

    try {
      const { error } = await authClient.resetPassword({ token, newPassword: password });

      if (error) {
        toast.error("Une erreur est survenue lors de la réinitialisation du mot de passe.");
        return;
      }

      router.push(`/${paths.signIn}?reset=success`);
    } catch (e) {
      console.error(e);
      toast.error("Une erreur inconnue est survenue.");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, hasToken, resetPassword };
};
