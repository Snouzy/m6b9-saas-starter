"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { Typography } from "@/components/ui/typography";
import { Skeleton } from "@/components/ui/skeleton";
import { Divider } from "@/components/ui/divider";

import { SignInCredentialsAndMagicLinkForm } from "./SignInCredentialsAndMagicLinkForm";
import { ProviderButton } from "./ProviderButton";
import { MagicLinkForm } from "./MagicLinkForm";

export const SignInProviders = () => {
  const { data: providers, isPending } = useQuery({
    queryFn: () => fetch("/api/auth/providers").then((res) => res.json()),
    queryKey: ["providers"],
  });

  if (isPending) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-9" />
        <Divider>ou</Divider>
        <Skeleton className="h-11" />
      </div>
    );
  }

  if (typeof providers !== "object") {
    return <p>The providers are not available. Please check the configuration.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {!providers.credentials ? (
        <>
          <Typography variant="small">Magic link ✨</Typography>
          <MagicLinkForm />
          <Divider>ou</Divider>
        </>
      ) : null}

      {providers.credentials ? (
        <>
          <SignInCredentialsAndMagicLinkForm />
          <Divider>ou</Divider>
        </>
      ) : null}

      <div className="flex flex-col gap-2">{providers.google ? <ProviderButton providerId="google" variant="accent" /> : null}</div>
      {providers.credentials ? (
        <Typography className="text-center text-gray-400" variant="small">
          {"Vous n'avez pas de compte? "}{" "}
          <Typography as={Link} className="text-gray-400" href="/auth/signup" variant="link">
            {"S'inscrire"}
          </Typography>
        </Typography>
      ) : null}
    </div>
  );
};
