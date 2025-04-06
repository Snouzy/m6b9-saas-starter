import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/helper";

import { SignUpCredentialsForm } from "./SignUpCredentialsForm";

export const metadata = {
  title: "Sign Up - Front Fit Links",
  description: "Créez votre compte pour commencer",
};

export default async function AuthSignUpPage() {
  const user = await auth();

  if (user) {
    redirect("/");
  }

  return (
    <div className="container max-w-lg mx-auto py-8 px-4">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Créer un compte</h1>
        <p className="text-muted-foreground">Entrez vos informations ci-dessous pour créer votre compte</p>
      </div>

      <SignUpCredentialsForm />

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>
          En vous inscrivant, vous acceptez nos{" "}
          <a className="font-medium text-primary underline-offset-4 hover:underline" href="/terms">
            Conditions d&apos;utilisation
          </a>{" "}
          et notre{" "}
          <a className="font-medium text-primary underline-offset-4 hover:underline" href="/privacy">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
}
