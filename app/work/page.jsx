'use client'

import {motion} from "framer-motion"
import React,{useState} from "react"

import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"

import {BsArrowRight, BsArrowUpRight, BsGithub} from "react-icons/bs"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from "next/link" 
import Image from "next/image" 
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects =[    
    {
        num:"01",
        category:"frontend",
        title:"Proyecto 1",
        description:"Comercio electronico",
        stack: [{name:"Next.js 13"},{name:"React"},{name:"Tailwind"},{name:"Stripe"}],
        image:'/assets/work/comercio.jpeg',
        live: "https://ecommerce-nextjs-rust-three.vercel.app/",
        github: "https://github.com/Eier01/ecommerceNextJS_sanity",
    },
    {
        num:"02",
        category:"full stack",
        title:"Proyecto 2",
        description:"Clon de messenger en tiempo real",
        stack: [{name:"Next.js 13"},{name:"React"},{name:"Tailwind"},{name:"Prisma"},{name:"MongoDB"},{name:"NextAuth"},{name:"Pusher"}],
        image:'/assets/work/messenger.jpeg',
        live: "https://messenger01.vercel.app/",
        github: "https://github.com/Eier01/Messenger01",
    },
    {
        num:"03",
        category:"full stack",
        title:"Proyecto 3",
        description:"Plataforma LMS",
        stack: [{name:"Next.js 13"},{name:"React"},{name:"Tailwind"},{name:"Prisma"},{name:"MySQL"},{name:"NextAuth"},{name:"Stripe"}],
        image:'/assets/work/lmss.jpeg',
        live: "https://lms-plataforma.vercel.app/",
        github: "https://github.com/Eier01/lms-plataforma",
    },
    {
        num:"04",
        category:"frontend",
        title:"Proyecto 4",
        description:"Portafolio",
        stack: [{name:"Next.js 13"},{name:"Tailwind"},{name:"Framer motion"}],
        image:'/assets/work/portafolio.jpeg',
        live: "",
        github: "https://github.com/Eier01/Portafolio0",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex])
    }

    return (  
        <motion.section
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition: {delay:2.4, duration: 0.4, ease: "easeIn"}
            }}
            className="min-h-[70vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[400px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[10px]">
                            <div className="text-6xl leading-none font-extrabold text-transparent text-ouline">
                                {project.num}
                            </div>
                            {/* category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            {/* description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>

                            {/* stack */}
                            <ul className="flex-wrap flex gap-4">
                                {project.stack.map((item,index) =>{
                                    return(
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length -1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className="border border-x-white/20 my-2"/>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* ver proyecto */}
                                <Link href={project.live} target="_blank"> 
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger 
                                                className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                            >
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p>Ver proyecto</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github */}
                                <Link href={project.github} target="_blank"> 
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger 
                                                className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                                            >
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>

                                            <TooltipContent>
                                                <p>Github repositorio</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[400px]"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return(
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[360px] relative group flex justify-center items-center ">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"/>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-contain"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                            {/* slider button */}
                            <WorkSliderBtns
                                containerStyles="mt-2 flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                                    xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none
                                "
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
                                    w-[44px] h-[44px] flex justify-center items-center transition-all
                                "
                            />

                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Work;