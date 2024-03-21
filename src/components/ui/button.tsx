import React from "react"
import { cn } from "../../lib/utils"

interface TButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode,
    href?: string
}

function Button({ children, className,href, ...props }: TButtonProps) {
    return (
        <a href={href} className={cn('block text-center  cursor-pointer bg-primary py-2 px-4 rounded-md font-semibold text-primary-foreground', className)} {...props}>
            {children}
        </a>
    )
}

export default Button
