import React from "react"
import { cn } from "../../lib/utils"

interface TButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}

function Button({ children, className, ...props }: TButtonProps) {
    return (
        <button className={cn(' bg-primary py-2 px-4 rounded-md font-semibold text-primary-foreground', className)} {...props}>
            {children}
        </button>
    )
}

export default Button
