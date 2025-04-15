"use client";

import PlausibleProvider from "next-plausible";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { I18nProviderClient } from "locales/client";
import { SiteConfig } from "@/shared/config/site-config";
import { DialogRenderer } from "@/features/dialogs-provider/DialogProvider";
import { ToastSonner } from "@/components/ui/ToastSonner";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ui/theme-provider";

import type { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export const Providers = ({ children, locale }: PropsWithChildren<{ locale: string }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProviderClient locale={locale}>
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          <PlausibleProvider domain={SiteConfig.domain}>
            <Toaster />
            <ToastSonner />
            <DialogRenderer />
            {children}
          </PlausibleProvider>
        </ThemeProvider>
      </I18nProviderClient>
    </QueryClientProvider>
  );
};
