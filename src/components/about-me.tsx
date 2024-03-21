import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "../lib/utils";
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', "300", "400", "500", "600", "700", "800", "900"] });

function AboutMe() {
    return (
        <section id="about-me" className={cn(poppins.className, "flex flex-col md:flex-row md:gap-14  pt-16 pb-20")}>

            <Image src='/images/about-me-img.png' alt='' width={447} height={447}
                className="rounded-[29px] max-w-full max-h-[300px] md:max-h-[400px] object-cover object-center"
            />
            <div className="max-w-[600px] flex flex-col gap-3 mt-10 text-center md:text-left">
                <p className="text-3xl font-semibold">About me</p>
                <p className=" font-thin ">
                🚀 Passion for React and Next.js I love building cool stuff with React and Next.js. Whether it&apos;s making interactive websites or dynamic web apps, I&apos;m all in!
<br />
💼 Getting the Backend Right with Express: I&apos;m learning the ropes of backend development with Express. Creating APIs and server-side features? Count me in!
<br />
✨ Growing Every Day: I&apos;m on a journey of continuous learning and improvement. Let&apos;s grow together!

<br />
💡 Eager to Learn and Collaborate: I&apos;m a team player who loves learning new things.
               </p>
            </div>
        </section>
    )
}

export default AboutMe
