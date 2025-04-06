import { redirect } from "next/navigation";

import { getI18n } from "locales/server";
import { auth } from "@/lib/auth/helper";

import { SignUpCredentialsForm } from "./SignUpCredentialsForm";

export const metadata = {
  title: "Sign Up - Front Fit Links",
  description: "Créez votre compte pour commencer",
};

export default async function AuthSignUpPage() {
  const user = await auth();
  const t = await getI18n();

  if (user) {
    redirect("/");
  }

  return (
    <div className="container max-w-lg mx-auto py-8 px-4">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{t("register_title")}</h1>
        <p className="text-muted-foreground">{t("register_description")}</p>
      </div>

      <SignUpCredentialsForm />

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          {t("register_terms")}{" "}
          <a className="font-medium text-primary underline-offset-4 hover:underline" href="/terms">
            {t("register_privacy")}
          </a>{" "}
          {t("register_privacy_link")}{" "}
          <a className="font-medium text-primary underline-offset-4 hover:underline" href="/privacy">
            {t("register_privacy_link_2")}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
