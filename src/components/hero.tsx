import Button from '@/components/ui/button';
import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "../lib/utils";
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', "300", "400", "500", "600", "700", "800", "900"] });

function Hero() {
    return (
        <section id="home" className={cn(poppins.className, " min-h-screen flex flex-col items-center pt-16")}>

            <Image src='/images/hero-img.png' alt='' width={447} height={447}
                className="rounded-full max-w-[347px] max-h-[347px]"
            />
            <div className="max-w-[600px] text-center flex flex-col gap-2 mt-4">
                <p className="text-lg font-semibold">Hey</p>
                <p className="text-3xl font-extrabold">I&apos;m Mohamed Berbouchi</p>
                <p className="text-2xl font-bold">Full-stack Developer</p>
                <p className="font-sm font-thin ">a budding Full Stack Developer excited about crafting awesome websites and applications.
 </p>
            </div>
            <div className='mt-5 flex gap-10'>
                <Button className=''>
                    Projects
                </Button>
                <Button className='bg-main text-white'>
                    Contact me
                </Button>
            </div>
        </section>
    )
}

export default Hero
