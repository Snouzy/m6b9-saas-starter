"use client";

import { PropsWithChildren } from "react";
import { User } from "@prisma/client";

import { Footer } from "@/features/layout/Footer";
import { LandingHeader } from "@/features/landing/LandingHeader";

interface RouteLayoutProps {
  params: Promise<{ locale: string }>;
  user: User | null;
}

export default function RouteLayout({ children, user }: PropsWithChildren<RouteLayoutProps>) {
  return (
    <div className="relative flex flex-col bg-background text-foreground h-full">
      <div className="mt-16" />
      <LandingHeader user={user} />

      {children}

      <Footer />
    </div>
  );
}
