import Link from "next/link";
import Image from "next/image";

import { SiteConfig } from "@/site-config";
import { requiredAuth } from "@/lib/auth/helper";
import { ThemeToggle } from "@/features/theme/ThemeToggle";
import { UserDropdown } from "@/features/auth/UserDropdown";
import { AuthButton } from "@/features/auth/AuthButton";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DASHBOARD_LINKS } from "./dashboard-links";

import type { PropsWithChildren } from "react";

import { MobileDropdownMenu } from "@/features/navigation/MobileDropdownMenu";
import { DesktopVerticalMenu } from "@/features/navigation/DesktopVerticalMenu";
import { ContactFeedbackPopover } from "@/features/contact/feedback/ContactFeedbackPopover";

export const DashboardNavigation = async (props: PropsWithChildren) => {
  const user = await requiredAuth();
  return (
    <div className="flex h-full flex-col lg:flex-row lg:overflow-hidden">
      {/* Desktop ONLY Navigation bar */}
      <div className="flex size-full max-w-[240px] flex-col border-r border-border px-2 py-4 max-lg:hidden">
        <div className="flex items-center gap-2">
          <Image alt="app logo" height={24} src={SiteConfig.appIcon} width={24} />
          <Link className="text-xl font-bold" href="/">
            {SiteConfig.title}
          </Link>
        </div>
        <div className="h-10" />
        <DesktopVerticalMenu links={DASHBOARD_LINKS} />
        <div className="flex-1" />
        <UserDropdown>
          <Button size="sm" variant="outline">
            <Avatar className="mr-2 size-6">
              <AvatarFallback>{user.email ? user.email.slice(0, 2) : "??"}</AvatarFallback>
              {user.image && <AvatarImage src={user.image} />}
            </Avatar>
            <span className="max-lg:hidden">{user.name}</span>
          </Button>
        </UserDropdown>
      </div>
      {/* Main container */}
      <div className="flex-1">
        {/* Header */}
        <header className="w-full border-b bg-background max-lg:sticky max-lg:top-0 max-lg:z-40">
          <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <div className="flex items-center gap-2 lg:hidden">
              <Image alt="app logo" height={32} src={SiteConfig.appIcon} width={32} />
              <Link className="text-lg font-bold " href="/">
                {SiteConfig.title}
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-end space-x-4">
              {/* Mobile header */}
              <nav className="flex items-center space-x-1 lg:hidden">
                <AuthButton />
                <ThemeToggle />
                <MobileDropdownMenu links={DASHBOARD_LINKS} />
              </nav>
              {/* Desktop header */}
              <nav className="flex items-center space-x-1 max-lg:hidden">
                <ContactFeedbackPopover>
                  <Button size="sm" variant="outline">
                    Feedback
                  </Button>
                </ContactFeedbackPopover>
                <ThemeToggle />
              </nav>
            </div>
          </div>
        </header>

        {/* Content of the page */}
        <main className="py-4 lg:max-h-[calc(100vh_-_64px)] lg:flex-1 lg:overflow-auto lg:py-8">{props.children}</main>
      </div>
    </div>
  );
};
