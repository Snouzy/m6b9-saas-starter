import Link from "next/link";
import Image from "next/image";

import { SiteConfig } from "@/site-config";

import { ThemeToggle } from "../theme/ThemeToggle";

import type { PropsWithChildren } from "react";

export function HeaderBase({ children }: PropsWithChildren) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center gap-2">
          <Image alt="app logo" height={32} src={SiteConfig.appIcon} width={32} />
          <Link className="text-xl font-bold" href="/">
            {SiteConfig.title}
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {children}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
