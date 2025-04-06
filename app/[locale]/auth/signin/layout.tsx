import { headers } from "next/headers";

import { getI18n } from "locales/server";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import type { LayoutParams } from "@/types/next";

export default async function SignInLayout(props: LayoutParams<{}>) {
  const t = await getI18n();

  const headerStore = await headers();
  const searchParams = Object.fromEntries(new URLSearchParams(headerStore.get("searchParams") || ""));
  const translatedError = t(`next_auth_errors.${searchParams.error}` as keyof typeof t);

  return (
    <>
      {searchParams.error && (
        <Alert className="mb-4" variant="error">
          <AlertTitle>{translatedError}</AlertTitle>
          <AlertDescription>{t("signin_error_subtitle")}</AlertDescription>
        </Alert>
      )}

      {props.children}
    </>
  );
}
