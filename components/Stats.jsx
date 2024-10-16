'use client'

import CountUp from "react-countup"

const stats = [
    {
        num: 2,
        text: "Años de experiencia"
    },
    {
        num: 4,
        text: "Proyectos realizados"
    },
    {
        num: 6,
        text: "Tecnologias"
    },
    {
        num: 0,
        text: "code commits"
    },
]

const Stats = () => {
    return (  
        <section className="pb-12 pt-2 xl:pt-0 xl:pb-12">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) =>{
                        return(
                            <div key={index} className="flex-1 flex gap-4 items-center justify-start">
                                <CountUp
                                    end={item.num}
                                    delay={2}
                                    className="text-4xl xl:text-4xl font-extrabold"
                                />
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;