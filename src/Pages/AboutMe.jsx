import React from 'react'
import image from '../assets/Images/album.png'
import sampleCv from '../assets/files/sample.pdf'

function AboutMe() {
    return (
        <div id='AboutMe' className='p-8 bg-transparent'>
            <div className='flex flex-col p-4 bg-[#131315] border-[1px] border-[#3f3f3f] rounded-md gap-10 justify-center items-center w-full md:flex-row'>
                <img src={image} alt="proofule" className='h-[20rem] w-[25rem] md:w-[750px] md:h-[400px] rounded-md'/>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl md:text-5xl font-semibold'>About Me</h1>
                    <p className='text-base md:text-xl leading-8'>I'm Luke Symon A. Alamil, 21 years old and currently a student and taking Bachelor of Science in Information Technology in STI College legazpi. I love arts and design! and since I'm an IT student I focused on
                        studying Web Development.  
                    </p>
                    <a className="underline underline-offset-8 hover:text-primary transition ease-in delay-75 text-2xl" href={sampleCv} download >Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe