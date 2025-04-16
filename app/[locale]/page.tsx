import React from "react";

import { Footer } from "@/features/layout/Footer";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { FAQSection } from "@/features/landing/FAQSection";
import { serverAuth } from "@/entities/user/model/get-server-session-user";

export default async function HomePage() {
  const user = await serverAuth();

  return (
    <div className="bg-background text-foreground relative flex h-fit flex-col">
      <div className="mt-16" />
      <LandingHeader user={user} />
      <FAQSection />
      <Footer />
    </div>
  );
}
