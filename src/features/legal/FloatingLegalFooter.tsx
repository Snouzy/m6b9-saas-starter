import Link from "next/link";
import Image from "next/image";

import { SiteConfig } from "@/shared/config/site-config";

export const FloatingLegalFooter = () => {
  return (
    <div className="fixed bottom-2 right-2 flex items-center gap-2">
      <Link className="text-muted-foreground text-xs hover:underline" href="/legal/privacy">
        Privacy
      </Link>
      <Link className="text-muted-foreground text-xs hover:underline" href="/legal/terms">
        Terms
      </Link>
      <Image alt="app icon" height={12} src={SiteConfig.appIcon} width={12} />
    </div>
  );
};
