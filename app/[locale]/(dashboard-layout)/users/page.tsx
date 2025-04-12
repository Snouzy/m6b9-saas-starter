import { Layout, LayoutActions, LayoutContent, LayoutDescription, LayoutHeader, LayoutTitle } from "@/features/page/layout";
import { Typography } from "@/components/ui/typography";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RoutePage() {
  return (
    <Layout>
      <LayoutHeader>
        <LayoutTitle>Title of the page</LayoutTitle>
        <LayoutDescription>Description of the page</LayoutDescription>
      </LayoutHeader>
      <LayoutActions className="flex gap-2">
        <Button variant="outline">Delete</Button>
        <Button variant="ghost">Create</Button>
      </LayoutActions>
      <LayoutContent className="flex flex-col gap-2">
        <Typography variant="large">There is the content of the page, such as text cards, etc.</Typography>
        <Card>
          <CardHeader>
            <CardTitle>Content of the page</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis aliquid nemo iure deserunt delectus odit quisquam dicta
              error! Tempore dolorem deleniti eos ea a iure maxime sed cum vitae labore.
            </CardDescription>
          </CardHeader>
        </Card>
      </LayoutContent>
    </Layout>
  );
}
