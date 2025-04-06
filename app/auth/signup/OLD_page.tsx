import { Suspense } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { SiteConfig } from "@/site-config";
import { auth } from "@/lib/auth/helper";
import { Typography } from "@/components/ui/typography";
import { Loader } from "@/components/ui/loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { SignUpCredentialsForm } from "./SignUpCredentialsForm";

export default async function AuthSignInPage() {
  const user = await auth();

  if (user) {
    redirect("/");
  }

  if (!SiteConfig.auth.password) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex h-full flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center gap-2">
          <Image alt="app logo" height={32} src={SiteConfig.appIcon} width={32} />
          <Link className="text-xl font-bold" href="/">
            {SiteConfig.title}
          </Link>
        </div>
      </header>
      <div className="flex flex-1 items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle>Sign up</CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<Loader />}>
              <SignUpCredentialsForm />
            </Suspense>

            <Typography className="mt-4" variant="small">
              You already have an account?{" "}
              <Typography as={Link} href="/auth/signin" variant="link">
                Sign in
              </Typography>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
