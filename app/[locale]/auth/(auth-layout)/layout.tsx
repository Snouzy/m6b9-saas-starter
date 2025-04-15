import { redirect } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";

import { getI18n } from "locales/server";
import { paths } from "@/shared/constants/paths";
import { auth } from "@/features/auth/lib/better-auth";
import { GroupedAnimation } from "@/components/ui/grouped-animation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LogoSvg } from "@/components/svg/LogoSvg";

import type { LayoutParams } from "@/shared/types/next";

export default async function AuthLayout(props: LayoutParams<{}>) {
  const t = await getI18n();

  const headerStore = await headers();
  const searchParams = Object.fromEntries(new URLSearchParams(headerStore.get("searchParams") || ""));
  const translatedError = t(`next_auth_errors.${searchParams.error}` as keyof typeof t);

  const user = await auth.api.getSession({ headers: headerStore });

  if (user) {
    redirect(`/${paths.dashboard}`);
  }

  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
        <div className="flex flex-col gap-4 bg-white p-4 md:p-10">
          <div className="flex justify-center gap-2 md:justify-start">
            <Link className="flex items-center gap-2 font-medium" href={`/${paths.dashboard}`}>
              <LogoSvg className="w-32" />
            </Link>
          </div>
          {searchParams.error && (
            <Alert className="mb-4" variant="error">
              <AlertTitle>{translatedError}</AlertTitle>
              <AlertDescription>{t("signin_error_subtitle")}</AlertDescription>
            </Alert>
          )}

          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-md">{props.children}</div>
          </div>
        </div>

        <div className="relative hidden bg-slate-100 lg:block">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="px- mx-auto max-w-3xl pb-12 text-center md:pb-16">
              <h2 className="h2 mb-4">{t("auth_layout_title")}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">{t("auth_layout_subtitle")}</p>
            </div>
            <GroupedAnimation />
          </div>
        </div>
      </div>
    </>
  );
}
