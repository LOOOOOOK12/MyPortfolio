import React from 'react'
import pfp from '../assets/Images/pfp.jpg'
import { heroSwiper } from '../Constants/heroSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css';

function Hero() {
    return (
        <div id='Hero' className='h-screen relative flex flex-col justify-center items-center'>
            <Swiper
                modules={[Autoplay,EffectFade]}
                effect='fade'
                autoplay = {{
                disableOnInteraction:false,
                delay: 5000
                }}
                loop
                className='absolute w-full h-full'
                >
                {heroSwiper.map((img,idx)=>(
                    <SwiperSlide key={idx} className='w-full h-full'>
                        <img src={img.image} alt={img.alt} className='absolute brightness-[.33] h-full w-full object-cover -z-10'/>
                    </SwiperSlide>  
                ))}
            </Swiper>
            <div className='flex flex-col items-center gap-5 z-10'>
                <img src={pfp} alt="" className='h-52 rounded-full' />
                <h1 className=' text-5xl'>Luke Symon A. Alamil</h1>
                <h1 className='text-2xl'>💻 Aspiring Web Developer 💻</h1>
            </div>
        </div>
    )
}

export default Hero