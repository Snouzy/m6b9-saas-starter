import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Github } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { getServerUrl } from "@/lib/server-url";
import { Loader } from "@/components/ui/loader";
import { Button, ButtonProps } from "@/components/ui/button";
import { GoogleSvg } from "@/components/svg/GoogleSvg";

import type { ReactNode } from "react";

// ℹ️ Update this object with the providers you want to support
const ProviderData: Record<string, { icon: ReactNode; name: string }> = {
  github: {
    icon: <Github size={16} />,
    name: "Github",
  },
  google: {
    icon: <GoogleSvg size={16} />,
    name: "Google",
  },
};

type ProviderButtonProps = {
  providerId: string;
  variant: ButtonProps["variant"];
};

export const ProviderButton = (props: ProviderButtonProps) => {
  const searchParams = useSearchParams();

  const signInMutation = useMutation({
    mutationFn: () =>
      signIn(props.providerId, {
        callbackUrl: searchParams.get("callbackUrl") ?? `${getServerUrl()}/`,
      }),
  });

  const data = ProviderData[props.providerId];

  return (
    <Button
      onClick={() => {
        signInMutation.mutate();
      }}
      size="lg"
      variant="outline"
    >
      {signInMutation.isPending ? <Loader size={16} /> : data.icon}
      <span className="ml-2 text-base">Se connecter avec {data.name}</span>
    </Button>
  );
};
