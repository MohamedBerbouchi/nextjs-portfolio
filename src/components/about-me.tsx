import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "../lib/utils";
const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', "300", "400", "500", "600", "700", "800", "900"] });

function AboutMe() {
    return (
        <section id="about-me" className={cn(poppins.className, "flex flex-col md:flex-row md:gap-14  pt-16 pb-40")}>

            <Image src='/images/about-me-img.png' alt='' width={447} height={447}
                className="rounded-[29px] max-w-full max-h-[300px] md:max-h-[400px] object-cover object-center"
            />
            <div className="max-w-[600px] flex flex-col gap-3 mt-10 text-center md:text-left">
                <p className="text-3xl font-semibold">About me</p>
                <p className=" font-thin ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate aperiam modi, similique voluptate blanditiis tempore aspernatur omnis voluptatum beatae, dolore animi,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat praesentium sit commodi error a vel ex laborum pariatur asperiores eaque! Magnam provident ipsam labore est, laboriosam deserunt quaerat perspiciatis soluta? </p>
            </div>
        </section>
    )
}

export default AboutMe
