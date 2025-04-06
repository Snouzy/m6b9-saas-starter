import Link from "next/link";

import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/features/page/layout";
import { HeaderBase } from "@/features/layout/HeaderBase";
import { ContactSupportDialog } from "@/features/contact/support/ContactSupportDialog";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import { getError } from "./auth-error-mapping";

export default async function AuthErrorPage({ params }: { params: Promise<{ error: string }> }) {
  const { error } = await params;
  const { errorMessage, error: errorCode } = getError(error);

  return (
    <div className="flex h-full flex-col">
      <HeaderBase />
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Authentification Error</LayoutTitle>
        </LayoutHeader>
        <LayoutContent>
          <Card variant="error">
            <CardHeader>
              <CardDescription>{errorCode}</CardDescription>
              <CardTitle>{errorMessage}</CardTitle>
            </CardHeader>
            <CardFooter className="flex items-center gap-2">
              <Link className={buttonVariants({ size: "sm" })} href="/">
                Home
              </Link>
              <ContactSupportDialog />
            </CardFooter>
          </Card>
        </LayoutContent>
      </Layout>
    </div>
  );
}
