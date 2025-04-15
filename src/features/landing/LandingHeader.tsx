import Link from "next/link";
import { Menu } from "lucide-react";

import { getI18n } from "locales/server";
import { AuthButtonServer } from "@/features/auth/ui/AuthButtonServer";
import { SessionUser } from "@/entities/user/types/session-user";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoSvg } from "@/components/svg/LogoSvg";

export async function LandingHeader({ user }: { user: SessionUser | null }) {
  const t = await getI18n();

  return (
    <header className="fixed inset-x-0 z-50 flex h-10 w-screen shadow backdrop-blur-md">
      <div className="max-w-8xl mx-auto flex w-full items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Mobile Navigation Trigger - Now placed first */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="small" variant="outline">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]" side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4">
                  <Button asChild className="justify-start" variant="outline">
                    <a href="#">FAQ</a>
                  </Button>
                  <Button asChild className="justify-start" variant="outline">
                    <a href="#">Prix</a>
                  </Button>
                  <Button asChild className="justify-start" variant="outline">
                    <a href="#">Contact</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo - Now second */}
          <div className="flex items-center gap-1">
            <LogoSvg className="h-8 w-24 md:w-32" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="text-muted-foreground hidden items-center gap-4 text-sm font-medium md:flex">
          <Button asChild className="font-semibold" variant="outline">
            <a href="#">FAQ</a>
          </Button>
          <Button asChild className="font-semibold" variant="outline">
            <a href="#">Prix</a>
          </Button>
          <Button asChild className="font-semibold" variant="outline">
            <a href="#">Contact</a>
          </Button>
        </nav>

        {/* Auth and Theme */}
        <nav className="flex items-center gap-4">
          {user ? (
            <Link className={buttonVariants({ variant: "outline" })} href="/dashboard">
              <Avatar className="mr-2 size-6">
                <AvatarFallback>{user.email ? user.email.slice(0, 2) : "??"}</AvatarFallback>
                {user.image && <AvatarImage src={user.image} />}
              </Avatar>
              {t("open_app")}
            </Link>
          ) : (
            <AuthButtonServer />
          )}
        </nav>
      </div>
    </header>
  );
}
