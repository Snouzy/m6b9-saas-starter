import Link from "next/link";

import { Layout, LayoutContent, LayoutDescription, LayoutHeader, LayoutTitle } from "@/features/page/layout";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CancelPaymentPage() {
  return (
    <Layout>
      <LayoutHeader>
        <Badge variant="outline">Payment failed</Badge>
        <LayoutTitle>We&apos;re sorry, but we couldn&apos;t process your payment</LayoutTitle>
        <LayoutDescription>
          We encountered an issue processing your payment.
          <br /> Please check your payment details and try again. <br />
          If the problem persists, don&apos;t hesitate to contact us for assistance.
          <br />
          We&apos;re here to help you resolve this smoothly.
        </LayoutDescription>
      </LayoutHeader>
      <LayoutContent className="flex items-center gap-2">
        <Link className={buttonVariants({ variant: "default" })} href="/">
          Home
        </Link>
        {/* <ContactSupportDialog /> */}
      </LayoutContent>
    </Layout>
  );
}
