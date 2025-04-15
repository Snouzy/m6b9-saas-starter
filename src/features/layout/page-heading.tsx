import { cn } from "@/shared/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

type PageHeadingProps = {
  heading: string;
  className?: string;
};

const PageHeading = ({ heading, className }: PageHeadingProps) => {
  return (
    <Card className={cn("px-5 py-3.5 text-base/5 font-semibold text-black shadow-sm dark:text-white", className)}>
      <CardContent>{heading}</CardContent>
    </Card>
  );
};

export default PageHeading;
