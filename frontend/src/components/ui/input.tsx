import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-all duration-200",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "hover:border-pink-200 dark:hover:border-pink-800",
          "focus:border-pink-500 dark:focus:border-pink-500",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
