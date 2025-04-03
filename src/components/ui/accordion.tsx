"use client";

import * as React from "react";
import { X } from "lucide-react";
import clsx from "clsx";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => <AccordionPrimitive.Item className={cn("border-b border-black", className)} ref={ref} {...props} />);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "group flex flex-1 items-center justify-between py-4 text-left font-mono text-black transition-colors hover:underline",
        "data-[state=open]:bg-accent/40",
        className,
      )}
      ref={ref}
      {...props}
    >
      <span>{children}</span>
      <X
        className={clsx(
          "ml-2 size-5 text-black transition-transform duration-200 ease-linear group-data-[state=open]:rotate-45 group-data-[state=closed]:rotate-0",
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    className={cn(
      "overflow-hidden transition-[max-height,padding] duration-200 ease-in-out data-[state=open]:pt-2 data-[state=closed]:pt-0",
      "data-[state=open]:max-h-[300px] data-[state=closed]:max-h-0",
      className,
    )}
    ref={ref}
    {...props}
  >
    <div className="pb-4 text-sm text-muted-foreground font-mono">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
