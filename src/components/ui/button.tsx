import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot, Slottable } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 group hover:cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-white border border-transparent hover:bg-primary/90 hover:scale-[0.98]",
        destructive: "bg-destructive text-white border border-transparent hover:bg-destructive/90 hover:scale-[0.98]",
        outline: "bg-transparent text-primary border border-primary/20 hover:bg-primary/5 hover:border-primary/40 hover:scale-[0.98]",
        secondary: "bg-secondary text-primary border border-transparent hover:bg-secondary/80",
        ghost: "bg-transparent text-primary hover:bg-primary/5",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        accent: "bg-accent text-black border border-transparent hover:bg-accent/90 hover:scale-[0.98]",
        soft: "bg-primary/10 text-primary border border-transparent hover:bg-primary/20",
        minimal: "bg-transparent text-primary border border-transparent hover:bg-primary/5",
      },
      size: {
        default: "h-9 px-3 py-1.5 sm:h-10 sm:px-4 sm:py-2 rounded-lg text-[13px] sm:text-sm",
        sm: "h-7 px-2 py-1 sm:h-8 sm:px-3 sm:py-1 rounded-md text-xs",
        md: "h-10 px-4 py-2 sm:h-11 sm:px-5 sm:py-2.5 rounded-lg text-sm",
        lg: "h-11 px-5 py-2.5 sm:h-12 sm:px-6 sm:py-3 rounded-xl text-[15px] sm:text-base",
        icon: "h-9 w-9 sm:h-10 sm:w-10 rounded-full p-1.5 sm:p-2",
        pill: "h-9 px-4 py-1.5 sm:h-10 sm:px-5 sm:py-2 rounded-full text-[13px] sm:text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type IconProps = {
  Icon: React.ElementType;
  iconPlacement: "left" | "right";
};

type IconRefProps = {
  Icon?: never;
  iconPlacement?: undefined;
};

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps & ButtonIconProps>(
  ({ className, variant, size, asChild = false, Icon, iconPlacement, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {Icon && iconPlacement === "left" && (
          <div className="mr-2 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && iconPlacement === "right" && (
          <div className="ml-2 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
            <Icon className="h-4 w-4" />
          </div>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
