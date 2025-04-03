import Link from "next/link";
import Image from "next/image";

import { SiteConfig } from "@/site-config";

export const FloatingLegalFooter = () => {
  return (
    <div className="fixed bottom-2 right-2 flex items-center gap-2">
      <Link className="text-xs text-muted-foreground hover:underline" href="/legal/privacy">
        Privacy
      </Link>
      <Link className="text-xs text-muted-foreground hover:underline" href="/legal/terms">
        Terms
      </Link>
      <Image alt="app icon" height={12} src={SiteConfig.appIcon} width={12} />
    </div>
  );
};
