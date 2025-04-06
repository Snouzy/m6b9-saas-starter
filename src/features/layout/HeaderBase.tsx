import { LogoSvg } from "@/components/svg/LogoSvg";

import type { PropsWithChildren } from "react";

export function HeaderBase({ children }: PropsWithChildren) {
  return (
    <header className="sticky top-0 w-full border-b-4 border-black bg-background shadow-brutal">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <LogoSvg className="h-8 w-24 md:w-32" />
        </div>

        <nav className="flex items-center space-x-3">{children}</nav>
      </div>
    </header>
  );
}
