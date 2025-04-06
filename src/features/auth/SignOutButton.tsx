"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";

export const SignOutButton = () => {
  const router = useRouter();

  const logout = useMutation({
    mutationFn: () => signOut(),
    onSuccess: () => {
      router.push("/");
    },
  });

  return (
    <Button
      onClick={() => {
        logout.mutate();
      }}
      size="sm"
    >
      {logout.isPending ? <Loader className="mr-2 size-4" /> : <LogOut className="mr-2 size-4" />}
      Logout
    </Button>
  );
};
