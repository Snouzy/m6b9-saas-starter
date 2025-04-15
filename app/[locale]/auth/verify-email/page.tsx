"use client";

import { toast } from "sonner";
import { useState, useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { Mail } from "lucide-react";

import { useI18n } from "locales/client";
import { authClient, useSession } from "@/utils/auth-client";
import { cn } from "@/lib/utils";
import { getServerUrl } from "@/lib/server-url";
import { paths } from "@/config/paths";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const COUNTDOWN_TIME = process.env.NODE_ENV === "development" ? 3 : 60;

export default function VerifyEmailPage() {
  const t = useI18n();
  const [countdown, setCountdown] = useState(COUNTDOWN_TIME);
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();
  const session = useSession();
  const user = session.data?.user;

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setIsDisabled(false);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  const handleResendEmail = async () => {
    setCountdown(COUNTDOWN_TIME);
    setIsDisabled(true);

    try {
      if (!user) {
        throw new Error("User not found");
      }

      if (user.emailVerified) {
        redirect(`${getServerUrl()}/${paths.dashboard}`);
      }

      const result = await authClient.sendVerificationEmail({
        email: user.email,
        callbackURL: `${getServerUrl()}/${paths.dashboard}`,
      });

      if (result.error) {
        toast.error(t(result.error.message as keyof typeof t));
      }

      if (result.data?.status) {
        toast.success(t("EMAIL_SENT"));
      }
    } catch (error) {
      // Handle error, maybe show an error toast
      console.error("Failed to resend email:", error);
      toast.error(t("CANT_SEND_EMAIL"));
    }
  };

  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.replace(`/${paths.signIn}`);
          },
        },
      });
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className="bg-background grid min-h-svh place-items-center px-4">
      <Card className="w-full max-w-md p-4">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold">{t("verify_email")}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <CardDescription className="text-center text-base">{t("verify_email_subtitle")}</CardDescription>

          <div className="flex flex-col gap-3">
            <Button
              className={cn("text-primary hover:text-primary/80")}
              disabled={isDisabled}
              onClick={handleResendEmail}
              variant="outline"
            >
              {isDisabled ? t("resend_email_countdown", { seconds: countdown }) : t("resend_email")}
            </Button>

            <Button className="text-muted-foreground hover:text-foreground" onClick={handleLogout} variant={null}>
              {t("logout")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
