import React from 'react'
import { skills } from '../Constants/skills'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css';

function SkillsContainer({logo,alt,title}) {
    return (
        <div className='flex flex-col items-center justify-center gap-2'>
            <img className='h-32' src={logo} alt={alt} />
            <h1 className='text-2xl'>{title}</h1>
        </div>
    );
}

function Skills() {
    return (
        <div className='flex flex-col items-center justify-center py-20 px-16 bg-slate-500'>
            <h1 className='text-6xl mb-8'>Skills</h1>
                <Swiper
                    modules={[Autoplay,FreeMode]}
                    slidesPerView={5}
                    freeMode ={{
                        enabled: true,
                        momentum: true
                    }}
                    autoplay = {{
                    disableOnInteraction:false,
                    delay: 5000
                    }}
                    loop
                    className='h-full w-full flex justify-center'
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
            
        </div>
    )
}

export default Skills