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
        <div id='Hero' className='h-screen relative overflow-hidden flex flex-col justify-center items-center text-center'>
            <Swiper
                modules={[Autoplay,EffectFade]}
                effect='fade'
                autoplay = {{
                disableOnInteraction:false,
                delay: 5000
                }}
                loop
                className='absolute top-[3rem] md:top-[2rem] md:bottom-0 md:right-1 size-[30rem] rounded-full '
                >
                {heroSwiper.map((img,idx)=>(
                    <SwiperSlide key={idx} className='w-full h-full'>
                        <img src={img.image} alt={img.alt} className='absolute brightness-[.30] h-full w-full object-cover -z-10'/>
                    </SwiperSlide>  
                ))}
            </Swiper>
            <Marquee
                gradientColor="#050d18"
                className='absolute rotate-[-28deg] -top-10 -left-28 w-full'>
                {skills.map((skill,idx)=>(
                    <div className='h-[9rem] mr-10 opacity-45' key={idx}>
                        <img src={skill.logo} alt={skill.alt} className='h-full w-full' />
                    </div>
                ))}
            </Marquee>
            <div className='flex flex-col items-center gap-5 z-10'>
                <img src={pfp} alt="" className='h-40 md:h-52 rounded-full' />
                <h1 className='text-2xl font-semibold md:text-5xl'>Luke Symon A. Alamil</h1>
                <h1 className='text-xl md:text-2xl text-[#8BB3EB]'>💻 Aspiring Web Developer 💻</h1>
            </div>
        </div>
    )
}

export default Hero