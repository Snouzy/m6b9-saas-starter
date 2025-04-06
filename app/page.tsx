import React from "react";

import { Footer } from "@/features/layout/Footer";
import { PromoteSection } from "@/features/landing/PromoteSection";
import { NewHero } from "@/features/landing/NewHero";
import { LandingHeader } from "@/features/landing/LandingHeader";
import { FAQSection } from "@/features/landing/FAQSection";
import { ConvertSection } from "@/features/landing/ConvertSection";
import { BusinessCategories } from "@/features/landing/business-categories";
import { BentoSection } from "@/features/landing/BentoSection";
export default function HomePage() {
  return (
    <div className="relative flex h-fit flex-col bg-background text-foreground">
      <div className="mt-16" />
      <LandingHeader />
      <NewHero />
      <BusinessCategories />
      <PromoteSection />
      <ConvertSection />
      <BentoSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
