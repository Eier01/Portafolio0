'use client'

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";


const info = [
    {
        icon:<FaPhoneAlt/>,
        title: "Celular",
        description: "3134681719",
    },
    {
        icon:<FaEnvelope/>,
        title: "Correo",
        description: "ediermenesefd@gmail.com",
    },
    {
        icon:<FaMapMarkedAlt/>,
        title: "Direccion",
        description: "Popayan cauca",
    },
]

import {motion} from "framer-motion"
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setError(false)
        setSuccess(false)
        setLoading(true)
        
        emailjs
            .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, 
            {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                () => {
                    setSuccess(true)
                    form.current.reset()
                    setLoading(false)
            },
                (error) => {
                    setError(true)
                    setLoading(false)
                },
            );
    };

    return (  
        <motion.section
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition: {delay:2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Trabajemos juntos</h3>                                           

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="user_firstname" type="firstname" placeholder="Primer nombre"/>
                                <Input name="user_lastname" type="lastname" placeholder="Ultimo nombre"/>
                                <Input name="user_email" type="email" placeholder="Correo electronico"/>
                                <Input name="user_phone" type="phone" placeholder="Numero de telefono"/>
                            </div>

                            {/* textarea */}
                            <Textarea name="user_message" className="h-[200px]" placeholder="Escribe tu mensaje aquí"/>

                            {/* btn */}
                            <Button disabled={loading} type="submit" size="md" className="max-w-40 disabled:opacity-50">
                                Enviar mensaje
                            </Button>
                            {success && <span className="text-accent font-semibold">Tu mensaje se ha enviado exitosamente</span>}
                            {error && <span className="text-red-500 font-semibold">Hubo un error al enviar tu mensaje</span>}
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>                    
                </div>                                        
            </div>
        </motion.section>
    );
}

export default Contact;