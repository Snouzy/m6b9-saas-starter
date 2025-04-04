import { MDXRemote } from "next-mdx-remote/rsc";

import { Layout, LayoutContent } from "@/features/page/layout";
import { Typography } from "@/components/ui/typography";

const markdown = "Terms Markdown";

export default function page() {
  return (
    <div>
      <div className="flex w-full items-center justify-center bg-card p-8 lg:p-12">
        <Typography variant="h1">Terms</Typography>
      </div>
      <Layout>
        <LayoutContent className="prose m-auto mb-8 dark:prose-invert">
          <MDXRemote source={markdown} />
        </LayoutContent>
      </Layout>
    </div>
  );
}
