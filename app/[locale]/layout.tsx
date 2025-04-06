import PlausibleProvider from "next-plausible";
import localFont from "next/font/local";
import { Inter, Permanent_Marker } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { SiteConfig } from "@/site-config";
import { cn } from "@/lib/utils";
import { getServerUrl } from "@/lib/server-url";
import { NextTopLoader } from "@/features/page/NextTopLoader";
import { TailwindIndicator } from "@/components/utils/TailwindIndicator";

import { Providers } from "./providers";

import type { ReactElement, ReactNode } from "react";
import type { Metadata } from "next";

import "../css/globals.css";

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

const hkgrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/HKGrotesk-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/HKGrotesk-ExtraBold.woff2",
      weight: "800",
    },
  ],
  variable: "--font-hkgrotesk",
  display: "swap",
});

export const preferredRegion = ["fra1", "sfo1", "iad1"];

interface RootLayoutProps {
  params: Promise<{ locale: string }>;
  children: ReactElement;
  modal?: ReactNode;
}

export default async function RootLayout({ params, children, modal }: RootLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <html className="h-full" lang="en" suppressHydrationWarning>
        <head>
          <PlausibleProvider domain={SiteConfig.domain} />
        </head>
        <body
          className={cn(
            "h-full bg-background font-sans antialiased",
            GeistMono.variable,
            GeistSans.variable,
            inter.variable,
            permanentMarker.variable,
            hkgrotesk.variable,
          )}
          suppressHydrationWarning
        >
          <Providers locale={locale}>
            <NextTopLoader color="hsl(var(--primary))" delay={100} showSpinner={false} />
            <div className="h-full">
              {children}
              {modal}
            </div>
            <TailwindIndicator />
            {/* <FloatingLegalFooter /> */}
          </Providers>
        </body>
      </html>
    </>
  );
}
