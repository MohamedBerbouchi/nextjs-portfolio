import { BadgeInfo, CircleUserRound, Home } from 'lucide-react';
import ThemeToggle from './theme-toggle';
function Menu() {
    return (
        <menu className='bg-background/80  fixed bottom-4 left-[50%] translate-x-[-50%] flex justify-around w-[300px]  border border-primary px-5 py-3 rounded-2xl  '>
            <a href="#home"><Home /></a>
            <a href="#about-me"><BadgeInfo /></a>
            <a href="#contact"> <CircleUserRound /></a>
            <ThemeToggle />
        </menu>
    )
}

export default Menu
