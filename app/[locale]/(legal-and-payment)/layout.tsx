"use client";

import { LayoutParams } from "@/types/next";
import { Footer } from "@/features/layout/Footer";
import { LandingHeader } from "@/features/landing/LandingHeader";

type LocaleParams = Record<string, string> & {
  locale: string;
};

export default function RouteLayout({ children, params: _ }: LayoutParams<LocaleParams>) {
  return (
    <div className="relative flex flex-col bg-background text-foreground h-full">
      <div className="mt-16" />
      <LandingHeader user={null} />

      {children}

      <Footer />
    </div>
  );
}
