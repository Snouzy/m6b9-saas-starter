"use client";

import { usePathname, useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LogoSvg } from "@/components/svg/LogoSvg";

import { SignInProviders } from "../../../auth/signin/SignInProviders";

export default function Page() {
  const router = useRouter();
  const path = usePathname();

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          router.back();
        }
      }}
      open={path.includes("/auth/signin")}
    >
      <DialogContent className="bg-card">
        <DialogHeader className="flex flex-col items-center justify-center gap-2">
          <LogoSvg className="w-32" />
          <DialogTitle>Connexion à votre compte</DialogTitle>
        </DialogHeader>
        <SignInProviders />
      </DialogContent>
    </Dialog>
  );
}
