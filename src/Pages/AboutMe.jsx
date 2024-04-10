import React from 'react'
import image from '../assets/Images/album.png'
import sampleCv from '../assets/files/sample.pdf'

function AboutMe() {
    return (
        <div id='AboutMe' className='p-32 gap-20 bg-slate-800 flex flex-col items-center md:flex-row'>
            <img src={image} alt="" className='h-[30rem] w-[25rem]'/>
            <div className='flex flex-col gap-8'>
                <h1 className='text-6xl'>About Me</h1>
                <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ducimus vel ipsa vitae temporibus 
                    iste praesentium minus nam velit, rem dicta, molestiae perferendis dolore illum dolores nemo veritatis. Repellat, deserunt.
                </p>
                <a href={sampleCv} download>Download CV</a>
            </div>
        </div>
    )
}

export default AboutMe