import { toast } from "sonner";
import { useEffect, useState } from "react";

import { useI18n } from "locales/client";
import { getServerUrl } from "@/shared/lib/server-url";
import { paths } from "@/shared/constants/paths";
import { COUNTDOWN_TIME } from "@/features/auth/verify-email/constants";
import { authClient } from "@/features/auth/lib/auth-client";

export const useResendEmail = (email: string) => {
  const t = useI18n();
  const [countdown, setCountdown] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => setCountdown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
    setIsDisabled(false);
  }, [countdown]);

  const resend = async () => {
    try {
      setIsDisabled(true);
      setCountdown(COUNTDOWN_TIME);

      const res = await authClient.sendVerificationEmail({
        email,
        callbackURL: `${getServerUrl()}/${paths.dashboard}`,
      });

      if (res.error) toast.error(t(res.error.message as keyof typeof t));
      if (res.data?.status) toast.success(t("EMAIL_SENT"));
    } catch (err) {
      console.error(err);
      toast.error(t("CANT_SEND_EMAIL"));
    } finally {
      setIsDisabled(false);
    }
  };

  return { resend, isDisabled, countdown };
};
