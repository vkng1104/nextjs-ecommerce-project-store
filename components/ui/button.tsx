import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          `
          bg-black 
          text-white
          font-semibold
          w-auto 
          rounded-full 
          border-transparent 
          px-5 py-3 
          disabled:cursor-not-allowed
          disabled:opacity-50
          hover:opacity-75          
          transition`,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
