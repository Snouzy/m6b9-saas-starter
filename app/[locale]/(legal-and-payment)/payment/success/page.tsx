import Link from "next/link";

import { Layout, LayoutContent, LayoutDescription, LayoutHeader, LayoutTitle } from "@/features/page/layout";
import { buttonVariants } from "@/components/ui/button";

export default function SuccessPaymentPage() {
  return (
    <>
      <Layout>
        <LayoutHeader>
          <LayoutTitle>Thank You for Your Purchase!</LayoutTitle>
          <LayoutDescription>
            Your payment was successful! You now have full access to all our premium resources. If you have any questions, we&apos;re here
            to help.
          </LayoutDescription>
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
