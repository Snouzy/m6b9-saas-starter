import PlausibleProvider from "next-plausible";
import { Inter, Permanent_Marker } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { cn } from "@/shared/lib/utils";
import { getServerUrl } from "@/shared/lib/server-url";
import { SiteConfig } from "@/shared/config/site-config";
import { NextTopLoader } from "@/features/page/NextTopLoader";
import { TailwindIndicator } from "@/components/utils/TailwindIndicator";

import { Providers } from "./providers";

import type { ReactElement } from "react";
import type { Metadata } from "next";

import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  metadataBase: new URL(getServerUrl()),
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

export const preferredRegion = ["fra1", "sfo1", "iad1"];

interface RootLayoutProps {
  params: Promise<{ locale: string }>;
  children: ReactElement;
}

export default async function RootLayout({ params, children }: RootLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <html className="h-full" dir="ltr" lang="en" suppressHydrationWarning>
        <head>
          <PlausibleProvider domain={SiteConfig.domain} />
        </head>
        <body
          className={cn(
            "bg-gray-400 text-sm/[22px] font-normal text-black antialiased dark:bg-black dark:text-gray-500",
            GeistMono.variable,
            GeistSans.variable,
            inter.variable,
            permanentMarker.variable,
          )}
          suppressHydrationWarning
        >
          <Providers locale={locale}>
            <NextTopLoader color="#FF5722" delay={100} showSpinner={false} />
            <div className="h-full">{children}</div>
            <TailwindIndicator />
            {/* <FloatingLegalFooter /> */}
          </Providers>
        </body>
      </html>
    </>
  );
}
