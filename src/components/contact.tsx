'use client'
import Image from "next/image";
import { useState } from "react";
import Button from "./ui/button";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""

    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const handleFormChange = (e: any) => {
        const { name, value } = e.target
        setFormData(old => ({ ...old, [name]: value }))
    }
    async function handleFormSubmit(e: any) {
        e.preventDefault();
        setSuccess('')
        setError('')
        setLoading(true)
        console.log(formData)
        try {
            const response = await fetch('api/send-mail', {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            setLoading(false)
            if (response.ok) {
                setSuccess('Message sent successfully!')
                setFormData({ name: "", email: "", message: "" })
            } else {
                setError('Error sending message. Please try again later.')
            }
        } catch (error) {
            setLoading(false)
            console.log('Error: ', error)
        }
    }
    return (
        <section id='contact' className="space-y-10 mt-40">
            <div className="text-center">
                <h2 className="font-bold text-3xl">Contact me</h2>
            </div>
            <div className=" gap-10 flex flex-col md:flex-row  ">
                <Image src='/images/contact-img.png' alt="" width={400} height={400} className="rounded-3xl" />
                <form onSubmit={handleFormSubmit} className=" h-[500px] flex-1 space-y-4">
                    <input required onChange={handleFormChange} name="name" type="text" placeholder="Your Name?" className=" mt-10  w-full px-4 py-2 rounded-lg text-xl bg-transparent border border-slate-400" />
                    <input required onChange={handleFormChange} name="email" type="email" placeholder="Your Email?" className=" mt-10  w-full px-4 py-2 rounded-lg text-xl bg-transparent border border-slate-400" />
                    <textarea required onChange={handleFormChange} name="message" id="" className=" mt-10  w-full h-48 px-4 py-2 rounded-lg text-xl bg-transparent border border-slate-400" placeholder="Messages..." ></textarea>
                    <Button className="w-full disabled:bg-gray-200" >
                        {loading ? 'sending...' : 'send'}
                    </Button>
                    {error && <div className="text-red-500">{error}</div>}
                    {success && <div className="text-green-400">{success}</div>}
                </form>
           
            </div>
        </section>
    )
}

export default Contact
