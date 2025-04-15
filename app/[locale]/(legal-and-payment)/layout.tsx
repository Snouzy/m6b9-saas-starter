"use client";

import { LayoutParams } from "@/shared/types/next";
import { Footer } from "@/features/layout/Footer";
import { LandingHeader } from "@/features/landing/LandingHeader";

type LocaleParams = Record<string, string> & {
  locale: string;
};

export default function RouteLayout({ children, params: _ }: LayoutParams<LocaleParams>) {
  return (
    <div className="bg-background text-foreground relative flex h-full flex-col">
      <div className="mt-16" />
      <LandingHeader user={null} />

      {children}

      <Footer />
    </div>
  );
}
