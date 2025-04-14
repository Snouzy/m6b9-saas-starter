import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { User } from "@prisma/client";

import { displayName } from "@/lib/format/displayName";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { UserDropdown } from "./UserDropdown";

import type { VariantProps } from "class-variance-authority";

export const SignInButton = (props: VariantProps<typeof buttonVariants>) => {
  return (
    <Button asChild Icon={ArrowRightIcon} iconPlacement="right" variant="outline">
      <Link className={buttonVariants({ size: "sm", ...props })} href={"/auth/signin?callbackUrl=/dashboard"}>
        Se connecter
      </Link>
    </Button>
  );
};

export const LoggedInButton = ({ user, showName = true }: { user: User; showName?: boolean }) => {
  return (
    <UserDropdown>
      <Button size="sm" variant="outline">
        <Avatar className="size-6 bg-card hover:cursor-pointer lg:mr-2">
          <AvatarFallback className="bg-card">{user.email.slice(0, 1).toUpperCase()}</AvatarFallback>
          {user.image && <AvatarImage src={user.image} />}
        </Avatar>
        {showName && <span className="max-lg:hidden">{displayName(user)}</span>}
      </Button>
    </UserDropdown>
  );
};
