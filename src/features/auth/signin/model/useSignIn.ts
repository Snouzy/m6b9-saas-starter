import { toast } from "sonner";

import { useI18n } from "locales/client";
import { paths } from "@/shared/constants/paths";
import { LoginSchema } from "@/features/auth/signin/schema/signin.schema";
import { authClient } from "@/features/auth/lib/auth-client";

export const useSignIn = () => {
  const t = useI18n();

  const signIn = async (values: LoginSchema) => {
    const response = await authClient.signIn.email({
      email: values.email,
      password: values.password,
      callbackURL: `/${paths.dashboard}`,
    });

    if (response?.error) {
      toast.error(t("INVLID_EMAIL_OR_PASSWORD"), { position: "bottom-center" });
      return;
    }
  };

  return {
    signIn,
  };
};
