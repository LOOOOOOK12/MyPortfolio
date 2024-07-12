import React from 'react'
import sampleCv from '../assets/files/sample.pdf'
import pfp from '../assets/Images/pfp.jpg'
import { motion } from 'framer-motion'

function AboutMe() {
    return (
        <div id='AboutMe' className='p-8 bg'>
            <div className='flex flex-col p-4 bg-[#0e0e1a] border-[1px] border-[#4d5975] rounded-md gap-10 justify-center items-center max-w-[90rem] md:flex-row'>
                <img src={pfp} alt="proofule" className='h-[20rem] w-[25rem] md:w-[750px] md:h-[400px] rounded-md'/>
                <div
                    className='flex flex-col gap-3'>
                    <motion.h1
                        initial={{ opacity: 0, y:-100 }}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once:true }}
                        className='text-3xl md:text-5xl font-semibold'>About Me</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x:100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once:true }}
                        className='text-base leading-8 md:text-xl md:leading-8 text-justify'>I'm Luke Symon A. Alamil, 21 years old and currently a student and taking Bachelor of Science in Information Technology in STI College legazpi.
                        I love arts and design which led me to study Web development and apply my skills designing and making Websites.  
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, x:100 }}
                        whileInView={{ opacity: 1, x:0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once:true }}
                        className="underline underline-offset-8 hover:text-primary transition ease-in delay-75 text-2xl" >Download CV</motion.a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe