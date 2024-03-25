'use client'
import { useEffect, useState } from 'react';
import { MENU } from '../lib/constants';
import { cn } from '../lib/utils';
import ThemeToggle from './theme-toggle';

function Menu() {
    const [show, setShow] = useState(false)
    const [active, setActive] = useState('home')
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
   
function scrollToView(link: string){
    setActive(link)
    if(typeof window !== 'undefined'){
        document.getElementById(link)?.scrollIntoView()
       }
}
// useEffect(() => {
//     const handleScroll = () => {
//        ['home','about-me','skills', 'projects', 'contact'].forEach((section)=>{
//             const sectionRef = document.getElementById(section)
           
//             if (sectionRef) {
//                 const rect = sectionRef.getBoundingClientRect();
//                 const windowHeight = window.innerHeight;
        
//                 // Check if any part of the section is within the viewport
//                 const isVisible = (
//                   (rect.top >= 0 && rect.top < windowHeight) ||  // Top visible
//                   (rect.bottom > 0 && rect.bottom <= windowHeight) || // Bottom visible
//                   (rect.height > 0 &&  // Entire element inside viewport
//                     rect.top < windowHeight &&
//                     rect.bottom > 0)
//                 );
        
//                 // Do something when the section becomes visible
//                 if (isVisible) {
//                   console.log("Section is visible!");
//                   setActive(section)
//                   // You can replace this with your desired logic (e.g., change styles)
//                 }
//               }
//        })
    
//     };

//     // Add event listener for scroll
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       // Remove event listener on component unmount to prevent memory leaks
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); 

    return (
        <>
            <menu className={
                cn('cursor-pointer bg-background/30 opacity-0 scale-0  transition-transform backdrop-blur-md  duration-300   fixed bottom-4 left-[50%] translate-x-[-50%] flex justify-around w-[300px]  border border-primary px-5 py-1 rounded-2xl  ',
                    show ? 'opacity-1 scale-1' : 'opacity-0 scale-0'
                )
            }>
                {MENU.map((item, i) => {
                    const Icon = item.icon
                    return <li key={i} onClick={()=> scrollToView(item.link)}  className={cn(
                        'group  rounded-full   p-3 relative  transition-all ease-in duration-200   group-hover:bg-opacity-0',
                        active=== item.link &&  'bg-main text-white'
                    )}>
                        <Icon />
                        <div
                            className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all"
                        >
                            <div
                                className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-16 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-50 before:-top-2"
                            >
                                <div className="rounded-sm bg-black/25 py-1 px-2">
                                    <p className="whitespace-nowrap">{item.title}</p>
                                </div>
                                <div
                                    className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black/25"
                                ></div>
                            </div>
                        </div>

                    </li>
                })}

                {/* <a href="#about-me" className='rounded-full  p-3'><BadgeInfo /></a>
                <a href="#skills" className='rounded-full  p-3'><SquareCode /></a>

                <a href="#projects" className='rounded-full  p-3'><PencilRuler /></a>

                <a href="#contact" className='rounded-full  p-3'> <CircleUserRound /></a> */}
                <ThemeToggle />
            </menu>
        </>
    )
}

export default Menu
