"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, LogOut, User2 } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { useI18n } from "locales/client";
import { authClient } from "@/utils/auth-client";
import { Loader } from "@/components/ui/loader";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import type { PropsWithChildren } from "react";

export const UserDropdown = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const logout = useMutation({
    mutationFn: async () =>
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.replace("/"); // redirect to login page
          },
        },
      }),
  });

  const t = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("profile")}</DropdownMenuLabel>
        <DropdownMenuItem asChild>
          <Link href="/account">
            <User2 className="mr-2 size-4" />
            {t("my_account")}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">
            <LayoutDashboard className="mr-2 size-4" />
            {t("dashboard")}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              logout.mutate();
            }}
          >
            {logout.isPending ? <Loader className="mr-2 size-4" /> : <LogOut className="mr-2 size-4" />}
            <span>{t("commons.logout")}</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
