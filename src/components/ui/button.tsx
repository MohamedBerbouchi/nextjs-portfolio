'use client'
import React from "react"
import { cn } from "../../lib/utils"

interface TButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    href?: string
}

function Button({ children, className,href, ...props }: TButtonProps) {

    function handleClick(){
        console.log('hhhhhhhhh')
        console.log('href',href)
       if(typeof window !== 'undefined'){
        document.getElementById(href ?? '')?.scrollIntoView()
       }
    }
    return (
        <button onClick={handleClick} className={cn('block text-center  cursor-pointer bg-primary py-2 px-4 rounded-md font-semibold text-primary-foreground', className)} {...props}>
            {children}
        </button>
    )
}

export default Button
