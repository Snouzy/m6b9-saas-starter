import Link from "next/link";

import { Typography } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";

import { SectionLayout } from "../SectionLayout";

export function CtaSection() {
  return (
    <SectionLayout className="lg:flex lg:items-center lg:justify-between lg:px-8">
      <Typography variant="h3">
        <Typography as="span" variant="h2">
          Ready to create your link in bio?
        </Typography>
        <br />
        <span className="text-muted-foreground">Start connecting with your audience today.</span>
      </Typography>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
        <Link className={buttonVariants({ size: "lg" })} href="#pricing">
          Get started
        </Link>
      </div>
    </SectionLayout>
  );
}
