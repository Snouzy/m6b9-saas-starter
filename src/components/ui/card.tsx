import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { VariantProps } from "class-variance-authority";

const cardVariants = cva("rounded-lg shadow-sm", {
  variants: {
    variant: {
      default: "border bg-card text-card-foreground",
      background: "text-background-foreground border bg-background",
      error: "border border-destructive bg-background text-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>>(
  ({ className, variant, ...props }, ref) => <div className={cn(cardVariants({ variant }), className)} ref={ref} {...props} />,
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} ref={ref} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
  <h3 className={cn("text-2xl font-semibold leading-none tracking-tight", className)} ref={ref} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p className={cn("text-sm text-muted-foreground", className)} ref={ref} {...props} />,
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div className={cn("flex items-center p-6 pt-0", className)} ref={ref} {...props} />
));
CardFooter.displayName = "CardFooter";

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
