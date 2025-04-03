"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

import { SiteConfig } from "@/site-config";
import { LogoSvg } from "@/components/svg/LogoSvg";

import { ThemeToggle } from "../theme/ThemeToggle";
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

export function LandingHeader() {
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const scrollYBoundedProgressDelayed = useTransform(scrollYBoundedProgress, [0, 0.75, 1], [0, 0, 1]);

  return (
    <motion.header
      className="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md"
      style={{
        height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [80, 50]),
      }}
    >
      <div className="max-w-8xl mx-auto flex w-full items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-1">
          <LogoSvg size={24} />
          <motion.p
            className="flex origin-left items-center text-xl  font-semibold uppercase text-orange-600 max-sm:hidden"
            style={{
              scale: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0.9]),
            }}
          >
            {SiteConfig.title}
          </motion.p>
        </div>
        <motion.nav
          className="flex items-center gap-4 text-sm font-medium text-muted-foreground"
          style={{
            opacity: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0]),
          }}
        >
          <a href="#">Accueil</a>
          <a href="/posts">Blog</a>
          <a href="#">Expertise</a>
          <a href="#">Méthodologie</a>
          <a href="#">Prestation</a>
          <a href="#">Projets</a>
        </motion.nav>
        <motion.nav
          className="flex items-center gap-4 text-sm font-medium text-muted-foreground"
          style={{
            opacity: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0]),
          }}
        >
          <SignInButton variant="expandIcon" />
          <ThemeToggle />
        </motion.nav>
      </div>
    </motion.header>
  );
}

const clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);
