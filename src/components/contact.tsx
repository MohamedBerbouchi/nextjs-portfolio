import Image from "next/image"
import Button from "./ui/button"

function Contact() {
    return (
        <section id='skills' className="space-y-10 mt-40">
            <div className="text-center">
                <h2 className="font-bold text-3xl">Contact me</h2>
            </div>
            <div className=" gap-10 flex flex-col md:flex-row  ">
                <Image src='/images/contact-img.png' alt="" width={400} height={400} className="rounded-3xl" />
                <form action="" className=" h-[500px] flex-1 space-y-4">
                    <input type="text" placeholder="Your Name?" className=" mt-10  w-full px-4 py-2 rounded-lg text-xl bg-transparent border border-slate-400" />
                    <input type="email" placeholder="Your Email?" className=" mt-10  w-full px-4 py-2 rounded-lg text-xl bg-transparent border border-slate-400" />
                    <textarea name="" id="" className=" mt-10  w-full h-48 px-4 py-2 rounded-lg text-xl bg-transparent border border-slate-400" placeholder="Messages..." ></textarea>
                    <Button className="w-full">
                        send
                    </Button>
                </form>

            </div>

        </section>
    )
}

export default Contact
