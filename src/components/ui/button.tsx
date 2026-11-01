import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer select-none active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#41D600] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 font-sans [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#103024] text-white hover:bg-[#0b2219] shadow-xs",
        accent: "bg-[#94EA62] text-[#103024] hover:bg-[#41D600] font-bold shadow-xs",
        destructive: "bg-[#B3263F] text-white hover:bg-[#8f1e32]",
        outline:
          "border border-[#DFE7E4] bg-[#FFFFFF] text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]",
        secondary: "bg-[#F4F7F6] text-[#2B2D2C] hover:bg-[#DFE7E4]",
        ghost: "text-[#2B2D2C] hover:bg-[#F4F7F6] hover:text-[#103024]",
        link: "text-[#103024] underline-offset-4 hover:underline font-semibold",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3.5 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
