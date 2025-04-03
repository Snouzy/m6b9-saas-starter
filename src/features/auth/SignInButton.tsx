"use client";

import { useIsClient } from "usehooks-ts";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { displayName } from "@/lib/format/displayName";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UserDropdown } from "./UserDropdown";

import type { VariantProps } from "class-variance-authority";

const useHref = () => {
  const isClient = useIsClient();

  if (!isClient) {
    return "";
  }

  const href = `${window.location.href}dashboard`;

  return `${href}`;
};

export const SignInButton = (props: VariantProps<typeof buttonVariants>) => {
  const href = useHref();

  return (
    <Button asChild Icon={ArrowRightIcon} iconPlacement="right" variant="expandIcon">
      <Link className={buttonVariants({ size: "sm", ...props })} href={`/auth/signin?callbackUrl=${href}`}>
        Sign in
      </Link>
    </Button>
  );
};

export const AuthButtonClient = () => {
  const session = useSession();

  if (session.data?.user) {
    const user = session.data.user;
    return <LoggedInButton user={user} />;
  }

  return <SignInButton />;
};

export const LoggedInButton = ({
  user,
}: {
  user: {
    name?: string | null;
    email: string;
    image?: string | null;
  };
}) => {
  return (
    <UserDropdown>
      <Button size="sm" variant="outline">
        <Avatar className="mr-2 size-6 bg-card">
          <AvatarFallback className="bg-card">{user.email.slice(0, 1).toUpperCase()}</AvatarFallback>
          {user.image && <AvatarImage src={user.image} />}
        </Avatar>
        <span className="max-lg:hidden">{displayName(user)}</span>
      </Button>
    </UserDropdown>
  );
};
