"use client";

import { ThemeProvider } from "next-themes";
import PlausibleProvider from "next-plausible";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SiteConfig } from "@/site-config";

import type { PropsWithChildren } from "react";

import { DialogRenderer } from "@/features/dialogs-provider/DialogProvider";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <PlausibleProvider domain={SiteConfig.domain}>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <Toaster />
            <DialogRenderer />
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </PlausibleProvider>
    </ThemeProvider>
  );
};
