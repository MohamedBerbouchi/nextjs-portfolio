'use client'
import { BadgeInfo, CircleUserRound, Home } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import ThemeToggle from './theme-toggle';
function Menu() {
    const [show, setShow] = useState(false)
    useEffect(() => {
        function handleScroll() {
            if (typeof window !== 'undefined') {
                if (window.scrollY > 50) {
                    setShow(true)
                } else {
                    setShow(false)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <menu className={
                cn('bg-background/30 opacity-0 scale-0  transition-transform backdrop-blur-md  duration-300   fixed bottom-4 left-[50%] translate-x-[-50%] flex justify-around w-[300px]  border border-primary px-5 py-1 rounded-2xl  ',
                    show ? 'opacity-1 scale-1' : 'opacity-0 scale-0'
                )
            }>
                <a href="#home" className='rounded-full  p-3 bg-main text-white'><Home /></a>
                <a href="#about-me" className='rounded-full  p-3'><BadgeInfo /></a>
                <a href="#contact" className='rounded-full  p-3'> <CircleUserRound /></a>
                <ThemeToggle />
            </menu>
        </>
    )
}

export default Menu
