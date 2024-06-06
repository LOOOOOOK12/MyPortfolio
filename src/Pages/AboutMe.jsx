import React from 'react'
import image from '../assets/Images/album.png'
import sampleCv from '../assets/files/sample.pdf'

function AboutMe() {
    return (
        <div id='AboutMe' className='p-8'>
            <div className='flex flex-col p-4 bg-[#131315] border-[1px] border-[#3f3f3f] rounded-md gap-10 justify-center items-center w-full md:flex-row'>
                <img src={image} alt="proofule" className='h-[17rem] w-[25rem] md:w-[750px] md:h-[400px] rounded-md'/>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-5xl md:text-6xl font-semibold'>About Me</h1>
                    <p className='text-base md:text-xl leading-relaxed'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ducimus vel ipsa vitae temporibus 
                        iste praesentium minus nam velit, rem dicta, molestiae perferendis dolore illum dolores nemo veritatis. Repellat, deserunt.
                    </p>
                    <a className="underline underline-offset-8 hover:text-primary transition ease-in delay-75 text-2xl" href={sampleCv} download >Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe