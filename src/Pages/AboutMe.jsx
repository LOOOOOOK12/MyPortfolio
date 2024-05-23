import React from 'react'
import image from '../assets/Images/album.png'
import sampleCv from '../assets/files/sample.pdf'

function AboutMe() {
    return (
        <div id='AboutMe' className='p-8 gap-10 flex flex-col items-center md:flex-row'>
            <img src={image} alt="proofule" className='h-[20rem] w-[25rem]  rounded-md'/>
            <div className='flex flex-col gap-8 w-auto'>
                <h1 className='text-6xl'>About Me</h1>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ducimus vel ipsa vitae temporibus 
                    iste praesentium minus nam velit, rem dicta, molestiae perferendis dolore illum dolores nemo veritatis. Repellat, deserunt.
                </p>
                <a className="underline underline-offset-8" href={sampleCv} download >Download CV</a>
            </div>
        </div>
    )
}

export default AboutMe