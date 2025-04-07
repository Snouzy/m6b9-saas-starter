"use client";

import { ThemeProvider } from "next-themes";
import PlausibleProvider from "next-plausible";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { I18nProviderClient } from "locales/client";
import { SiteConfig } from "@/site-config";
import { DialogRenderer } from "@/features/dialogs-provider/DialogProvider";
import { Toaster } from "@/components/ui/sonner";

import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children, locale }: PropsWithChildren<{ locale: string }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProviderClient locale={locale}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <PlausibleProvider domain={SiteConfig.domain}>
            <SessionProvider>
              <Toaster />
              <DialogRenderer />
              {children}
            </SessionProvider>
          </PlausibleProvider>
        </ThemeProvider>
      </I18nProviderClient>
    </QueryClientProvider>
  );
};
