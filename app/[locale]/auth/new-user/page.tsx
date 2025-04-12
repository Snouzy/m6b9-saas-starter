import { redirect } from "next/navigation";
import Link from "next/link";

import { Layout, LayoutContent, LayoutDescription, LayoutHeader, LayoutTitle } from "@/features/page/layout";
import { Header } from "@/features/layout/Header";
import { buttonVariants } from "@/components/ui/button";

interface NewUserPageParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

/**
 * This page is show when a user loggin. You can add an onboarding process here.
 */
export default async function NewUserPage({ searchParams }: NewUserPageParams) {
  const resolvedParams = await searchParams;
  const callbackUrl = typeof resolvedParams.callbackUrl === "string" ? resolvedParams.callbackUrl : "/";

  redirect(callbackUrl);

  return (
    <>
      <Header />
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Successfully login</LayoutTitle>
          <LayoutDescription>You can now use the app</LayoutDescription>
        </LayoutHeader>
        <LayoutContent>
          <Link className={buttonVariants({ size: "lg" })} href="/">
            Get Started
          </Link>
        </LayoutContent>
      </Layout>
    </>
  );
}
