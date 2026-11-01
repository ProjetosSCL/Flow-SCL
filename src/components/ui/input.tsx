import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-full border border-[#DFE7E4] bg-white px-4 py-2 text-xs sm:text-sm font-sans text-[#2B2D2C] placeholder:text-[#666D6A] transition-all duration-150 focus-visible:outline-none focus-visible:border-[#41D600] focus-visible:ring-2 focus-visible:ring-[#41D600]/40 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
