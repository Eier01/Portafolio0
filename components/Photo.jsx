'use client'

import {motion} from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (  
        <div className="h-full w-full relative">
            <motion.div
                initial={{opacity:0}}
                animate={{
                    opacity:1,
                    transition: {delay:2, duration: 0.4, ease:"easeIn"}
                }}
            >
                {/* image */}
                <motion.div 
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition: {delay:2.4, duration: 0.4, ease:"easeInOut"}
                    }}
                    className="w-[168px] h-[168px] xl:w-[368px] xl:h-[348px] mix-blend-lighten absolute"
                >
                    <Image
                        src="/assets/foto.png"
                        priority
                        quality={100}
                        fill
                        alt=""
                        className="object-contain brightness-75"
                    />
                </motion.div>

                <motion.svg
                    className="w-[170px] xl:w-[374px] h-[170px] xl:h-[374px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/200/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25","16 25 92 75","4 250 22 22",],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default Photo;