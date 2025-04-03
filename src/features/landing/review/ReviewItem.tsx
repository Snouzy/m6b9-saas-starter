import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import type { ComponentPropsWithoutRef } from "react";

export type ReviewItemProps = {
  /**
   * The review of the user. Use **bold** text to highlight.
   */
  review: string;
  /**
   * The name of the user.
   */
  name: string;
  /**
   * The role of the user. (his job)
   */
  role: string;
  /**
   * The image of the user.
   */
  image: string;
} & ComponentPropsWithoutRef<"div">;

export const ReviewItem = ({ className, ...props }: ReviewItemProps) => {
  return (
    <Card className={cn("h-fit", className)} {...props}>
      <CardHeader>
        <Typography className="citation">{props.review}</Typography>
      </CardHeader>
      <CardContent className="flex items-center gap-2 rounded-lg bg-background pt-6">
        <div>
          <Avatar>
            <AvatarFallback>{props.name[0]}</AvatarFallback>
            <AvatarImage alt="user image" src={props.image} />
          </Avatar>
        </div>
        <div>
          <Typography variant="small">{props.name}</Typography>
          <Typography variant="muted">{props.role}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
