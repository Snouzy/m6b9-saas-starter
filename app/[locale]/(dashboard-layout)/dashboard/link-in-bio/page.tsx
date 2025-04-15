import Link from "next/link";

import { paths } from "@/shared/constants/paths";
import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/features/page/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export default async function RoutePage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Link in bio</LayoutTitle>
      </LayoutHeader>
      <LayoutContent>
        <div className="flex flex-wrap items-start gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-lg font-light">Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Link
                className={buttonVariants({ size: "small", variant: "outline" })}
                href={`/${paths.dashboard}/${paths.linkInBio}/${paths.editor}`}
              >
                Éditer mes liens
              </Link>
            </CardContent>
          </Card>
        </div>
      </LayoutContent>
    </Layout>
  );
}
