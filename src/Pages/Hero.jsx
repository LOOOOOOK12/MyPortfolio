import React from 'react'
import pfp from '../assets/Images/pfp.jpg'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion"
import Marquee from "react-fast-marquee";
import { skills } from '../Constants/skills'
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css';

function Hero() {
    return (
        <div id='Hero' className='relative h-screen overflow-hidden flex flex-col justify-center items-center text-center'>
            <div className='absolute overflow-hidden size-[10rem] -z-10 top-[5rem] right-[3rem] rounded-full blur-3xl opacity-[0.3] bg-[#4991f6]'></div>
            <div className='absolute overflow-hidden size-[10rem] -z-10 bottom-[7rem] left-[5rem] rounded-full blur-3xl opacity-[0.3] bg-[#4991f6]'></div>
            <Marquee
                direction='left'
                autoFill = {true}
                gradient = {true}
                gradientColor='#050d18'
                style={{position:'absolute', width:"100%", height:"100%", top:0, left:0, opacity:0.4, zIndex:5}}
               //className="absolute w-full h-full top-0 left-0 opacity-45"  
            >
                {skills.map((skill)=>(
                    <img src={skill.logo} alt={skill.alt} className='h-[10rem] w-[10rem] m-4 z-10 '/>
                ))}
            </Marquee>
            <motion.div
                initial={{opacity: 0, y: -100 }}
                animate={{opacity: 1, y: 0 }}
                transition={{ duration: 3, type:"spring", delay: .4 }}
                className='flex flex-col items-center gap-5 z-10'>
                <img src={pfp} alt="me" className='h-40 md:h-52 rounded-full' />
                <h1 className='text-2xl font-semibold md:text-5xl'>Luke Symon A. Alamil</h1>
                <TypeAnimation
                    sequence={['Web Developer', 4000, 'Designer', 4000, 'Student', 4000]}
                    style={{ fontSize: '2em' , fontFamily: 'Chivo', color:'#8bb3eb'}}
                    repeat={Infinity}
                    wrapper='h2'
                    speed={20}
                    deletionSpeed={10}
                />
            </motion.div>
        </div>
    )
}

export default Hero