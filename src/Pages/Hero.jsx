import React from 'react'
import pfp from '../assets/Images/pfp.jpg'
import { heroSwiper } from '../Constants/heroSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from 'swiper/modules';
import Marquee from "react-fast-marquee";
import { skills } from '../Constants/skills'
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css';

function Hero() {
    return (
        <div id='Hero' className='relative h-screen overflow-hidden flex flex-col justify-center items-center text-center'>
            <Swiper
                modules={[Autoplay,EffectFade]}
                effect='fade'
                autoplay = {{
                disableOnInteraction:false,
                delay: 5000
                }}
                loop
                className='absolute top-[3rem] md:top-[2rem] md:bottom-0 md:right-0 size-[30rem] rounded-full'
                >
                {heroSwiper.map((img,idx)=>(
                    <SwiperSlide key={idx} className='w-full h-full'>
                        <img src={img.image} alt={img.alt} className='absolute brightness-[.30] h-full w-full object-cover -z-10'/>
                    </SwiperSlide>  
                ))}
            </Swiper>
            <Marquee
                direction='left'
                autoFill = 'true'
                className="absolute w-[50rem] h-full top-0 left-0 opacity-45"  
            >
                {skills.map((skill)=>(
                    <img src={skill.logo} alt={skill.alt} className='h-[10rem] w-[10rem] m-4'/>
                ))}
            </Marquee>
            <div className='flex flex-col items-center gap-5 z-10'>
                <img src={pfp} alt="me" className='h-40 md:h-52 rounded-full' />
                <h1 className='text-2xl font-semibold md:text-5xl'>Luke Symon A. Alamil</h1>
                <h1 className='text-xl md:text-2xl text-[#8BB3EB]'>💻 Aspiring Web Developer 💻</h1>
            </div>
        </div>
    )
}

export default Hero