import Link from "next/link";

import { Layout, LayoutContent, LayoutHeader, LayoutTitle } from "@/features/page/layout";
import { Screens } from "@/constants/screen";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
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
                className={buttonVariants({ size: "sm", variant: "outline" })}
                href={`/${Screens.dashboard}/${Screens.linkInBio}/${Screens.editor}`}
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
