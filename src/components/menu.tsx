'use client'
import { BadgeInfo, CircleUserRound, Home } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import ThemeToggle from './theme-toggle';
function Menu() {
    const [show, setShow] = useState(false)
    useEffect(() => {

        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setShow(true)
            } else {
                setShow(false)
            }
        })
    }, [])
    return (
        <>
            <menu className={
                cn('bg-background/30 opacity-0 scale-0  transition-transform backdrop-blur-md  duration-300   fixed bottom-4 left-[50%] translate-x-[-50%] flex justify-around w-[300px]  border border-primary px-5 py-3 rounded-2xl  ',
                    show ? 'opacity-1 scale-1' : 'opacity-0 scale-0'
                )
            }>
                <a href="#home"><Home /></a>
                <a href="#about-me"><BadgeInfo /></a>
                <a href="#contact"> <CircleUserRound /></a>
                <ThemeToggle />
            </menu>
        </>
    )
}

export default Menu
