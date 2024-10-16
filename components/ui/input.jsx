import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "outline-none flex h-[48px] rounded-xl border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
