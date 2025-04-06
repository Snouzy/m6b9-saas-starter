"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { User } from "@prisma/client";

import { useI18n } from "locales/client";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogoSvg } from "@/components/svg/LogoSvg";

import { SignInButton } from "../auth/SignInButton";

function useBoundedScroll(threshold: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(scrollYBounded, [0, threshold], [0, 1]);

  useEffect(() => {
    const onChange = (current: number) => {
      const previous = scrollY.getPrevious() ?? 0;
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;

      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    };

    const deleteEvent = scrollY.on("change", onChange);

    const listener = () => {
      const currentScroll = window.scrollY;
      onChange(currentScroll);
    };

    window.addEventListener("scroll", listener);

    return () => {
      deleteEvent();
      window.removeEventListener("scroll", listener);
    };
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export function LandingHeader({ user }: { user: User | null }) {
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(scrollYBoundedProgress, [0, 0.75, 1], [0, 0, 1]);
  const t = useI18n();

  return (
    <motion.header
      className="fixed inset-x-0 z-50 flex h-10 w-screen shadow backdrop-blur-md"
      style={{
        height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [55, 50]),
      }}
    >
      <div className="max-w-8xl mx-auto flex w-full items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Mobile Navigation Trigger - Now placed first */}
          <motion.div
            className="md:hidden"
            style={{
              opacity: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0.8]),
            }}
          >
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]" side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 py-4">
                  <Button asChild className="justify-start" variant="ghost">
                    <a href="#">FAQ</a>
                  </Button>
                  <Button asChild className="justify-start" variant="ghost">
                    <a href="#">Prix</a>
                  </Button>
                  <Button asChild className="justify-start" variant="ghost">
                    <a href="#">Contact</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>

          {/* Logo - Now second */}
          <motion.div className="flex items-center gap-1">
            <LogoSvg className="h-8 w-24 md:w-32" />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden items-center gap-4 text-sm font-medium text-muted-foreground md:flex"
          style={{
            opacity: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0.8]),
          }}
        >
          <Button asChild className="font-semibold" variant="ghost">
            <a href="#">FAQ</a>
          </Button>
          <Button asChild className="font-semibold" variant="ghost">
            <a href="#">Prix</a>
          </Button>
          <Button asChild className="font-semibold" variant="ghost">
            <a href="#">Contact</a>
          </Button>
        </motion.nav>

        {/* Auth and Theme */}
        <motion.nav
          className="flex items-center gap-4"
          style={{
            opacity: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0.8]),
          }}
        >
          {user ? (
            <Link className={buttonVariants({ variant: "outline" })} href="/dashboard">
              <Avatar className="mr-2 size-6">
                <AvatarFallback>{user.email ? user.email.slice(0, 2) : "??"}</AvatarFallback>
                {user.image && <AvatarImage src={user.image} />}
              </Avatar>
              {t("open_app")}
            </Link>
          ) : (
            <SignInButton variant="ghost" />
          )}
        </motion.nav>
      </div>
    </motion.header>
  );
}

const clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);
