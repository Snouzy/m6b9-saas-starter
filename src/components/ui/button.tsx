import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot, Slottable } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase border-2 transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-white border-black hover:bg-white hover:text-black",
        destructive: "bg-destructive text-white border-black hover:bg-white hover:text-destructive",
        outline: "bg-transparent text-black border-black hover:bg-black hover:text-white",
        secondary: "bg-secondary text-black border-black hover:bg-black hover:text-secondary",
        ghost: "bg-transparent text-black border-transparent hover:bg-muted",
        link: "text-black underline underline-offset-2 hover:text-primary",

        brutal:
          "brutal-hover:press-down inline-flex items-center justify-center gap-2 rounded-none border-2 border-black bg-primary px-6 py-3 text-white hover:bg-white hover:text-black transition-colors uppercase text-sm font-bold shadow-brutal",
        brutalAccent: "bg-accent text-black border-black hover:bg-black hover:text-accent",
        brutalGhost: "bg-transparent text-black border-black hover:bg-muted",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-none",
        sm: "h-9 px-3 rounded-none text-xs",
        md: "px-6 py-3",
        lg: "h-12 px-8 rounded-none text-base",
        icon: "size-10 rounded-none",
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
          <div className="group-hover:translate-x-100 w-0 translate-x-0 pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:pr-2 group-hover:opacity-100">
            <Icon />
          </div>
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && iconPlacement === "right" && (
          <div className="w-0 translate-x-full pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <Icon />
          </div>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
