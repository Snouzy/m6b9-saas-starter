import Link from "next/link";

import { Typography } from "../../components/ui/typography";
import { buttonVariants } from "../../components/ui/button";

export function Page404() {
  return (
    <main className="flex flex-col items-center gap-8">
      <div className="space-y-3 text-center">
        <Typography variant="code">404</Typography>
        <Typography variant="h1">Page not found</Typography>
        <Typography variant="base">
          Oops! This link seems to be broken. Let&apos;s get you back to creating your perfect link in bio page.
        </Typography>
      </div>
      <div className="flex items-center gap-4">
        <Link className={buttonVariants({ variant: "default" })} href="/">
          Go back home
        </Link>
        {/* <ContactSupportDialog /> */}
      </div>
    </main>
  );
}
