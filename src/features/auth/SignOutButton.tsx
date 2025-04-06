"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  const logout = useMutation({
    mutationFn: () => signOut({ redirect: true, callbackUrl: "/" }),
  });

  const handleLogout = () => {
    logout.mutateAsync();
  };

  return (
    <Button onClick={handleLogout} size="sm">
      {logout.isPending ? <Loader className="mr-2 size-4" /> : <LogOut className="mr-2 size-4" />}
      Logout
    </Button>
  );
};
