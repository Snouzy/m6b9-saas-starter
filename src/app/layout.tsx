import PlausibleProvider from "next-plausible";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { SiteConfig } from "@/site-config";
import { cn } from "@/lib/utils";
import { getServerUrl } from "@/lib/server-url";

import { Providers } from "./providers";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import type { LayoutParams } from "@/types/next";

import { NextTopLoader } from "@/features/page/NextTopLoader";
import { FloatingLegalFooter } from "@/features/legal/FloatingLegalFooter";
import { TailwindIndicator } from "@/components/utils/TailwindIndicator";

import "./code-theme.scss";
import "./globals.scss";

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({ children, modal }: LayoutParams<{}> & { modal?: ReactNode }) {
  return (
    <>
      <html className="h-full" lang="en" suppressHydrationWarning>
        <head>
          <PlausibleProvider domain={SiteConfig.domain} />
        </head>
        <body className={cn("h-full bg-background font-sans antialiased", GeistMono.variable, GeistSans.variable)}>
          <Providers>
            <NextTopLoader color="hsl(var(--primary))" delay={100} showSpinner={false} />
            {children}
            {modal}
            <TailwindIndicator />
            <FloatingLegalFooter />
          </Providers>
        </body>
      </html>
    </>
  );
}
