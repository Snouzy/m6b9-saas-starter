import { redirect } from "next/navigation";
import { AlertTriangle } from "lucide-react";

import { getI18n } from "locales/server";
import { auth } from "@/lib/auth/helper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LogoSvg } from "@/components/svg/LogoSvg";

import { getError } from "../error/auth-error-mapping";
import { SignInProviders } from "./SignInProviders";

export default async function AuthSignInPage({ params }: { params: Promise<{ error: string }> }) {
  const t = await getI18n();
  const { error } = await params;
  const { errorMessage, error: errorCode } = getError(error);

  const user = await auth();

  if (user) {
    redirect("/account");
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-col items-center justify-center gap-2">
            <LogoSvg className="w-32" />
            <CardTitle>{t("signin_title")}</CardTitle>
          </CardHeader>
          <CardContent className="mt-8">
            <SignInProviders />
          </CardContent>
          {error ? (
            <Alert>
              <AlertTriangle size={16} />
              <AlertDescription>{error}</AlertDescription>
              <AlertTitle>{errorMessage}</AlertTitle>
            </Alert>
          ) : null}
        </Card>
      </div>
    </div>
  );
}
