"use client";

import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { getServerUrl } from "@/shared/lib/server-url";
import { authClient } from "@/features/auth/lib/auth-client";
import { Loader } from "@/components/ui/loader";
import { Button, ButtonProps } from "@/components/ui/button";
import { GoogleSvg } from "@/components/svg/GoogleSvg";

import type { ReactNode } from "react";

const ProviderData: Record<string, { icon: ReactNode; name: string }> = {
  google: {
    icon: <GoogleSvg size={16} />,
    name: "Google",
  },
};

type ProviderButtonProps = {
  providerId: string;
  variant: ButtonProps["variant"];
  action: "signin" | "signup";
  className?: string;
};

export const ProviderButton = (props: ProviderButtonProps) => {
  const t = useI18n();

  const searchParams = useSearchParams();

  const signInMutation = useMutation({
    mutationFn: async () => {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: searchParams.get("callbackUrl") ?? `${getServerUrl()}/`,
      });
    },
  });

  const data = ProviderData[props.providerId];

  const traduction = props.action === "signin" ? t("signin_with", { provider: data.name }) : t("signup_with", { provider: data.name });
  return (
    <Button
      className={props.className}
      onClick={() => {
        signInMutation.mutate();
      }}
      size="large"
      variant="outline"
    >
      {signInMutation.isPending ? <Loader size={16} /> : data.icon}
      <span className="ml-2 text-base">{traduction}</span>
    </Button>
  );
};
