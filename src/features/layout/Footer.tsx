import Link from "next/link";

import { SiteConfig } from "@/site-config";
import { Layout, LayoutContent } from "@/features/page/layout";
import { Typography } from "@/components/ui/typography";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Layout className="mt-24 py-12">
        <LayoutContent className="flex justify-between max-lg:flex-col">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <Typography variant="h3">{SiteConfig.title}</Typography>
              <Typography variant="base">{SiteConfig.company.name}</Typography>
              <Typography variant="base">{SiteConfig.company.address}</Typography>
            </div>
            <Typography className="italic" variant="muted">
              © {new Date().getFullYear()} {SiteConfig.company.name} - All rights reserved.
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Typography variant="large">Site Map</Typography>
            <Typography as={Link} className="hover:underline" href="#" variant="muted">
              Home
            </Typography>
            <Typography as={Link} className="hover:underline" href="/legal/privacy" variant="muted">
              Blog
            </Typography>
            <Typography as={Link} className="hover:underline" href="#" variant="muted">
              Expertise
            </Typography>
            <Typography as={Link} className="hover:underline" href="/legal/terms" variant="muted">
              Méthodologie
            </Typography>
            <Typography as={Link} className="hover:underline" href="/legal/terms" variant="muted">
              Projets
            </Typography>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Typography variant="large">Legal</Typography>
            <Typography as={Link} className="hover:underline" href="/legal/terms" variant="muted">
              Terms
            </Typography>
            <Typography as={Link} className="hover:underline" href="/legal/privacy" variant="muted">
              Privacy
            </Typography>
          </div>
        </LayoutContent>
      </Layout>
    </footer>
  );
};
