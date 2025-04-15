import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "hover:scale-[0.98] inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-center text-xs/4 font-medium outline-none transition duration-300 disabled:pointer-events-none disabled:opacity-30 disabled:hover:cursor-not-allowed [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-[#2A4DD7]",
        black: "bg-black text-white hover:bg-[#3C3C3D] dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white",
        outline: "bg-white text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-light-theme",
        "outline-black": "bg-white text-black shadow-sm ring-1 ring-inset ring-black hover:bg-gray-200",
        "outline-general":
          "bg-white text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 dark:bg-black-dark dark:text-white dark:ring-gray dark:hover:bg-black",
      },
      size: {
        default: "text-md",
        small: "",
        large: "text-md px-3 py-2",
        extralarge: "text-md rounded-[10px] px-3.5 py-[11px] font-semibold [&>svg]:size-[18px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
