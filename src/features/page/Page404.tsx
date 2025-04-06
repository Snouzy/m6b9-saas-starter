import Link from "next/link";

import { getI18n } from "locales/server";

import { Typography } from "../../components/ui/typography";
import { buttonVariants } from "../../components/ui/button";

export async function Page404() {
  const t = await getI18n();

  return (
    <main className="flex flex-col items-center gap-8">
      <div className="space-y-3 text-center">
        <Typography variant="code">404</Typography>
        <Typography variant="h1">{t("page_404.title")}</Typography>
        <Typography variant="base">{t("page_404.description")}</Typography>
      </div>
      <div className="flex items-center gap-4">
        <Link className={buttonVariants({ variant: "default" })} href="/">
          {t("page_404.cta")}
        </Link>
        {/* <ContactSupportDialog /> */}
      </div>
    </main>
  );
}
