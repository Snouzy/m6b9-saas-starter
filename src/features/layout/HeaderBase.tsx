import Link from "next/link";
import Image from "next/image";

import { SiteConfig } from "@/site-config";

import { ThemeToggle } from "../theme/ThemeToggle";

import type { PropsWithChildren } from "react";

export function HeaderBase({ children }: PropsWithChildren) {
  return (
    <header className="sticky top-0 w-full border-b-4 border-black bg-background shadow-brutal">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center justify-center rounded-none border-2 border-black bg-white p-1 shadow-brutal">
            <Image alt="app logo" height={28} src={SiteConfig.appIcon} width={28} />
          </div>

          <Link className="text-xl tracking-wide text-black hover:underline" href="/">
            {SiteConfig.title}
          </Link>
        </div>

        <nav className="flex items-center space-x-3">
          {children}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
