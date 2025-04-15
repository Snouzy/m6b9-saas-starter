"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { paths } from "@/shared/constants/paths";
import { SignUpSchema } from "@/features/auth/signup/schema/signup.schema";
import { signUpAction } from "@/features/auth/signup/model/signup.action";

export const useSignUp = () => {
  const t = useI18n();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: SignUpSchema) => {
      if (values.password !== values.verifyPassword) {
        throw new Error("PASSWORD_MISMATCH");
      }

      const result = await signUpAction(values);

      if (result?.serverError) {
        throw new Error(result.serverError);
      }

      return result;
    },

    onSuccess: () => {
      router.push(`/${paths.verifyEmail}`);
    },

    onError: (error: unknown) => {
      const message = error instanceof Error ? t(error.message as keyof typeof t) : t("generic_error");

      toast.error(message, {
        position: "bottom-center",
      });
    },
  });

  return {
    signUp: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
};
