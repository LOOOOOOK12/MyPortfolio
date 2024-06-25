import React from 'react'
import { skills } from '../Constants/skills'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css';
import { motion } from 'framer-motion';

export function SkillsContainer({logo,alt,title}) {
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <img className='h-32' src={logo} alt={alt} />
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
}

function Skills() {
    return (
        <div className='flex flex-col items-center justify-center p-8 gap-4 bg-transparent'>
            <motion.h1
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1 }}
                viewport={{ once:true }}
                className='text-4xl md:text-6xl font-semibold mb-8'>Technologies</motion.h1>
            <motion.h2 
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1}}
                viewport={{ once:true }}
                className='text-2xl md:text-3xl mb-8'>That I used are...</motion.h2>
            <motion.div
                initial={{ opacity: 0, y:100 }}
                whileInView={{ opacity: 1, y:0 }}
                transition={{ duration: 1 }}
                viewport={{ once:true }}
                className='w-full h-full'>
                <Swiper
                    modules={[Autoplay,FreeMode]}
                    slidesPerView={5}
                    spaceBetween={20}
                    freeMode ={{
                        enabled: true,
                        momentum: true,
                        minimumVelocity: 0.02,
                        momentumVelocityRatio: 1,
                        momentumRatio: 1,
                        momentumBounce: true
                    }}
                    autoplay = {{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                            425: {
                                slidesPerView: 2,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                        }}
                    loop
                    className='h-full w-full flex justify-center items-center'
                    >
                    {skills.map((skill,idx)=>(
                        <SwiperSlide key={idx}>
                            <SkillsContainer
                                logo = {skill.logo}
                                alt = {skill.alt}
                                title = {skill.title}
                            />
                        </SwiperSlide>  
                    ))}
                </Swiper>
            </motion.div>
        </div>
    )
}

export default Skills