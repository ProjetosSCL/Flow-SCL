import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-sans font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#41D600] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#103024] text-white",
        accent: "border-transparent bg-[#94EA62] text-[#103024] font-bold",
        secondary: "border-[#DFE7E4] bg-[#F4F7F6] text-[#2B2D2C]",
        destructive: "border-transparent bg-[#FFD6DE] text-[#B3263F] font-bold",
        warning: "border-transparent bg-[#FFEAC0] text-[#8A5A00] font-bold",
        outline: "border-[#DFE7E4] text-[#666D6A] bg-white",
        success: "border-transparent bg-[#DDFFE3] text-[#1F7A1F] font-bold",
        info: "border-transparent bg-[#DEDEFF] text-[#4B35B8] font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
